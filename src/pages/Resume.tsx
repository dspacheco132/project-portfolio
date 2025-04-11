
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Mail, Briefcase, Award, GraduationCap, Github, Linkedin } from "lucide-react";
import CertificationCard from "../components/CertificationCard";
import { useImageModal } from "../components/ImageModal";

const Resume = () => {
  const { openModal, Modal } = useImageModal();

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
    {
      title: "CyberOps Associate",
      imageUrl: "/cyberops.jpg",
      credlyUrl: "https://www.credly.com/badges/your-cyberops-badge-id",
      description: "Cisco CyberOps Associate certification validates skills needed for security operations centers"
    },
    {
      title: "CCNA: Introduction to Networks",
      imageUrl: "/ccna.jpg",
      credlyUrl: "https://www.credly.com/badges/your-ccna-badge-id",
      description: "Cisco CCNA certification validates the ability to install, configure, operate, and troubleshoot networks"
    },
    {
      title: "GDPR for Attentive Citizens",
      description: "Understanding of General Data Protection Regulation fundamentals and compliance"
    },
    {
      title: "Cybersecurity Citizen",
      description: "Recognition of cybersecurity awareness and best practices for digital citizens"
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      credlyUrl: "https://www.credly.com/badges/your-srwe-badge-id",
      description: "Advanced networking concepts and implementations in Cisco environments"
    }
  ];

  const awards = [
    {
      title: "2nd Place at Azores Skills - CyberSecurity",
      organization: "Azores Skills",
      year: "2023",
      description: "Recognition for excellence in cybersecurity skills competition",
      image: "/AzoresSkills.jpg"
    },
    {
      title: "3rd Place at Atlântico Junior - FLAD",
      organization: "FLAD",
      year: "2022",
      description: "Award for innovation and technical achievement",
      image: "/azores-skills-award.jpg"
    },
    {
      title: "3rd Place at SkillsPortugal - CyberSecurity",
      organization: "SkillsPortugal",
      year: "2023",
      description: "National recognition for cybersecurity skills",
      image: "/skills-portugal-award.jpg"
    },
    {
      title: "Merit Award - Jolera",
      organization: "Jolera",
      year: "2023",
      description: "Recognition for outstanding technical achievement",
      image: "/meritawardjolera (1).jpeg"
    },
    {
      title: "Merit Award - Câmara Municipal de Ponta Delgada",
      organization: "Ponta Delgada City Hall",
      year: "2022",
      description: "Recognition for contributions to local technology initiatives",
      image: "/MeritAwardCamaraPontaDelgada (1).jpg"
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
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <Modal />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.h1 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Resume
            </motion.h1>
            <motion.div 
              className="flex flex-col md:flex-row gap-6 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
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
            </motion.div>
          </div>
          
          {/* Profile Summary */}
          <motion.section 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              Key Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 px-3 py-1.5 text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Certifications with Images */}
          <motion.section 
            className="max-w-4xl mx-auto mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              Featured Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {certifications.slice(0,2).map((cert, index) => (
                cert.imageUrl && (
                  <motion.div key={index} variants={item}>
                    <CertificationCard 
                      title={cert.title} 
                      imageUrl={cert.imageUrl} 
                      credlyUrl={cert.credlyUrl}
                      description={cert.description}
                    />
                  </motion.div>
                )
              ))}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Other Certifications</h3>
            <div className="space-y-2">
              {certifications.filter(cert => !cert.imageUrl).map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  variants={item}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{cert.title}</p>
                    {cert.description && <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.description}</p>}
                  </div>
                  {cert.credlyUrl && (
                    <motion.a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      Credly <ExternalLink className="inline h-3 w-3" />
                    </motion.a>
                  )}
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{experience.company}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{edu.institution}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-blue-600" />
              Awards & Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                  variants={item}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  {award.image && (
                    <div 
                      className="mb-4 h-48 overflow-hidden rounded-md cursor-pointer"
                      onClick={() => openModal(award.image, award.title)}
                    >
                      <motion.img 
                        src={award.image} 
                        alt={award.title} 
                        className="w-full h-full object-cover object-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{award.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{award.organization}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{award.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{award.description}</p>
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
