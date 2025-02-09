export interface Experience {
  title: string
  company: string
  companyUrl?: string
  location?: string
  period: string
  roles?: string[]
  description: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  imageUrl: string
  externalUrl?: string
  githubUrl?: string
  skills: string[]
  featured?: boolean
}

export interface ArchiveProject {
  title: string
  builtWith: string[]
  links: {
    github?: string
    external?: string
  }
}

