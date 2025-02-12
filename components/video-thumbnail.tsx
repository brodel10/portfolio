"use client";

import Image from "next/image";
import {
  decodeApostrophe,
  formatDuration,
  formatNumber,
  timeAgo,
} from "@/lib/utils";
import { useState } from "react";
import VideoModal from "./video-modal";

interface VideoCardProps {
  title: string;
  channelName: string;
  views: string;
  publishedTime: string;
  duration: string;
  thumbnailUrl: string;
  profileImageUrl: string;
  videoId: string;
}

export default function VideoCard({
  title,
  channelName,
  views,
  publishedTime,
  duration,
  thumbnailUrl,
  profileImageUrl,
  videoId,
}: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full transition ease-in-out duration-300 lg:group-hover:-translate-y-1 cursor-pointer">
        <div
          className="relative mb-3 w-full"
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsModalOpen(true);
            }
          }}
        >
          <div className="relative pt-[56.25%] w-full">
            <Image
              src={thumbnailUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover rounded-xl"
              priority
            />
            <span className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 text-xs font-medium text-white rounded">
              {formatDuration(duration)}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <Image
              src={profileImageUrl || "/placeholder.svg"}
              alt={channelName}
              width={36}
              height={36}
              className="rounded-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium leading-5 text-textLight dark:text-white mb-1 line-clamp-2">
              {decodeApostrophe(title)}
            </h3>
            <div className="flex flex-col text-sm text-text dark:text-gray-400">
              <div className="flex items-center">
                <span className="truncate">{channelName}</span>
              </div>
              <div className="flex items-center">
                <span>
                  {formatNumber(views)} views • {timeAgo(publishedTime)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={videoId}
        title={title}
      />
    </>
  );
}
