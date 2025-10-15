
import { Link } from "react-router-dom";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Project } from "../data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-full flex flex-col">
      {/* Image Container with Overlay */}
      <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay with Action Buttons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link to={`/project/${project.id}`}>
            <Button size="sm" variant="secondary" className="backdrop-blur-sm">
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </Link>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live
              </Button>
            </a>
          )}
        </div>
      </div>

      <CardHeader className="pb-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 text-xs px-2 py-1">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent className="pb-3 flex-1">
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </CardContent>

      <CardFooter className="pt-0 flex justify-between items-center">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          {project.date}
        </span>
        
        <Link
          to={`/project/${project.id}`}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
        >
          Learn More
          <ExternalLink className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
