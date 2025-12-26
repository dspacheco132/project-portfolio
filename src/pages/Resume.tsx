
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Mail, Briefcase, Award, GraduationCap, Github, Linkedin, ExternalLink, X } from "lucide-react";

const Resume = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const skills = [
    "Oracle Cloud", "OAuth", "Tailscale", "Python", 
    "JavaScript", "React", "Docker", "Kubernetes", "Git", "CI/CD", "Linux",
    "Cisco", "Network Security", "Cybersecurity", "Shell Scripting"
  ];

  const experiences = [
    {
      title: "Cloud Applications Internship",
      company: "SMC - Serviços Municipais de Comunicações",
      period: "August 2025 - October 2025 (3 months)",
      location: "Ponta Delgada, Ilha de São Miguel, Portugal",
      description: [
        "Cloud applications internship focusing on software development and cloud technologies",
        "Working with cloud platforms and cloud-native technologies",
        "Developing cloud-based applications and services"
      ]
    },
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
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "28/04/2025 – 28/04/2028",
      description: "CCNA Exam v1.1 (CCNA 200-301) is a 120-minute exam associated with the CCNA certification. This exam tests a candidate's knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.",
      link: "https://www.credly.com/badges/0a543b66-5714-4427-9cab-8b9b4a7aaf78/public_url"
    },
    {
      name: "AWS Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "Completed",
      description: "AWS Solutions Architect Associate certification validates the ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS. Demonstrates expertise in AWS services, security, and best practices for cloud architecture.",
      link: "https://www.credly.com/badges/890afde7-8cfa-433e-927f-eff02e3c5456/public_url"
    },
    {
      name: "Cisco Certified Cybersecurity Associate (CyberOps)",
      issuer: "Cisco",
      date: "Valid until renewal",
      description: "This certification validates the skills required of associate-level cyber security analysts within security operations centers.",
      link: "https://www.credly.com/badges/046d471d-c164-4605-8c13-c6395cda5b9a/linked_in_profile"
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "29/04/2025",
      description: "Earners of this badge have successfully completed the AWS Academy Cloud Architecting course, demonstrating foundational knowledge in designing scalable, highly available, and fault-tolerant applications on Amazon Web Services (AWS). They understand core AWS services and best practices for cloud architecture.",
      link: "https://www.credly.com/badges/7db1dcf2-d42e-4c69-ad1f-651b6a2986ab"
    },
    {
      name: "AWS Educate Getting Started with Compute",
      issuer: "Amazon Web Services",
      date: "Completed",
      description: "Successfully completed AWS's 'Getting Started with Compute' training, demonstrating foundational knowledge in various compute types and practical ability to create compute instances using Amazon EC2. This badge validates understanding of core concepts and application of AWS compute services.",
      link: "https://www.credly.com/badges/f866e51c-e364-4d3a-b8ea-f82d93949d70/linked_in_profile"
    },
    {
      name: "Ethical Hacker",
      issuer: "Cisco",
      date: "Completed",
      description: "Successfully completed the Cisco Ethical Hacker course, demonstrating a broad understanding of legal and compliance requirements in cybersecurity. Proficient in scoping, executing, and reporting vulnerability assessments, as well as recommending mitigation strategies. Gained hands-on experience through 34 practical activities using tools like Kali Linux and WebSploit.",
      link: "https://www.credly.com/badges/20847fdd-2bbf-4fc4-a64c-7f3b7ed53ef9/linked_in_profile"
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "Completed",
      description: "Cisco verifies the earner successfully completed the Introduction to Networks course and achieved this student level credential. Earner has knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices. Participated in up to 54 labs and accumulated up to 14 hours of hands-on labs using Cisco hardware or Packet Tracer tool.",
      link: "https://www.credly.com/badges/8eb28c1e-10a3-46ba-aeac-242ddcb60849/public_url"
    },
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      date: "Completed",
      description: "Successfully completed the Switching, Routing, and Wireless Essentials course. The earner has a foundation in switching operations, wired and wireless LAN configuration using security best practices, redundancy protocols, and developed problem solving skills. Participated in up to 45 practice activities and accumulated up to 21 hours of hands-on labs using Cisco hardware and/or the Cisco Packet Tracer tool.",
      link: "https://www.credly.com/badges/d285701e-7214-41e5-8466-cf47a7704a20/public_url"
    },
    {
      name: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco",
      date: "Completed",
      description: "Successfully completed the Enterprise Networking, Security and Automation course. The earner has a foundation in scalable network architectures, dynamic routing, mitigation of security threats, wide-area networks, virtualization, automation of programmable networks. Participated in up to 41 lab activities and accumulated up to 15 hours of hands-on labs using Cisco hardware and/or Cisco Packet Tracer tool.",
      link: "https://www.credly.com/badges/b9b0e484-9124-45bb-a1bb-8718ffb526b7/public_url"
    },
    {
      name: "CVE Series: Apache Spark (CVE-2022-33891)",
      issuer: "Security Training",
      date: "Completed",
      description: "Demonstrated understanding of critical vulnerabilities in big data platforms, specifically the high-severity command injection vulnerability (CVE-2022-33891) in Apache Spark. This includes knowledge of how a malicious user can exploit the Spark UI (when ACLs are enabled) to impersonate users and execute arbitrary shell commands, impacting system integrity and confidentiality.",
      link: null
    },
    {
      name: "CyberSecure Citizen",
      issuer: "Security Awareness",
      date: "Completed",
      description: "Completed cybersecurity awareness training focused on digital citizenship and security best practices.",
      link: null
    }
  ];


  const awards = [
    {
      title: "2nd Place at Azores Skills - CyberSecurity",
      organization: "Azores Skills",
      year: "2024",
      description: "Recognition for excellence in cybersecurity skills competition",
      image: "https://pub-d1507963b1aa465dab3b4e8a1195ac16.r2.dev/public/azores-skills-award.webp"
    },
    {
      title: "3rd Place at Atlântico Junior - FLAD",
      organization: "FLAD",
      year: "2022",
      description: "Award for innovation and technical achievement",
      image: "https://pub-d1507963b1aa465dab3b4e8a1195ac16.r2.dev/public/atlanticojunior.webp"
    },
    {
      title: "3rd Place at SkillsPortugal - CyberSecurity",
      organization: "SkillsPortugal",
      year: "2024",
      description: "National recognition for cybersecurity skills",
      image: "https://pub-d1507963b1aa465dab3b4e8a1195ac16.r2.dev/public/skills-portugal-award.webp"
    },
    {
      title: "Merit Award - Jolera",
      organization: "Jolera",
      year: "2024",
      description: "Recognition for outstanding technical achievement",
      image: "https://pub-d1507963b1aa465dab3b4e8a1195ac16.r2.dev/public/merit-jolera.webp"
    },
    {
      title: "Merit Award - Câmara Municipal de Ponta Delgada",
      organization: "Ponta Delgada City Hall",
      year: "2024",
      description: "Recognition for contributions to local technology initiatives",
      image: "https://pub-d1507963b1aa465dab3b4e8a1195ac16.r2.dev/public/merit-ponta-delgada.webp"
    },
    {
      title: "Merit Award - Connexall",
      organization: "Connexall",
      year: "2025",
      description: "Award for innovation and technical achievement - David Tavares",
      image: "https://pub-d1507963b1aa465dab3b4e8a1195ac16.r2.dev/public/CertificadoConnexall.webp"
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
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Resume</h1>
            <div className="flex flex-col md:flex-row gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                <span>diogopacheco132@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                <span>Ponta Delgada, Portugal</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                <a href="https://www.linkedin.com/in/diogo-pacheco-1a280a264/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                <a href="https://github.com/Swift132" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 px-3 py-1.5 text-sm">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Work Experience
            </h2>
            
            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <motion.div 
                  key={index} 
                  className="border-l-2 border-blue-600 dark:border-blue-400 pl-6 relative"
                  variants={item}
                >
                  <div className="absolute w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full -left-[7px] top-2"></div>
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
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Education
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="border-l-2 border-blue-600 dark:border-blue-400 pl-6 relative"
                  variants={item}
                >
                  <div className="absolute w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full -left-[7px] top-2"></div>
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

          {/* Certifications */}
          <motion.section 
            className="max-w-4xl mx-auto mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Certifications
            </h2>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                  variants={item}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 sm:mt-0">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>

          </motion.section>
          
          {/* Awards */}
          <motion.section 
            className="max-w-4xl mx-auto mb-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Awards & Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                  variants={item}
                >
                  {award.image && (
                    <div 
                      className="mb-4 h-48 overflow-hidden rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-105"
                      onClick={() => setSelectedImage(award.image)}
                    >
                      <img 
                        src={award.image} 
                        alt={award.title} 
                        className="w-full h-full object-cover object-center"
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

          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full text-white transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <img
                    src={selectedImage}
                    alt="Award"
                    className="w-full h-full object-contain max-h-[80vh]"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Resume;
