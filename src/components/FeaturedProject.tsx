
import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import { ArrowRight } from "lucide-react";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
      <div className="md:flex">
        <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h2>
            <p className="text-gray-600 mb-6">{project.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{project.date}</span>
            <Link
              to={`/project/${project.id}`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group"
            >
              View Project 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
