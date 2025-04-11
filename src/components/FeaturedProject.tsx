
import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useImageModal } from "./ImageModal";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  const { openModal, Modal } = useImageModal();

  return (
    <>
      <Modal />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <Card className="overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="md:flex">
            <div 
              className="md:w-1/2 h-64 md:h-auto bg-gray-200 dark:bg-gray-700 relative cursor-pointer overflow-hidden"
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
            <CardContent className="p-8 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <motion.h2 
                  className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100"
                  whileHover={{ color: "#3b82f6" }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group"
                  >
                    View Project 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </>
  );
};

export default FeaturedProject;
