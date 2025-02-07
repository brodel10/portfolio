import type React from "react"
import type { FC } from "react"

interface SectionHeadingProps {
  children: React.ReactNode
}

export const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return <h2 className="text-2xl font-semibold text-slate-200 mb-8">{children}</h2>
}

