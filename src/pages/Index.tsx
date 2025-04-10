
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import ProfileSection from "../components/ProfileSection";
import ContactForm from "../components/ContactForm";
import { getFeaturedProjects, projects } from "../data/projects";

const Index = () => {
  const featuredProjects = getFeaturedProjects();
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow">
        {/* Profile Section */}
        <ProfileSection />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Os meus <span className="text-blue-600 dark:text-blue-400">Projetos</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Bem-vindo ao meu portfólio onde documento a minha jornada construindo 
                websites, aplicações e soluções técnicas criativas.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Ver Todos os Projetos
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projetos em Destaque</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Alguns dos meus melhores trabalhos</p>
              </div>
              <Link
                to="/projects"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium inline-flex items-center gap-1"
              >
                Ver Todos
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
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projetos Recentes</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Veja no que tenho trabalhado ultimamente</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
