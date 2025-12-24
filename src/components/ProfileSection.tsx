import { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Code, Award, Users, Coffee } from "lucide-react";

const ProfileSection = () => {
  const skills = useMemo(() => [
    { name: "AWS Cloud" },
    { name: "Oracle Cloud" },
    { name: "OAuth" },
    { name: "Tailscale" },
    { name: "Docker" },
    { name: "Cisco" },
    { name: "Python" },
    { name: "Network Security" },
    { name: "Cybersecurity" },
    { name: "CCNA" },
    { name: "CyberOps" },
  ], []);

  const stats = useMemo(() => [
    { icon: Code, label: "Projects", value: "15+" },
    { icon: Award, label: "Certifications", value: "8" },
    { icon: Users, label: "Team Projects", value: "10+" },
    { icon: Coffee, label: "Coffees consumed", value: "∞" },
  ], []);

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden" aria-labelledby="about-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" aria-hidden="true"></div>
            <Avatar className="relative h-56 w-56 border-4 border-white dark:border-gray-800 shadow-2xl">
              <AvatarImage 
                src="/photo-dspacheco.jpeg" 
                alt="Diogo Pacheco profile picture"
                loading="eager"
                fetchPriority="high"
              />
              <AvatarFallback className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                <User className="h-28 w-28" aria-hidden="true" />
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h1 
              id="about-heading"
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
            >
              Diogo Pacheco
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
              Cloud Architect & Software Developer
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
              I am a focused and practical person with a passion for solving problems.
              I value continuous learning and teamwork to achieve objective and relevant results.
              AWS Cloud Architect certified with CCNA and CyberOps certifications. 
              With experience in software development through various projects, cloud infrastructure, network security, and modern technologies including AWS Cloud, Oracle Cloud, OAuth, Tailscale, and more.
            </p>
            
            {/* Stats Section */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              role="list"
              aria-label="Statistics"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  role="listitem"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-gray-600 dark:text-gray-400" aria-hidden="true" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-sm font-medium cursor-default hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
