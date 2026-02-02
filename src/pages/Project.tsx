import { useState, useCallback, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Globe, Github, Calendar, Play, CheckCircle2, ChevronLeft, ChevronRight, Zap, Target, ChevronDown, ChevronUp } from "lucide-react";
import Header from "../components/Header";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Footer from "../components/Footer";
import { getProjectById, type Project } from "../data/projects";

// Helper type for extraImages (optional field)
type ExtraImage = { url: string; alt?: string; explanation?: string };

const EXPLANATION_COLLAPSE_THRESHOLD = 350;

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");

  const extraImages: ExtraImage[] = (project as Project | undefined)?.extraImages ?? [];
  const gallery = project
    ? [{ url: project.image, alt: project.title, explanation: undefined as string | undefined }, ...extraImages]
    : [];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [expandedExplanations, setExpandedExplanations] = useState<Set<number>>(new Set());
  const currentSlide = lightboxIndex !== null ? gallery[lightboxIndex] : undefined;

  const toggleExplanation = useCallback((idx: number) => {
    setExpandedExplanations((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i > 0 ? i - 1 : gallery.length - 1));
  }, [gallery.length]);
  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i < gallery.length - 1 ? i + 1 : 0));
  }, [gallery.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, goPrev, goNext]);

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

        {/* Project Hero: Video (Supabase) or Image */}
        <div className="container mx-auto px-4 -mt-8">
          <div className="max-w-4xl mx-auto">
            {project.id === "11" && project.youtubeUrl ? (
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-gray-900">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={project.youtubeUrl.replace("watch?v=", "embed/").split("&")[0]}
                      title={`${project.title} — Video walkthrough`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="mt-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-blue-100 dark:border-gray-700 shadow-sm">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    In this video, you'll learn how to fully customize the transactional emails sent by a self-hosted Supabase instance—configuring your email provider, updating templates, and aligning every message with your brand.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Configure SMTP", "Customize email templates", "Authentication emails", "Test & validate"].map((item) => (
                      <span key={item} className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setLightboxIndex(0)}
                className="block w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg cursor-zoom-in hover:ring-2 hover:ring-blue-500/50 transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Enlarge ${project.title} image`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </button>
            )}

            {/* Project Description */}
            <div className="mt-8">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {(project as Project).highlights && (project as Project).highlights!.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                      <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                      Why it stands out
                    </h3>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-1 md:grid-cols-3">
                    {(project as Project).highlights!.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800/80 dark:to-blue-950/30 border border-gray-200/80 dark:border-gray-700/80 shadow-sm"
                      >
                        <Target className="h-5 w-5 flex-shrink-0 text-blue-500 dark:text-blue-400 mt-0.5" />
                        <span className="text-gray-800 dark:text-gray-200 font-medium text-sm leading-snug">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.longDescription && (
                <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white/50 dark:bg-gray-800/30 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 rounded-full bg-blue-500" />
                    Project details
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
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

            {/* Screenshots, Diagrams & App Views */}
            {extraImages.length > 0 && (
              <div className="mt-8" role="region" aria-label="Project screenshots and diagrams">
                <h2 className="text-lg font-semibold mb-6 text-gray-700 dark:text-gray-200">
                  Screenshots & Diagrams
                </h2>
                <ul className="space-y-12 list-none m-0 p-0" role="list">
                  {extraImages.map((img, idx) => {
                    const isExpandable = img.explanation && img.explanation.length > EXPLANATION_COLLAPSE_THRESHOLD;
                    const isExpanded = isExpandable && expandedExplanations.has(idx);
                    return (
                      <li key={img.url || idx} role="listitem" className="scroll-mt-8">
                        <div
                          className={
                            img.explanation
                              ? "flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch"
                              : "block"
                          }
                        >
                          <figure
                            className={
                              img.explanation
                                ? "flex-shrink-0 w-full lg:w-[55%] xl:w-[60%]"
                                : "w-full"
                            }
                          >
                            <button
                              type="button"
                              onClick={() => setLightboxIndex(idx + 1)}
                              className="block w-full rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 cursor-zoom-in hover:ring-2 hover:ring-blue-500/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                              aria-label={`Enlarge image: ${img.alt || `screenshot ${idx + 1}`}`}
                            >
                              <img
                                src={img.url}
                                alt={img.alt || `${project.title} screenshot ${idx + 1}`}
                                className="w-full h-auto min-h-[320px] sm:min-h-[400px] object-contain object-center"
                                loading="lazy"
                                decoding="async"
                              />
                              <span className="sr-only">Click to enlarge</span>
                            </button>
                            {img.alt && !img.explanation && (
                              <figcaption className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                                {img.alt}
                              </figcaption>
                            )}
                          </figure>
                          {img.explanation && (
                            <div className="flex-1 min-w-0 lg:py-2 flex flex-col min-h-0">
                              <motion.div
                                initial={false}
                                animate={{
                                  maxHeight: isExpandable && !isExpanded ? 600 : 3000,
                                }}
                                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                                className="prose prose-sm sm:prose-base prose-gray dark:prose-invert max-w-none prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-h2:text-lg prose-h2:font-semibold prose-h2:mt-4 prose-h2:mb-2 prose-h2:text-gray-900 dark:prose-h2:text-gray-100 prose-h3:text-base prose-h3:font-semibold prose-h3:mt-3 prose-h3:mb-1 overflow-hidden relative"
                              >
                                <ReactMarkdown>{img.explanation}</ReactMarkdown>
                                {isExpandable && !isExpanded && (
                                  <div
                                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"
                                    aria-hidden
                                  />
                                )}
                              </motion.div>
                              {isExpandable && (
                                <button
                                  type="button"
                                  onClick={() => toggleExplanation(idx)}
                                  className="mt-auto pt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                >
                                  {isExpanded ? (
                                    <>
                                      <ChevronUp className="h-4 w-4" />
                                      Show less
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="h-4 w-4" />
                                      Expand to see more
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              {/* YouTube Video (only when not used as hero, e.g. Supabase) */}
              {project.youtubeUrl && project.id !== "11" && (
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
            </div>
          </div>
        </div>
      </main>

      {/* Gallery Lightbox */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
      >
        <DialogContent className="max-w-[96vw] w-[96vw] max-h-[92vh] h-[92vh] p-0 gap-0 overflow-hidden border-0 rounded-xl bg-white dark:bg-zinc-950 shadow-2xl [&>button]:text-gray-600 [&>button]:hover:text-gray-900 dark:[&>button]:text-zinc-400 dark:[&>button]:hover:text-white [&>button]:right-3 [&>button]:top-3 [&>button]:z-10">
          {currentSlide && (
            <div className="flex flex-col lg:flex-row h-full min-h-0">
              {/* Main image + nav arrows */}
              <div className="relative flex-1 flex items-center justify-center min-h-[40vh] lg:min-h-0 bg-gray-100 dark:bg-zinc-900/50 p-4">
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/70 dark:bg-black/50 text-white hover:bg-gray-900/90 dark:hover:bg-black/70 transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <img
                  src={currentSlide.url}
                  alt={currentSlide.alt}
                  className="max-h-[45vh] lg:max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
                />
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/70 dark:bg-black/50 text-white hover:bg-gray-900/90 dark:hover:bg-black/70 transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Right panel: thumbnails + description */}
              <div className="w-full lg:w-80 xl:w-96 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/80">
                {/* Thumbnails strip */}
                <div className="flex gap-2 p-3 overflow-x-auto shrink-0 border-b border-gray-200 dark:border-zinc-800">
                  {gallery.map((item, i) => (
                    <button
                      key={item.url}
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        i === lightboxIndex
                          ? "border-blue-500 ring-2 ring-blue-500/30"
                          : "border-transparent opacity-70 hover:opacity-100 hover:border-gray-400 dark:hover:border-zinc-600"
                      }`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img
                        src={item.url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Description */}
                <div className="flex-1 min-h-0 overflow-y-auto p-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">{currentSlide.alt}</p>
                  {currentSlide.explanation ? (
                    <div className="prose prose-sm dark:prose-invert max-w-none prose-p:text-gray-600 dark:prose-p:text-zinc-400 prose-li:text-gray-600 dark:prose-li:text-zinc-400 prose-strong:text-gray-800 dark:prose-strong:text-zinc-200 prose-h2:text-base prose-h2:font-semibold prose-h2:mt-4 prose-h2:mb-2 prose-h2:text-gray-900 dark:prose-h2:text-zinc-100 prose-h3:text-sm prose-h3:font-semibold prose-h3:mt-3 prose-h3:mb-1">
                      <ReactMarkdown>{currentSlide.explanation}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-zinc-500">No description available.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Project;
