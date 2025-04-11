
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Mail, Phone, Award, GraduationCap, Briefcase } from "lucide-react";

const Resume = () => {
  const skills = [
    "AWS", "Oracle Cloud", "Terraform", "Docker", "Kubernetes", "Python", 
    "JavaScript", "React", "Node.js", "Flask", "Git", "CI/CD", "Linux",
    "Grafana", "Prometheus", "Shell Scripting", "Agile", "Scrum"
  ];

  const experiences = [
    {
      title: "Cloud Infrastructure Engineer",
      company: "TechSolutions Inc.",
      period: "Jan 2024 - Present",
      location: "Remote",
      description: [
        "Designed and implemented multi-cloud architecture using AWS and Oracle Cloud",
        "Automated infrastructure deployment with Terraform, reducing provisioning time by 80%",
        "Established CI/CD pipelines using GitHub Actions for infrastructure changes",
        "Created monitoring dashboards with Grafana for unified cloud resource visibility"
      ]
    },
    {
      title: "DevOps Intern",
      company: "InnovateTech",
      period: "May 2023 - Dec 2023",
      location: "Lisbon, Portugal",
      description: [
        "Assisted in containerizing applications using Docker and Docker Compose",
        "Contributed to Kubernetes deployment configurations and troubleshooting",
        "Developed shell scripts for automating routine maintenance tasks",
        "Participated in on-call rotation providing support for production systems"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Lisbon",
      period: "2022 - Present",
      description: "Focus on cloud computing, distributed systems, and software engineering principles"
    },
    {
      degree: "AWS Certified Solutions Architect - Associate",
      institution: "Amazon Web Services",
      period: "2024",
      description: "Professional certification demonstrating expertise in AWS architecture and services"
    }
  ];

  const awards = [
    {
      title: "Cloud Computing Hackathon - 1st Place",
      organization: "TechWeek Lisbon",
      year: "2023",
      description: "Developed an auto-scaling, fault-tolerant web application on AWS within 48 hours"
    },
    {
      title: "Outstanding Technical Achievement",
      organization: "InnovateTech",
      year: "2023",
      description: "Recognized for optimizing deployment pipeline, reducing build times by 60%"
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
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow py-16">
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
                <Phone className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                <span>+351 912345678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                <span>Lisbon, Portugal</span>
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
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Passionate cloud and DevOps engineer with experience in designing, implementing, 
              and maintaining infrastructure across multiple cloud platforms. Skilled in infrastructure 
              automation, containerization, and CI/CD pipelines. Committed to creating efficient, 
              scalable, and secure technical solutions. Currently pursuing a Computer Science degree 
              while working on real-world projects.
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
              Technical Skills
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
          
          {/* Awards */}
          <motion.section 
            className="max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Awards & Achievements
            </h2>
            
            <div className="space-y-8">
              {awards.map((award, index) => (
                <motion.div 
                  key={index} 
                  className="border-l-2 border-blue-600 dark:border-blue-400 pl-6 relative"
                  variants={item}
                >
                  <div className="absolute w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{award.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{award.organization}</p>
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
