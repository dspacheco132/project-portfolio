
import { useState, useMemo, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ProjectsSidebar from "../components/ProjectsSidebar";
import MasonryGrid from "../components/MasonryGrid";
import ScrollToTop from "../components/ScrollToTop";
import { projects } from "../data/projects";
import { Search, Filter, X } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("date-desc");
  const [columns, setColumns] = useState<number>(4);
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);
  
  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Responsive columns
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else if (window.innerWidth < 1280) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);
  
  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Apply tag filter
    if (filter !== "all") {
      if (filter === "live") {
        filtered = filtered.filter(project => project.liveUrl);
      } else if (filter === "github") {
        filtered = filtered.filter(project => project.githubUrl);
      } else if (filter === "recent") {
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        filtered = filtered.filter(project => {
          const projectDate = new Date(project.date || "");
          return projectDate > sixMonthsAgo;
        });
      } else if (filter === "complex") {
        filtered = filtered.filter(project => project.tags.length >= 5);
      } else {
        filtered = filtered.filter(project => project.tags.includes(filter));
      }
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case "date-desc":
        return filtered.sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime());
      case "date-asc":
        return filtered.sort((a, b) => new Date(a.date || "").getTime() - new Date(b.date || "").getTime());
      case "name-asc":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return filtered.sort((a, b) => b.title.localeCompare(a.title));
      case "tags":
        return filtered.sort((a, b) => a.tags[0]?.localeCompare(b.tags[0] || "") || 0);
      case "complexity":
        return filtered.sort((a, b) => b.tags.length - a.tags.length);
      default:
        return filtered;
    }
  }, [filter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <main className="flex-grow pt-16">
        {/* Desktop Layout */}
        <div className="hidden lg:flex min-h-screen">
          {/* Sidebar */}
          <div className="flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)]">
            <ProjectsSidebar
              tags={uniqueTags}
              activeFilter={filter}
              onFilterChange={setFilter}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              projectCount={filteredProjects.length}
              projects={projects}
            />
          </div>
          
          {/* Projects Grid */}
          <div className="flex-1 p-2 -ml-32">
            {filteredProjects.length > 0 ? (
              <MasonryGrid 
                columns={columns} 
                gap={16} 
                className="max-w-7xl mx-auto"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </MasonryGrid>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800 dark:text-white mb-2">No Projects Found</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Try adjusting your search criteria or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setFilter("all");
                      setSearchQuery("");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Search and Filters */}
          <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <button 
                onClick={() => setShowMobileFilters(true)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <Filter className="h-5 w-5" />
              </button>
            </div>
            
            {/* Mobile Filter Chips */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  filter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                All
              </button>
              {uniqueTags.slice(0, 6).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    filter === tag
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
              {uniqueTags.length > 6 && (
                <span className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
                  +{uniqueTags.length - 6} more
                </span>
              )}
            </div>
          </div>
          
          {/* Mobile Projects List */}
          <div className="p-4">
            {filteredProjects.length > 0 ? (
              <div className="space-y-4">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800 dark:text-white mb-2">No Projects Found</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Try adjusting your search criteria or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setFilter("all");
                      setSearchQuery("");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setShowMobileFilters(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-80px)]">
              {/* Quick Filters */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick Filters</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setFilter("live")}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === "live" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() => setFilter("github")}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === "github" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    GitHub
                  </button>
                  <button
                    onClick={() => setFilter("recent")}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === "recent" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    Recent
                  </button>
                  <button
                    onClick={() => setFilter("complex")}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === "complex" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    Complex
                  </button>
                </div>
              </div>

              {/* Technology Filters */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Technology</label>
                <div className="space-y-1">
                  <button
                    onClick={() => setFilter("all")}
                    className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                      filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    All Projects ({filteredProjects.length})
                  </button>
                  {uniqueTags.map((tag) => {
                    const tagCount = projects.filter(p => p.tags.includes(tag)).length;
                    return (
                      <button
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left flex justify-between ${
                          filter === tag ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <span>{tag}</span>
                        <span className="text-xs opacity-70">({tagCount})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sort Options */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort By</label>
                <div className="space-y-1">
                  {[
                    { value: "date-desc", label: "Most Recent" },
                    { value: "date-asc", label: "Oldest First" },
                    { value: "name-asc", label: "Name A-Z" },
                    { value: "name-desc", label: "Name Z-A" },
                    { value: "tags", label: "By Technology" },
                    { value: "complexity", label: "By Complexity" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                        sortBy === option.value ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(filter !== "all" || searchQuery) && (
                <button
                  onClick={() => {
                    setFilter("all");
                    setSearchQuery("");
                  }}
                  className="w-full px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-lg font-medium hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Projects;
