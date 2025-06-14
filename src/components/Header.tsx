
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 py-4 shadow-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
          Diogo Pacheco
        </Link>
        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
