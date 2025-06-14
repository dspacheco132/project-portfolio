
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProfileSection from "../components/ProfileSection";
import FeaturedProject from "../components/FeaturedProject";
import ScrollToTop from "../components/ScrollToTop";
import { projects } from "../data/projects";

const Index = () => {
  // Get specific projects for featured section
  const featuredProjectIds = ["5", "11", "10"]; // S3 LocalStack, RFIDConnect, Microservices Architecture
  const featuredProjects = projects.filter(project => featuredProjectIds.includes(project.id));

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <main className="flex-grow">
        <ProfileSection />
        
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Featured Projects</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.id} project={project} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/projects" 
                className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
