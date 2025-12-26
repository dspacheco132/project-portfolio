import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Award, Users, GraduationCap, Heart, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CDN_BASE_URL = "https://r2.diogopacheco.com";

interface AwardData {
  id: string;
  title: string;
  organization: string;
  position: string;
  year: string;
  category: string;
  description: string;
  images?: string[];
  isFeatured?: boolean;
}

const About = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [selectedAward, setSelectedAward] = useState<AwardData | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const awards: AwardData[] = [
    {
      id: "azores-skills",
      title: "Azores Skills",
      organization: "Azores Skills",
      position: "2nd Place",
      year: "May 2024",
      category: "Cybersecurity Competition",
      description: "Achieved 2nd place in the regional cybersecurity skills competition. This competition tested practical skills in network security, penetration testing, incident response, and security analysis. The event brought together the best cybersecurity students from the Azores region to compete in a series of challenging real-world scenarios.",
      images: [
        `${CDN_BASE_URL}/public/azores-skills-award.webp`,
      ],
      isFeatured: true,
    },
    {
      id: "skills-portugal",
      title: "Skills Portugal",
      organization: "Skills Portugal",
      position: "3rd Place",
      year: "2024",
      category: "Cybersecurity Competition",
      description: "National recognition for cybersecurity skills, achieving 3rd place in Portugal's skills championship. This prestigious competition brought together the top cybersecurity talent from across the country, testing expertise in ethical hacking, security analysis, digital forensics, and secure network design.",
      images: [
        `${CDN_BASE_URL}/public/skills-portugal-award.webp`,
      ],
      isFeatured: true,
    },
    {
      id: "connexall",
      title: "Connexall",
      organization: "Connexall",
      position: "Innovation Award",
      year: "2025",
      category: "David Tavares Innovation Award",
      description: "Received the David Tavares Innovation Award from Connexall for outstanding innovation and technical achievement. This award recognizes exceptional contributions to technology innovation and creative problem-solving in the field of healthcare technology and IoT solutions.",
      images: [
        `${CDN_BASE_URL}/public/CertificadoConnexall.webp`,
        `${CDN_BASE_URL}/public/AtribuicaoPremioConnnexall (1).webp`,
      ],
    },
    {
      id: "ponta-delgada",
      title: "Ponta Delgada",
      organization: "Câmara Municipal de Ponta Delgada",
      position: "Merit Award",
      year: "2024",
      category: "City Hall Recognition",
      description: "Received Merit Award from Ponta Delgada City Hall for outstanding academic performance and contributions to local technology initiatives. This recognition highlights excellence in education and commitment to advancing technology skills in the Azores region.",
      images: [
        `${CDN_BASE_URL}/public/merit-ponta-delgada.webp`,
        `${CDN_BASE_URL}/public/MéritoEscolarCamaraPontaDelgada.webp`,
      ],
    },
    {
      id: "jolera",
      title: "Jolera",
      organization: "Jolera",
      position: "Merit Award",
      year: "2024",
      category: "Best Student Recognition",
      description: "Received Merit Award from Jolera as recognition for being the best student. This award acknowledges exceptional academic performance, dedication to learning, and outstanding achievements in the field of information technology and cybersecurity.",
      images: [
        `${CDN_BASE_URL}/public/merit-jolera.webp`,
      ],
    },
    {
      id: "atlantico-junior",
      title: "Atlântico Junior",
      organization: "FLAD",
      position: "3rd Place",
      year: "2022",
      category: "Innovation Competition",
      description: "Achieved 3rd place in the Atlântico Junior FLAD competition for innovation and technical achievement. This competition focused on innovative solutions in networking and technology, showcasing creativity and practical implementation of technical concepts.",
      images: [
        `${CDN_BASE_URL}/public/atlanticojunior.webp`,
      ],
    },
  ];

  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS Cloud" },
        { name: "Oracle Cloud" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "Terraform" },
        { name: "Tailscale" },
        { name: "AWS Lambda" },
        { name: "AWS S3" },
        { name: "EC2" },
        { name: "LocalStack" },
      ]
    },
    {
      title: "Backend & Development",
      skills: [
        { name: "Python" },
        { name: "FastAPI" },
        { name: "Flask" },
        { name: "OAuth" },
        { name: "MySQL" },
        { name: "Redis" },
        { name: "REST APIs" },
      ]
    },
    {
      title: "Frontend & Web",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Vite" },
        { name: "HTML/CSS" },
        { name: "Responsive Design" },
      ]
    },
    {
      title: "DevOps & CI/CD",
      skills: [
        { name: "GitHub Actions" },
        { name: "CI/CD Pipelines" },
        { name: "Nginx" },
        { name: "Shell Scripting" },
        { name: "Infrastructure as Code" },
        { name: "Vercel" },
      ]
    },
    {
      title: "Security & Networking",
      skills: [
        { name: "Network Security" },
        { name: "Cybersecurity" },
        { name: "Cisco" },
        { name: "CCNA" },
        { name: "CyberOps" },
        { name: "Security Groups" },
        { name: "VPN" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Strapi" },
        { name: "Figma" },
        { name: "Git" },
        { name: "Linux" },
        { name: "Cloudflare" },
        { name: "SEO" },
      ]
    },
  ];

  const timeline = [
    {
      year: "2024-2025",
      title: "Cybersecurity Specialist",
      company: "ENTA - Escola de Novas Tecnologias dos Açores",
      description: "Currently pursuing Technical Specialist course in Cybersecurity, building expertise in network security and cloud technologies."
    },
    {
      year: "2025",
      title: "Cloud Applications Internship",
      company: "SMC - Serpa Medeiros",
      description: "Currently interning in Cloud Applications, focusing on Software Development and cloud technologies."
    },
    {
      year: "2025",
      title: "AWS Solutions Architect Associate",
      company: "Amazon Web Services",
      description: "Achieved AWS Solutions Architect Associate certification, demonstrating expertise in designing scalable cloud solutions."
    },
    {
      year: "2025",
      title: "Merit Award - Connexall",
      company: "Connexall",
      description: "Received David Tavares Innovation Award for innovation and technical achievement."
    },
    {
      year: "April 2025",
      title: "AWS Academy Cloud Architecting",
      company: "Amazon Web Services",
      description: "Completed AWS Academy Cloud Architecting course, demonstrating expertise in designing scalable cloud solutions."
    },
    {
      year: "April 2025",
      title: "CCNA Certification",
      company: "Cisco",
      description: "Achieved Cisco Certified Network Associate certification, validating expertise in network fundamentals and security."
    },
    {
      year: "2025",
      title: "CyberOps Associate Certification",
      company: "Cisco",
      description: "Obtained Cisco Certified Cybersecurity Associate certification, solidifying expertise in cybersecurity operations."
    },
    {
      year: "2024",
      title: "2nd Place - Azores Skills Cybersecurity",
      company: "Azores Skills",
      description: "Competed in cybersecurity skills championship, achieving 2nd place in regional competition."
    },
    {
      year: "2024",
      title: "3rd Place - Skills Portugal Cybersecurity",
      company: "Skills Portugal",
      description: "National recognition for cybersecurity skills, achieving 3rd place in Portugal's skills championship."
    },
    {
      year: "2024",
      title: "Merit Awards - Best Student Recognition",
      company: "Jolera & Ponta Delgada City Hall",
      description: "Received Merit Award from Jolera and Merit Award from Ponta Delgada City Hall as best student."
    },
    {
      year: "March - August 2024",
      title: "Web Developer Internship",
      company: "Expolab - Centro Ciência Viva",
      description: "Completed web development internship with evaluation score: 20/20, working with modern frameworks and agile methodologies."
    },
    {
      year: "2021-2024",
      title: "Computer Networks - Installation and Management",
      company: "ENTA - Escola de Novas Tecnologias dos Açores",
      description: "Completed technical degree focused on network infrastructure, installation and management, providing foundation for cybersecurity career."
    },
    {
      year: "2022",
      title: "3rd Place - Atlântico Junior FLAD",
      company: "FLAD",
      description: "Achieved 3rd place in innovation and technical achievement competition during networking course."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Learn more about my journey, skills, certifications, and the values that drive my work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section - Roadmap.sh Style */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                My technical expertise organized by domain areas
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategories.map((category, categoryIndex) => {
                  const isExpanded = expandedCategory === categoryIndex;
                  
                  return (
                    <div key={categoryIndex} className="col-span-1">
                      {/* Category Card */}
                      <motion.div
                        className="bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setExpandedCategory(isExpanded ? null : categoryIndex)}
                      >
                        <div className="p-4 flex flex-col items-center justify-center text-center min-h-[140px]">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {category.title}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                            {category.skills.length} skills
                          </p>
                          <ChevronDown 
                            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </motion.div>

                      {/* Expanded Skills */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            className="overflow-hidden"
                          >
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                              <div className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                  <motion.div
                                    key={skillIndex}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ 
                                      duration: 0.3, 
                                      delay: skillIndex * 0.04,
                                      ease: "easeOut"
                                    }}
                                    className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                                    <span className="text-sm text-gray-900 dark:text-white font-medium">
                                      {skill.name}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Certifications</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional certifications that validate my expertise
              </p>
            </motion.div>

            {/* Certification Badges */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open("https://www.credly.com/badges/0a543b66-5714-4427-9cab-8b9b4a7aaf78/public_url", "_blank")}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300">
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                      <img 
                        src="https://r2.diogopacheco.com/public/ccna_600.webp" 
                        alt="CCNA Certification" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">CCNA</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Cisco</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2025</p>
                    <div className="mt-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mx-auto" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open("https://www.credly.com/badges/046d471d-c164-4605-8c13-c6395cda5b9a/linked_in_profile", "_blank")}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300">
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                      <img 
                        src="https://r2.diogopacheco.com/public/cyberops.webp" 
                        alt="CyberOps Certification" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">CyberOps Associate</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Cisco</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2025</p>
                    <div className="mt-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mx-auto" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open("https://www.credly.com/badges/890afde7-8cfa-433e-927f-eff02e3c5456/public_url", "_blank")}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300">
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                      <img 
                        src="https://r2.diogopacheco.com/public/aws-cloud-architect.webp" 
                        alt="AWS Solutions Architect Associate" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AWS Solutions Architect</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Amazon Web Services</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2025</p>
                    <div className="mt-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mx-auto" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Awards & Achievements</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Recognition for excellence in competitions and academic performance
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              {/* Featured Awards - Top Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {awards.filter(award => award.isFeatured).map((award, index) => (
                  <motion.div
                    key={award.id}
                    className="group relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-2xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedAward(award)}
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gray-700 dark:bg-gray-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <Award className="w-10 h-10 text-white" />
                        </div>
                        <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full">
                          {award.position}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{award.title}</h3>
                      <p className="text-gray-300 text-lg mb-1">{award.category}</p>
                      <p className="text-gray-400 text-sm">{award.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Secondary Awards - Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {awards.filter(award => !award.isFeatured).map((award, index) => (
                  <motion.div
                    key={award.id}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setSelectedAward(award)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                        <Award className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      </div>
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {award.position}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{award.category}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{award.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Key milestones in my professional development
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md relative">
                        <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'}`}>
                          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="mb-2">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.company}</p>
                        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Values</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide my work and personal growth
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Continuous Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Technology evolves rapidly, and I'm committed to staying current with the latest developments and best practices.
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I believe the best solutions come from working together, sharing knowledge, and leveraging diverse perspectives.
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Passion</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm genuinely passionate about cybersecurity and technology, which drives me to deliver exceptional results.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />

      {/* Award Details Dialog */}
      <Dialog open={selectedAward !== null} onOpenChange={(open) => !open && setSelectedAward(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAward && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedAward.title}
                </DialogTitle>
                <DialogDescription className="text-base text-gray-600 dark:text-gray-400">
                  {selectedAward.organization} • {selectedAward.year}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedAward.position}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">{selectedAward.category}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {selectedAward.description}
                </p>

                {selectedAward.images && selectedAward.images.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Award Images
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedAward.images.map((image, index) => (
                        <motion.div
                          key={index}
                          className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video cursor-pointer group"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          onClick={() => setSelectedImage(image)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <img
                            src={image}
                            alt={`${selectedAward.title} - Image ${index + 1}`}
                            className="w-full h-full object-contain transition-opacity group-hover:opacity-90"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Award image"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;
