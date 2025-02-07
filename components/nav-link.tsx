"use client"

import type { FC, ReactNode } from "react"
import Link from "next/link"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: ReactNode
}

export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const activeSection = useActiveSection()
  const isActive = activeSection === href.replace("#", "")

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 96
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "text-sm tracking-widest transition-colors",
        isActive ? "text-teal-300" : "text-slate-400 hover:text-teal-300",
      )}
    >
      {children}
    </Link>
  )
}

