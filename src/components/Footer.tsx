
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/Swift132", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/diogo-pacheco-1a280a264/", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, url: "mailto:diogosilvapalcheco@enta.pt", label: "Email" }
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">Diogo Pacheco</Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Cybersecurity Student | ENTA</p>
          </div>
          
          <motion.ul 
            className="flex space-x-4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Diogo Pacheco. All rights reserved.
          </p>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {footerLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ y: -2 }}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
