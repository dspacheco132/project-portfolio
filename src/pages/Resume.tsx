
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Mail, Briefcase, Award, GraduationCap, Github, Linkedin } from "lucide-react";

const Resume = () => {
  const skills = [
    "Oracle Cloud", "OAuth", "Tailscale", "Python", 
    "JavaScript", "React", "Docker", "Kubernetes", "Git", "CI/CD", "Linux",
    "Cisco", "Network Security", "Cybersecurity", "Shell Scripting"
  ];

  const experiences = [
    {
      title: "Web Developer Internship",
      company: "Expolab - Centro Ciência Viva",
      period: "March 2024 - August 2024 (6 months)",
      location: "Lagoa, Ilha de São Miguel, Portugal",
      description: [
        "Web development internship with evaluation score: 20/20",
        "Created responsive web applications using modern frameworks",
        "Worked with both frontend and backend technologies",
        "Collaborated with team members in an agile environment"
      ]
    }
  ];

  const education = [
    {
      degree: "Cybersecurity Specialist",
      institution: "Escola de Novas Tecnologias dos Açores",
      period: "September 2024 - 2025",
      description: "Specialized technical training in cybersecurity principles and practices"
    },
    {
      degree: "Computer Networks - Installation and Management",
      institution: "Escola de Novas Tecnologias dos Açores",
      period: "2021 - July 2024",
      description: "Technical degree focused on network infrastructure, installation and management"
    }
  ];

  const certifications = [
    "CyberOps Associate",
    "CCNA: Introduction to Networks",
    "GDPR for Attentive Citizens",
    "Cybersecurity Citizen",
    "CCNA: Switching, Routing, and Wireless Essentials"
  ];

  const awards = [
    {
      title: "2nd Place at Azores Skills - CyberSecurity",
      organization: "Azores Skills",
      year: "2024",
      description: "Recognition for excellence in cybersecurity skills competition",
      image: "/azores-skills-award.jpg"
    },
    {
      title: "3rd Place at Atlântico Junior - FLAD",
      organization: "FLAD",
      year: "2022",
      description: "Award for innovation and technical achievement",
      image: "/atlanticojunior.jpeg"
    },
    {
      title: "3rd Place at SkillsPortugal - CyberSecurity",
      organization: "SkillsPortugal",
      year: "2024",
      description: "National recognition for cybersecurity skills",
      image: "/skills-portugal-award.jpg"
    },
    {
      title: "Merit Award - Jolera",
      organization: "Jolera",
      year: "2024",
      description: "Recognition for outstanding technical achievement",
      image: "/merit-jolera.jpg"
    },
    {
      title: "Merit Award - Câmara Municipal de Ponta Delgada",
      organization: "Ponta Delgada City Hall",
      year: "2024",
      description: "Recognition for contributions to local technology initiatives",
      image: "/merit-ponta-delgada.jpg"
    },
    {
      title: "Merit Award - Connexall",
      organization: "Connexall",
      year: "2025",
      description: "Award for innovation and technical achievement - David Tavares",
      image: "/CertificadoConnexall.JPG"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Resume</h1>
            <div className="flex flex-col md:flex-row gap-6 text-gray-600">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                <span>diogosilvapalcheco@enta.pt</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                <span>Ponta Delgada, Portugal</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-2 text-blue-600" />
                <a href="https://www.linkedin.com/in/diogo-pacheco-1a280a264/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-2 text-blue-600" />
                <a href="https://github.com/Swift132" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Summary */}
          <motion.section 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              Summary
            </h2>
            <p className="text-gray-700 mb-6">
              I am Diogo Pacheco, a focused, practical person with a passion for problem-solving. 
              I value continuous learning and teamwork to achieve objective and relevant results.
              Currently studying Cybersecurity at ENTA (Escola de Novas Tecnologias dos Açores).
            </p>
          </motion.section>
          
          {/* Skills */}
          <motion.section 
            className="max-w-4xl mx-auto mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              Key Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1.5 text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Work Experience */}
          <motion.section 
            className="max-w-4xl mx-auto mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="h-6 w-6 mr-2 text-blue-600" />
              Work Experience
            </h2>
            
            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <motion.div 
                  key={index} 
                  className="border-l-2 border-blue-600 pl-6 relative"
                  variants={item}
                >
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <p className="text-gray-800 font-medium">{experience.company}</p>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Education */}
          <motion.section 
            className="max-w-4xl mx-auto mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
              Education
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="border-l-2 border-blue-600 pl-6 relative"
                  variants={item}
                >
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <p className="text-gray-800 font-medium">{edu.institution}</p>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section 
            className="max-w-4xl mx-auto mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              Certifications
            </h2>
            
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  variants={item}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Awards */}
          <motion.section 
            className="max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-blue-600" />
              Awards & Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100"
                  variants={item}
                >
                  {award.image && (
                    <div className="mb-4 h-48 overflow-hidden rounded-md">
                      <img 
                        src={award.image} 
                        alt={award.title} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gray-700 font-medium">{award.organization}</p>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{award.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
