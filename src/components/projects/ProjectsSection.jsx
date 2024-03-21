import { NavLink } from "react-router-dom";
import { projectsData } from "../../data/projects/ProjectsData";

function ProjectsSection() {
  return (
    <>
      <main className="max-w-7xl mx-auto md:px-16 px-6">
        <header className="mb-10">
          <div style={{ opacity: 1, transform: "none" }}>
            <h1 className="max-w-3xl font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
              Projects
            </h1>
            <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              I&apos;ve worked on tons of little projects over the years but
              these are the ones that I&apos;m most proud of. Many of them are
              open-source, so if you see something that piques your interest,
              check out the code and contribute if you have ideas on how it can
              be improved.
            </p>
          </div>
        </header>
        <div style={{ opacity: 1, transform: "none" }}>
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {projectsData.map((project) => (
              <NavLink key={project.id} to={`/projects/${project.id}`}>
                <Project project={project} />
              </NavLink>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default ProjectsSection;

function Project({ project }) {
  return (
    <a
      className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
      href="#"
    >
      <img
        alt={project.name}
        loading="lazy"
        width="60"
        height="60"
        decoding="async"
        data-nimg="1"
        className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
        src={project.icon}
        style={{ color: "transparent" }}
      />
      <div>
        <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
        <div className="text-sm dark:text-zinc-400 text-zinc-600">
          {project.caption}
        </div>
      </div>
    </a>
  );
}
