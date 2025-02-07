import { experiences, featuredProjects, archiveProjects } from "@/data";
import { CustomNavigationMenu } from "@/components/navigation-menu";
import { Github, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-textLight sm:text-5xl">
                Rodel Advincula
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-textLight sm:text-xl">
                Front End Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>
              <CustomNavigationMenu
                items={[
                  { href: "#about", text: "ABOUT" },
                  { href: "#experience", text: "EXPERIENCE" },
                  { href: "#projects", text: "PROJECTS" },
                ]}
                className="hidden lg:block mt-16"
              />
            </div>
            <CustomNavigationMenu
              items={[
                { href: "#about", text: "ABOUT" },
                { href: "#experience", text: "EXPERIENCE" },
                { href: "#projects", text: "PROJECTS" },
              ]}
              className="lg:hidden mt-8"
            />
            <ul className="ml-1 mt-8 flex items-center gap-6 text-text">
              <li>
                <a
                  href="https://github.com/brodel10"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rodeladvincula/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@brodelridesbikes"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Main content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  I'm a developer passionate about crafting accessible,
                  pixel-perfect user interfaces that blend thoughtful design
                  with robust engineering. My favorite work lies at the
                  intersection of design and development, creating experiences
                  that not only look great but are meticulously built for
                  performance and usability.
                </p>
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-textLight mb-8">
                Experience
              </h2>
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="group relative grid pb-1 transition-all"
                  >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 space-y-4">
                      <div>
                        <h3 className="font-medium text-textLight">
                          <a
                            href={experience.companyUrl || "#"}
                            className="inline-flex items-center"
                          >
                            {experience.title} · {experience.company}
                            <ArrowUpRight className="ml-1 h-4 w-4" />
                          </a>
                        </h3>
                        <p className="text-sm text-text">{experience.period}</p>
                        {experience.roles && (
                          <p className="text-sm text-text">
                            {experience.roles.join(" → ")}
                          </p>
                        )}
                      </div>
                      <p className="text-sm leading-normal">
                        {experience.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <li
                            key={skill}
                            className="bg-highlight text-primary text-xs px-3 py-1 rounded-full"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-textLight mb-8">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 gap-12">
                {featuredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative grid gap-4 pb-1 transition-all lg:grid-cols-12 lg:gap-8"
                  >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 lg:col-span-5">
                      <h3 className="text-xl font-semibold text-textLight">
                        <a
                          href={project.externalUrl || "#"}
                          className="inline-flex items-center"
                        >
                          {project.title}
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        {project.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <li
                            key={skill}
                            className="bg-highlight text-primary text-xs px-3 py-1 rounded-full"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="z-10 lg:col-span-7">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-secondary">
                        {/* Replace with actual image component when available */}
                        <div className="absolute inset-0 bg-gray-800"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="archive"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-textLight mb-8">
                Archive
              </h2>
              <table className="w-full border-collapse text-left">
                <thead className="border-b border-highlight">
                  <tr>
                    <th className="py-4 pr-8 text-sm font-semibold text-textLight">
                      Year
                    </th>
                    <th className="py-4 pr-8 text-sm font-semibold text-textLight">
                      Project
                    </th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-textLight lg:table-cell">
                      Made at
                    </th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-textLight lg:table-cell">
                      Built with
                    </th>
                    <th className="hidden py-4 text-sm font-semibold text-textLight lg:table-cell">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {archiveProjects.map((project, index) => (
                    <tr key={index} className="border-b border-highlight">
                      <td className="py-4 pr-8 text-sm">{project.year}</td>
                      <td className="py-4 pr-8 text-sm">
                        <a
                          href={project.links.external || "#"}
                          className="text-textLight hover:text-primary"
                        >
                          {project.title}
                        </a>
                      </td>
                      <td className="hidden py-4 pr-8 text-sm lg:table-cell">
                        {project.madeAt}
                      </td>
                      <td className="hidden py-4 pr-8 text-sm lg:table-cell">
                        {project.builtWith.join(", ")}
                      </td>
                      <td className="hidden py-4 text-sm lg:table-cell">
                        <div className="flex items-center gap-3">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              className="text-text hover:text-primary"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {project.links.external && (
                            <a
                              href={project.links.external}
                              className="text-text hover:text-primary"
                            >
                              <ArrowUpRight className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </div>
    </main>
  );
}
