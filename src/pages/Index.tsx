
import { useMemo } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProfileSection from "../components/ProfileSection";
import FeaturedProject from "../components/FeaturedProject";
import ContactSection from "../components/ContactSection";
import ScrollToTop from "../components/ScrollToTop";
import { projects } from "../data/projects";

const Index = () => {
  // Get specific projects for featured section - memoized to avoid recalculation
  const featuredProjectIds = ["featured-1", "featured-2", "featured-3"]; // EV Locator, Sagewell Website, RFIDConnect
  const featuredProjects = useMemo(
    () => projects.filter(project => featuredProjectIds.includes(project.id)),
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      
      <main id="main-content" className="flex-grow" role="main">
        <section id="about" aria-labelledby="about-heading">
          <ProfileSection />
        </section>
        
        <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300" aria-labelledby="featured-projects-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="featured-projects-heading" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A selection of my most impactful work and recent projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.id} project={project} />
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="/projects" 
                className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                View All Projects
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
