import { useState, useEffect } from "react";
import { Search, Filter, SortAsc, SortDesc, Calendar, Tag, Star, Clock, Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface ProjectsSidebarProps {
  tags: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  projectCount: number;
  projects: any[];
}

const ProjectsSidebar = ({
  tags,
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  projectCount,
  projects
}: ProjectsSidebarProps) => {
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(debouncedSearch);
    }, 300);

    return () => clearTimeout(timer);
  }, [debouncedSearch, onSearchChange]);

  const sortOptions = [
    { value: "date-desc", label: "Most Recent", icon: Calendar },
    { value: "date-asc", label: "Oldest First", icon: Calendar },
    { value: "name-asc", label: "Name A-Z", icon: SortAsc },
    { value: "name-desc", label: "Name Z-A", icon: SortDesc },
    { value: "tags", label: "By Technology", icon: Tag },
    { value: "complexity", label: "By Complexity", icon: Star },
  ];

  return (
    <div className="w-80 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm h-full overflow-y-auto">
      <div className="p-6 pt-4 pr-2 space-y-6">
        {/* Header */}
        <div className="space-y-2 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Filter className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Filter Projects
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {projectCount} project{projectCount !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Search Projects
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search by title, description, or tech..."
              value={debouncedSearch}
              onChange={(e) => setDebouncedSearch(e.target.value)}
              className="pl-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
        </div>

        {/* Sort */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Sort By
          </label>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {option.label}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {/* Quick Filters */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Quick Filters
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={activeFilter === "live" ? "default" : "outline"}
              onClick={() => onFilterChange("live")}
              className={`h-8 text-xs ${
                activeFilter === "live"
                  ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white"
                  : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <Globe className="h-3 w-3 mr-1" />
              Live Demo
            </Button>
            <Button
              variant={activeFilter === "github" ? "default" : "outline"}
              onClick={() => onFilterChange("github")}
              className={`h-8 text-xs ${
                activeFilter === "github"
                  ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white"
                  : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <Github className="h-3 w-3 mr-1" />
              GitHub
            </Button>
            <Button
              variant={activeFilter === "recent" ? "default" : "outline"}
              onClick={() => onFilterChange("recent")}
              className={`h-8 text-xs ${
                activeFilter === "recent"
                  ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white"
                  : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <Clock className="h-3 w-3 mr-1" />
              Recent
            </Button>
            <Button
              variant={activeFilter === "complex" ? "default" : "outline"}
              onClick={() => onFilterChange("complex")}
              className={`h-8 text-xs ${
                activeFilter === "complex"
                  ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white"
                  : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <Star className="h-3 w-3 mr-1" />
              Complex
            </Button>
          </div>
        </div>

        {/* Clear Filters */}
        {(activeFilter !== "all" || searchQuery) && (
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <Button
              variant="outline"
              onClick={() => {
                onFilterChange("all");
                setDebouncedSearch("");
                onSearchChange("");
              }}
              className="w-full h-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSidebar;
