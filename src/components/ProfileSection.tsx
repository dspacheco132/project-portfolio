
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const ProfileSection = () => {
  const skills = [
    { name: "Oracle Cloud", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
    { name: "OAuth", color: "bg-red-100 text-red-800 hover:bg-red-200" },
    { name: "Tailscale", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
    { name: "Docker", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { name: "Cisco", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { name: "Python", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { name: "Network Security", color: "bg-green-100 text-green-800 hover:bg-green-200" },
    { name: "Cybersecurity", color: "bg-red-100 text-red-800 hover:bg-red-200" },
    { name: "CCNA", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { name: "CyberOps", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-48 w-48 border-4 border-white shadow-lg">
              <AvatarImage src="/diogo-profile.jpg" alt="Diogo Pacheco" />
              <AvatarFallback className="bg-blue-100 text-blue-800">
                <User className="h-24 w-24" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Diogo Pacheco
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Cybersecurity Specialist | ENTA
            </motion.p>
            <motion.p 
              className="text-gray-700 max-w-2xl mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I am a focused, practical person with a passion for problem-solving.
              I value continuous learning and teamwork to achieve objective and relevant results.
              Currently studying Cybersecurity with experience in Oracle Cloud, OAuth, Tailscale,
              and various other technologies.
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
