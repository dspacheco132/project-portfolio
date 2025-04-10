
import { Link } from "react-router-dom";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{project.date}</span>
          <Link
            to={`/project/${project.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
