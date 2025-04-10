
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Projects Header */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Meus Projetos</h1>
              <p className="text-xl text-gray-600">
                Conheça minha coleção de projetos e veja o que tenho desenvolvido
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Filters */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Todos os Projetos
              </button>
              
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === tag
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">Nenhum Projeto Encontrado</h3>
                <p className="text-gray-600">
                  Não há projetos que correspondam ao filtro selecionado.
                </p>
                <button
                  onClick={() => setFilter("all")}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Mostrar Todos os Projetos
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
