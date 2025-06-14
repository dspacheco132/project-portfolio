
import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <Card className="overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-full flex flex-col">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="bg-gray-100 text-gray-800 text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{project.title}</h2>
          <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xs text-gray-500">{project.date}</span>
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group text-sm"
          >
            View Project 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedProject;
