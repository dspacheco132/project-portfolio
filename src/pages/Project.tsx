import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Github, Calendar, Play, CheckCircle2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProjectById, Project } from "../data/projects";

// Helper type for extraImages (optional field)
type ExtraImage = { url: string; alt?: string };

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
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

  // RFIDConnect gallery (use only if extraImages exists for this project)
  const extraImages: ExtraImage[] = (project as Project).extraImages || [];

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        {/* Project Header */}
        <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </button>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>

              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-8">
                <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
                <time dateTime={project.date}>{project.date}</time>
              </div>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="container mx-auto px-4 -mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            {/* RFIDConnect Gallery */}
            {extraImages.length > 0 && (
              <div className="mt-8" role="region" aria-label="Project screenshots">
                <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">
                  Screenshots & App Views
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0" role="list">
                  {extraImages.map((img, idx) => (
                    <li key={img.url || idx} role="listitem">
                      <figure className="rounded-lg bg-gray-100 dark:bg-gray-800 p-2 shadow hover:shadow-lg transition-shadow">
                        <img
                          src={img.url}
                          alt={img.alt || `${project.title} screenshot ${idx + 1}`}
                          className="w-full h-64 object-contain object-center rounded-lg"
                          loading="lazy"
                          decoding="async"
                        />
                        {img.alt && (
                          <figcaption className="mt-2 text-xs text-center text-gray-600 dark:text-gray-300">
                            {img.alt}
                          </figcaption>
                        )}
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                {project.description}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-12 whitespace-pre-line">
                {project.longDescription}
              </p>

              {/* YouTube Video */}
              {project.youtubeUrl && (
                <div className="mb-16">
                  {/* Header with icon and title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Play className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      How to Customize Emails in Supabase Self-Hosted
                    </h2>
                  </div>
                  
                  {/* Video Player */}
                  <div className="mb-8">
                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={project.youtubeUrl.replace("watch?v=", "embed/").split("&")[0]}
                          title="How to Customize Emails in Supabase Self-Hosted"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Description and Learning Points */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-blue-100 dark:border-gray-700 shadow-sm">
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      In this video, you'll learn how to fully customize the transactional emails sent by a self-hosted Supabase instance. We'll walk through how to configure your email provider, update email templates, and make sure every message your users receive matches your brand and application flow.
                    </p>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                        What you'll learn:
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Configure SMTP in Supabase
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Customize email templates
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Authentication emails handling
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Test and validate setup
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`View ${project.title} live site (opens in new tab)`}
                  >
                    <Globe className="h-5 w-5" aria-hidden="true" />
                    View Live Site
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                  >
                    <Github className="h-5 w-5" aria-hidden="true" />
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
