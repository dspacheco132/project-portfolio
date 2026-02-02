
import { memo } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Project } from "../data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      {/* Image Container with Overlay */}
      <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        
        {/* Overlay: View + Code on first row; Live on second row only when 3 buttons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
          <div className="flex items-center justify-center gap-2">
            <Link to={`/project/${project.id}`} aria-label={`View details for ${project.title}`}>
              <Button size="sm" variant="secondary" className="backdrop-blur-sm focus:ring-2 focus:ring-blue-500">
                <Eye className="h-4 w-4 mr-2" aria-hidden="true" />
                View
              </Button>
            </Link>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
              >
                <Button size="sm" variant="secondary" className="backdrop-blur-sm focus:ring-2 focus:ring-blue-500">
                  <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                  Code
                </Button>
              </a>
            )}
            {project.liveUrl && !project.githubUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo (opens in new tab)`}
              >
                <Button size="sm" variant="secondary" className="backdrop-blur-sm focus:ring-2 focus:ring-blue-500">
                  <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                  Live
                </Button>
              </a>
            )}
          </div>
          {project.liveUrl && project.githubUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center"
              aria-label={`View ${project.title} live demo (opens in new tab)`}
            >
              <Button size="sm" variant="secondary" className="backdrop-blur-sm focus:ring-2 focus:ring-blue-500">
                <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                Live
              </Button>
            </a>
          )}
        </div>
      </div>

      <CardHeader className="pb-3 flex-shrink-0">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 text-xs px-2 py-1 font-medium"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-600 text-xs px-2 py-1">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent className="pb-3 flex-1 flex flex-col">
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed flex-1">
          {project.description}
        </p>
      </CardContent>

      <CardFooter className="pt-4 flex justify-between items-center flex-shrink-0 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          {project.date}
        </span>
        
        <Link
          to={`/project/${project.id}`}
          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-200 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
          aria-label={`Learn more about ${project.title}`}
        >
          Learn More
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </Link>
      </CardFooter>
    </Card>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
