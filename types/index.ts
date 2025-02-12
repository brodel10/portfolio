export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  roles?: string[];
  description: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  externalUrl?: string;
  githubUrl?: string;
  skills: string[];
  featured?: boolean;
}

export interface MiniComponentLibrary {
  title: string;
  builtWith: string[];
  links: {
    github?: string;
    external?: string;
  };
}

export interface YouTubeVideoDetails {
  kind: string;
  etag: string;
  id: string;
  contentDetails: ContentDetails;
  statistics: VideoStatistic;
  snippet: Snippet;
}

export interface YouTubeSearchResult {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: Record<string, unknown>;
  projection: string;
  hasCustomThumbnail: boolean;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface VideoStatistic {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}
