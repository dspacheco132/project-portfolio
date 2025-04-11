
import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useImageModal } from "./ImageModal";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { openModal, Modal } = useImageModal();

  return (
    <>
      <Modal />
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
          <div 
            className="h-48 bg-gray-200 relative cursor-pointer overflow-hidden"
            onClick={() => openModal(project.image, project.title)}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                Ver imagem
              </span>
            </div>
          </div>
          <CardHeader className="pb-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
            <motion.h3 
              className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100"
              whileHover={{ color: "#3b82f6" }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.h3>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
          </CardContent>
          <CardFooter className="pt-0 mt-auto">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={`/project/${project.id}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  View Project
                </Link>
              </motion.div>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default ProjectCard;
