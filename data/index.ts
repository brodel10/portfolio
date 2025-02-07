import type { Experience, Project, ArchiveProject } from "@/types"

export const experiences: Experience[] = [
  {
    title: "Lead Frontend Developer, Fintech",
    company: "777 Partners",
    companyUrl: "https://www.777part.com/",
    period: "2021 — 2024",
    description:
      "Built, styled, and shipped high-quality websites and design systems for clients like UOwn, Merit Life Group, and Sutton Park. Developed and maintained reusable components used across multiple projects, along with Node/Express utilities and modules to enhance scalability. Worked closely with designers, project managers, and engineers to bring creative concepts to life and deliver polished, production-ready solutions.",
    skills: ["JavaScript", "TypeScript", "React", "Storybook", 'Express', 'NodeJS', 'Next.js', 'MobX', 'Bootstrap'],
  },
  {
    title: "Lead Frontend Developer",
    company: "UOwn",
    companyUrl: "https://uownleasing.com/",
    period: "2021 — 2024",
    roles: ["Developer"],
   description:
      "Built, designed, and maintained UI components across UOwn’s four core platforms, including customer servicing, loan origination, the customer-facing website, and the AMS (Account Management System). Onboarded and integrated new merchant partners into the platform, ensuring seamless functionality while maintaining compatibility with existing merchant systems without disrupting the platform’s stability. Established frontend coding standards to ensure consistency and efficiency across projects. Collaborated with engineers, UI/UX designers, and project managers to deliver polished, user-centric solutions. Identified and resolved bugs while continuously improving performance and usability across all web applications.",
    skills: ["JavaScript", "TypeScript", "React", "Storybook", 'Express', 'NodeJS', 'Next.js', 'MobX', 'Bootstrap'],
  },
  {
    title: "Full Stack Developer",
    company: "Kitchmet",
    period: "2021",
    description:
      "Collaborated with other student developers to create a new brand and website for Kitchmet. In this project, I focused on developing a real-time live chat system using ASP.Net Core SignalR and designing UI components for multiple pages.",
    skills: ["Javascript", "React", "C#", "MSSQL"],
  },
  {
    title: "Aviation Support Equipment Technician",
    company: "United States Navy",
    companyUrl: "https://navy.mil",
    period: "2013 — 2020",
    description:
      "Proud veteran of the United States Navy. Supervised a team of technicians to complete critical maintenance tasks, ensuring operational readiness across multiple units. Led large-scale training sessions, improved performance metrics, and efficiently managed equipment logistics with zero discrepancies in audits.",
    skills: ["Leadership", "Communication", "Teamwork", "Adaptability"],
  },
]

export const featuredProjects: Project[] = [
  {
    title: "Build a Notes Web Application",
    description:
      "A notes web application. Currently in progress.",
    imageUrl: "/placeholder.svg",
    externalUrl: "#",
    skills: ['React', "Typescript", "Express", "Next.js"],
    featured: true,
  },
  // Add more featured projects...
]

export const archiveProjects: ArchiveProject[] = [
  {
    year: "2024",
    title: "A Complete Accessibility Testing Guide by Klaviyo",
    madeAt: "Klaviyo",
    builtWith: ["Next.js", "MDX", "Tailwind CSS"],
    links: {
      external: "#",
    },
  },
  // Add more archive projects...
]

