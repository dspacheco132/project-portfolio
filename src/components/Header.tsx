
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Cloud, Database, Github } from "lucide-react";

const technologies = [
  { name: "Cloud", items: ["AWS", "Oracle Cloud", "Cloudflare"] },
  { name: "DevOps", items: ["Docker", "Terraform", "CI/CD"] },
  { name: "Data", items: ["Databases", "Python", "Grafana"] },
  { name: "Other", items: ["OAuth", "Scrum", "Figma"] },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Project<span className="text-blue-600">Blog</span>
        </Link>
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/projects" className={navigationMenuTriggerStyle()}>
                  Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Technologies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {technologies.map((category) => (
                      <li key={category.name} className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/projects`}
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                          >
                            {category.name === "Cloud" && <Cloud className="h-6 w-6 text-blue-600 mb-2" />}
                            {category.name === "DevOps" && <Github className="h-6 w-6 text-blue-600 mb-2" />}
                            {category.name === "Data" && <Database className="h-6 w-6 text-blue-600 mb-2" />}
                            {category.name === "Other" && <div className="h-6 w-6 rounded-full bg-blue-600 mb-2" />}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {category.name}
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              {category.items.join(", ")}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
