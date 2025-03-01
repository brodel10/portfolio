import { YouTubeSearchResult, YouTubeVideoDetails } from "@/types";
import { formatDuration } from "./utils";

interface VideoDataProps {
  id: string;
  duration: string;
  viewCount: string;
}

export async function fetchYouTubeVideos(API_KEY = "", CHANNEL_ID = "") {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const videoDurations: VideoDataProps[] = [];

    const videoIds = data.items
      .map((item: YouTubeSearchResult) => item.id.videoId)
      .join(",");

    if (videoIds) {
      const videoDurationData = await fetchVideoDurations(videoIds, API_KEY);
      videoDurations.push(...videoDurationData);
    }

    if (data.items) {
      const parsedData = data.items.map((item: YouTubeSearchResult) => {
        const newData = videoDurations.find(
          (vid) => vid.id === item.id.videoId
        );
        return newData
          ? {
              ...item,
              snippet: {
                ...item.snippet,
                duration: newData.duration,
                viewCount: newData.viewCount,
              },
            }
          : item;
      });
      return parsedData;
    } else {
      console.error("No videos found");
    }
  } catch (error) {
    console.log("Error fetching videos:", error);
  }
}

export const fetchVideoDurations = async (videoIds: string[], API_KEY = "") => {
  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${API_KEY}`;
  const videoResponse = await fetch(videoUrl);
  const videoData = await videoResponse.json();
  return videoData.items.map((video: YouTubeVideoDetails) => ({
    id: video.id,
    duration: formatDuration(video.contentDetails.duration), // ISO 8601 format
    viewCount: video.statistics.viewCount,
  }));
};

export async function fetchChannelInfo(CHANNEL_ID = "", API_KEY = "") {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${CHANNEL_ID}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items) {
      return data.items;
    } else {
      console.error("No channel found");
    }
  } catch (error) {
    console.error("Error fetching channel:", error);
  }
}

export const fetchVideosByIds = async (
  videoIds?: string[],
  CLIENT_ID: string | undefined,
  CLIENT_SECRET: string | undefined,
  REFRESH_TOKEN: string | undefined
) => {
  const ids =
    videoIds && videoIds.length > 0
      ? videoIds
      : ["HUIjvJTU2Jo", "fKbAHZc6KnE", "yErR2a9vlTA", "85TuR98euuM"];
  const accessToken = await refreshAccessToken(
    CLIENT_ID,
    CLIENT_SECRET,
    REFRESH_TOKEN
  );
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&mine=true&id=${ids}`;
  if (!accessToken) {
    // throw new Error("Failed to retrieve access token");
    console.log("Failed to retrieve access token");
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  const data = await response.json();
  return data.items;
};

export const getAllVideosByClient = async (
  CLIENT_ID: string | undefined,
  CLIENT_SECRET: string | undefined,
  REFRESH_TOKEN: string | undefined
) => {
  const accessToken = await refreshAccessToken(
    CLIENT_ID,
    CLIENT_SECRET,
    REFRESH_TOKEN
  );

  if (!accessToken) {
    // throw new Error("Failed to retrieve access token");
    console.log("Failed to retrieve access token");
  }
  const url =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&forMine=true&type=video&maxResults=50";
  // const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&mine=true`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  const data = await response.json();
  return data;
};

export async function refreshAccessToken(
  CLIENT_ID: string | undefined,
  CLIENT_SECRET: string | undefined,
  REFRESH_TOKEN: string | undefined
) {
  // const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  // const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  // const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID!,
        client_secret: CLIENT_SECRET!,
        refresh_token: REFRESH_TOKEN!,
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // throw new Error(`Error refreshing token: ${data.error}`);
      console.log(`Error refreshing token: ${data.error}`);
    }

    return data.access_token;
  } catch (error) {
    console.log("Failed to refresh token:", error);
    return null;
  }
}
