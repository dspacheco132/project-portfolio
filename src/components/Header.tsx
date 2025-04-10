
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Project<span className="text-blue-600">Blog</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
            Projects
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
