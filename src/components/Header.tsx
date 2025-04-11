
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Diogo Pacheco
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/resume" className="text-gray-700 hover:text-blue-600 transition-colors">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
