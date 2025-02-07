import type { FC } from "react"
import Image from "next/image"
import type { Project } from "@/types"
import { ExternalLink } from "./external-link"

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative grid gap-4 pb-1">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-800">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div>
        <ExternalLink href={project.externalUrl || "#"}>
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </ExternalLink>
        <p className="mt-2 text-sm text-slate-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span key={skill} className="bg-highlight text-primary text-xs px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

