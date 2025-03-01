"use client";

import { useRef, useEffect, useState } from "react";
import VideoThumbnail from "@/components/video-thumbnail";
import type { YouTubeVideoDetails } from "@/types";
import Link from "next/link";
import type React from "react";

interface VideoGridProps {
  videos: YouTubeVideoDetails[];
  channelInfo: any;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, channelInfo }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-opacity duration-1500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {(videos || [])?.map((video: YouTubeVideoDetails, index: number) => (
        <div
          key={video.etag}
          className={`group relative w-full max-w-xl md:max-w-xs transition-all duration-750 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <VideoThumbnail
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            thumbnailUrl={video.snippet.thumbnails.high.url}
            profileImageUrl={channelInfo[0].snippet.thumbnails.default.url}
            views={video.statistics.viewCount}
            duration={video.contentDetails.duration}
            publishedTime={video.snippet.publishedAt}
            videoId={video.id}
          />
        </div>
      ))}
      <div
        className={`place-self-end md:col-span-2 transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: `${videos?.length * 100}ms` }}
      >
        <Link
          href={"https://www.youtube.com/@brodelridesbikes"}
          className="text-textLight font-mono cursor-pointer lg:hover:-translate-y-1 lg:hover:translate-x-1 lg:hover:text-primary p-x-1"
        >
          see more...
        </Link>
      </div>
    </div>
  );
};

export default VideoGrid;
