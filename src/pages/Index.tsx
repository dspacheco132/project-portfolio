
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import { getFeaturedProjects, projects } from "../data/projects";

const Index = () => {
  const featuredProjects = getFeaturedProjects();
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Showcasing My Creative <span className="text-blue-600">Projects</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Welcome to my project blog where I document my journey building websites, 
                apps, and other creative technical solutions.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                View All Projects
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
                <p className="text-gray-600 mt-2">Highlighting some of my best work</p>
              </div>
              <Link
                to="/projects"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
              <p className="text-gray-600 mt-2">Check out what I've been working on lately</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
