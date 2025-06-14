
import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 bg-gray-200 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-blue-100 text-blue-800 hover:bg-blue-200"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="bg-gray-100 text-gray-800">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-gray-600 line-clamp-3">{project.description}</p>
      </CardContent>
      <CardFooter className="pt-0 mt-auto">
        <div className="flex justify-between items-center w-full">
          <span className="text-sm text-gray-500">{project.date}</span>
          <Link
            to={`/project/${project.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Project
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
