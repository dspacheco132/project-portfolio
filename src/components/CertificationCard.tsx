
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useImageModal } from "./ImageModal";

interface CertificationProps {
  title: string;
  imageUrl: string;
  credlyUrl?: string;
  description?: string;
}

const CertificationCard = ({ title, imageUrl, credlyUrl, description }: CertificationProps) => {
  const { openModal, Modal } = useImageModal();

  return (
    <>
      <Modal />
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="h-48 overflow-hidden cursor-pointer"
          onClick={() => openModal(imageUrl, title)}
        >
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
          )}
          {credlyUrl && (
            <motion.a
              href={credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver no Credly <ExternalLink className="ml-1 h-3 w-3" />
            </motion.a>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default CertificationCard;
