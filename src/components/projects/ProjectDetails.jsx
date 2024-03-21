import { projectsData } from "../../data/projects/ProjectsData";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  return (
    <div className="mt-20">
      <div className="mt-20">
        <h2>{project.name}</h2>
        <a href={project.liveLink}>Explore</a>
        <img src={project.image} alt={project.name} />
        <h2>Overview</h2>
        <p>{project.overview}</p>
        <ul>
          {project.tecknologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetails;
