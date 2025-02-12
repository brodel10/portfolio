import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeApostrophe(str: string): string {
  return str.replace(/&#39;/g, "'");
}

export function formatNumber(num: number | string): string {
  const convertedNum = Number(num);
  if (convertedNum < 1000) return convertedNum.toString();
  return (convertedNum / 1000).toFixed(1).replace(/\.0$/, "") + "k";
}

export function timeAgo(date: Date | string | number): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) return "00:00";

  const hours = match[1] ? String(match[1]).padStart(2, "0") : null;
  const minutes = match[2] ? String(match[2]).padStart(2, "0") : "00";
  const seconds = match[3] ? String(match[3]).padStart(2, "0") : "00";

  return hours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
}
