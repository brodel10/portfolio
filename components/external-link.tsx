import type { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import type React from "react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-slate-200 hover:text-teal-300 transition-colors group"
    >
      {children}
      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
    </a>
  );
};
