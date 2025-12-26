
import { memo } from "react";
import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = memo(({ project }: FeaturedProjectProps) => {
  return (
    <Card className="overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-600 text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">{project.description}</p>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <time className="text-xs text-gray-500 dark:text-gray-400 font-medium" dateTime={project.date}>{project.date}</time>
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded transition-colors"
            aria-label={`View ${project.title} project details`}
          >
            View Project 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
});

FeaturedProject.displayName = "FeaturedProject";

export default FeaturedProject;
