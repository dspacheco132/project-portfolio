
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Github, Calendar } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProjectById } from "../data/projects";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Project Header */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-12">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </button>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-8">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Image */}
        <div className="container mx-auto px-4 -mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="text-xl text-gray-700 mb-8">
                {project.description}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
              <p className="text-gray-700 mb-12 whitespace-pre-line">
                {project.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    View Live Site
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Project;
