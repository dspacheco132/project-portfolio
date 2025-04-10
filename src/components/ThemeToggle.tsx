
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or saved preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Toggle
      pressed={isDarkMode}
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      <motion.div
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center justify-center"
      >
        {isDarkMode ? (
          <Moon className="h-5 w-5 text-gray-800 dark:text-yellow-300" />
        ) : (
          <Sun className="h-5 w-5 text-yellow-500" />
        )}
      </motion.div>
    </Toggle>
  );
};

export default ThemeToggle;
