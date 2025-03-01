import type { Experience, Project, MiniComponentLibrary } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Lead Frontend Developer, Fintech",
    company: "777 Partners",
    companyUrl: "https://www.777part.com/",
    period: "2021 — 2024",
    description:
      "Built, styled, and shipped high-quality websites and design systems for clients like UOwn, Merit Life Group, and Sutton Park. Developed and maintained reusable components used across multiple projects, along with Node/Express utilities and modules to enhance scalability. Worked closely with designers, project managers, and engineers to bring creative concepts to life and deliver polished, production-ready solutions.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Storybook",
      "Express",
      "NodeJS",
      "Next.js",
      "MobX",
      "Bootstrap",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company: "UOwn",
    companyUrl: "https://uownleasing.com/",
    period: "2021 — 2024",
    roles: ["Developer"],
    description:
      "Built, designed, and maintained UI components across UOwn’s four core platforms, including customer servicing, loan origination, the customer-facing website, and the AMS (Account Management System). Onboarded and integrated new merchant partners into the platform, ensuring seamless functionality while maintaining compatibility with existing merchant systems without disrupting the platform’s stability. Established frontend coding standards to ensure consistency and efficiency across projects. Collaborated with engineers, UI/UX designers, and project managers to deliver polished, user-centric solutions. Identified and resolved bugs while continuously improving performance and usability across all web applications.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Storybook",
      "Express",
      "NodeJS",
      "Next.js",
      "MobX",
      "Bootstrap",
    ],
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
];

export const projects: Project[] = [
  {
    title: "Notes Web Application",
    description: "A notes web application. Currently in progress.",
    imageUrl: "notes-placeholder.png",
    externalUrl: "https://notes-app-sepia-two.vercel.app/",
    skills: ["React", "Typescript", "Express", "Next.js"],
    featured: false,
  },
  {
    title: "Elenita's Resort & Villas",
    description: "A Villa Resort in the Philippines.",
    imageUrl: "resort.png",
    externalUrl: "https://elenitas-resort.vercel.app",
    skills: ["React", "Typescript", "Supabase", "Vite"],
    featured: true,
  },
];

export const miniComponentLibrary: MiniComponentLibrary[] = [
  {
    title: "Product Preview Card",
    builtWith: ["HTML", "CSS"],
    links: {
      github: "https://github.com/brodel10/product-preview",
      external: "https://product-preview-blond.vercel.app/",
    },
  },
  {
    title: "Blog Preview Card",
    builtWith: ["HTML", "CSS"],
    links: {
      github: "https://github.com/brodel10/blog-preview-card-main",
      external: "https://blog-preview-card-main-alpha-five.vercel.app/",
    },
  },
  {
    title: "Social Links Profile",
    builtWith: ["HTML", "CSS", "JS"],
    links: {
      github: "https://github.com/brodel10/social-links-profile",
      external: "https://social-links-profile-nine-dusky.vercel.app/",
    },
  },
  {
    title: "Recipe Page",
    builtWith: ["HTML", "CSS"],
    links: {
      github: "https://github.com/brodel10/recipe-page",
      external: "https://recipe-page-kappa-virid.vercel.app/",
    },
  },
  {
    title: "Testimonial Grid Section",
    builtWith: ["HTML", "CSS"],
    links: {
      github: "https://github.com/brodel10/testimonials-grid-section",
      external: "https://testimonials-grid-section-iota-ruddy.vercel.app/",
    },
  },
  {
    title: "Feature Section",
    builtWith: ["HTML", "CSS"],
    links: {
      github: "https://github.com/brodel10/four-card-feature-section",
      external: "https://four-card-feature-section-pi-six.vercel.app/",
    },
  },
];
