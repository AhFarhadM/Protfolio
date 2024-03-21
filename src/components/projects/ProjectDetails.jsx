import { projectsData } from "../../data/projects/ProjectsData";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));
  // const pragraph = project.overview.split("<br />");
  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div style={{ opacity: 1, transform: "none" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-primaryRegular text-zinc-600 font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-sm">
              {project.name}
            </h2>
            <a
              href={project.liveLink}
              className="dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 cursor-pointer hover:border-zinc-700"
            >
              Explore
            </a>
          </div>
          <div className="relative w-full h-40 pt-[52.5%]">
            <img
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
              src={project.image}
              alt={project.name}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <h2
              id="overview"
              className=" before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 lg:text-4xl text-3xl text-zinc-700 my-8"
            >
              <a href="#overview">Overview</a>
            </h2>
            {project.overview.split("<br />").map((p, i) => (
              <p className="mt-2 mb-6 text-[16px]" key={i}>
                {p}
              </p>
            ))}
            <h2
              id="technology"
              className=" before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 lg:text-4xl text-3xl text-zinc-700 my-8"
            >
              <a href="#technology">Technologies</a>
            </h2>
            <ul className="list-[square] mt-5 ml-5 mb-20">
              {project.technologies.map((technology, index) => (
                <li className="mb-4" key={index}>
                  <code className=" py-[0.15rem] px-1 rounded-sm font-medium dark:bg-primary-bg bg-secondary-bg dark:text-zinc-200 text-pink-500">
                    {technology}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
