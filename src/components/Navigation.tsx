
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Resume", href: "/resume", icon: FileText },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" aria-label="Diogo Pacheco - Home" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <img 
              src="https://r2.diogopacheco.com/public/dspacheco-logo-black.webp" 
              alt="Diogo Pacheco Logo" 
              className="h-12 w-auto dark:invert"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12 ml-auto">
            <ul className="flex items-center space-x-10 lg:space-x-12 list-none m-0 p-0">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.href.startsWith('/#') ? (
                      <a
                        href={item.href}
                        className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                        aria-current={location.pathname === item.href ? "page" : undefined}
                      >
                        <item.icon className="w-4 h-4" aria-hidden="true" />
                        <span>{item.name}</span>
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded ${
                          location.pathname === item.href
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                        aria-current={location.pathname === item.href ? "page" : undefined}
                      >
                        <item.icon className="w-4 h-4" aria-hidden="true" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </motion.div>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-2"
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-4 space-y-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg mt-2 list-none m-0 p-0">
                {navItems.map((item, index) => (
                  <li key={item.name}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.href.startsWith('/#') ? (
                        <a
                          href={item.href}
                          className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded"
                          aria-current={location.pathname === item.href ? "page" : undefined}
                        >
                          <item.icon className="w-4 h-4" aria-hidden="true" />
                          <span>{item.name}</span>
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className={`flex items-center space-x-2 px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded ${
                            location.pathname === item.href
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                          aria-current={location.pathname === item.href ? "page" : undefined}
                        >
                          <item.icon className="w-4 h-4" aria-hidden="true" />
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
