
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const ProfileSection = () => {
  const skills = [
    { name: "Oracle Cloud", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
    { name: "AWS", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
    { name: "Terraform", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
    { name: "Docker", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { name: "Cloudflare", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
    { name: "Python", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { name: "Scrum", color: "bg-green-100 text-green-800 hover:bg-green-200" },
    { name: "Figma", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
    { name: "OAuth", color: "bg-red-100 text-red-800 hover:bg-red-200" },
    { name: "Grafana", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-48 w-48 border-4 border-white dark:border-gray-700 shadow-lg">
              <AvatarImage src="/diogo-profile.jpg" alt="Diogo Pacheco" />
              <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <User className="h-24 w-24" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Diogo Pacheco
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              20 anos
            </motion.p>
            <motion.p 
              className="text-gray-700 dark:text-gray-300 max-w-2xl mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Desenvolvedor apaixonado por tecnologia com experiência em Oracle Cloud, 
              AWS, Terraform, Docker, e diversas outras tecnologias. Meu foco é criar 
              soluções técnicas eficientes e inovadoras.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-2 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge className={`${skill.color} px-3 py-1 cursor-default transition-all duration-300`}>
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
