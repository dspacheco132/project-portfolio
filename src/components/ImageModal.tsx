
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
}

export const ImageModal = ({ isOpen, onClose, imageUrl, alt }: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <img 
                src={imageUrl} 
                alt={alt} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export const useImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [alt, setAlt] = useState("");

  const openModal = (url: string, altText: string = "Image") => {
    setImageUrl(url);
    setAlt(altText);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    imageUrl,
    alt,
    openModal,
    closeModal,
    Modal: () => <ImageModal isOpen={isOpen} onClose={closeModal} imageUrl={imageUrl} alt={alt} />
  };
};
