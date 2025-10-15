import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProfileSection from "../components/ProfileSection";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { Code, Award, Users, Coffee, GraduationCap, Briefcase, Heart, ExternalLink } from "lucide-react";

const About = () => {
  const skills = [
    { name: "AWS Cloud", level: 90 },
    { name: "Oracle Cloud", level: 85 },
    { name: "OAuth", level: 85 },
    { name: "Tailscale", level: 80 },
    { name: "Docker", level: 85 },
    { name: "Cisco", level: 75 },
    { name: "Python", level: 80 },
    { name: "Network Security", level: 90 },
    { name: "Cybersecurity", level: 85 },
    { name: "CCNA", level: 80 },
    { name: "CyberOps", level: 75 },
  ];

  const certifications = [
    { name: "CCNA", issuer: "Cisco", year: "2025", link: "https://www.credly.com/badges/0a543b66-5714-4427-9cab-8b9b4a7aaf78/public_url" },
    { name: "AWS Academy Cloud Architecting", issuer: "Amazon Web Services", year: "2025", link: "https://www.credly.com/badges/7db1dcf2-d42e-4c69-ad1f-651b6a2986ab" },
    { name: "AWS Solutions Architect - Associate", issuer: "Amazon Web Services", year: "2024", link: "https://www.credly.com/badges/890afde7-8cfa-433e-927f-eff02e3c5456/public_url" },
    { name: "CyberOps Associate", issuer: "Cisco", year: "2023", link: "https://www.credly.com/badges/046d471d-c164-4605-8c13-c6395cda5b9a/linked_in_profile" },
    { name: "Network Security Fundamentals", issuer: "Cisco", year: "2023", link: null },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Cloud Applications Internship",
      company: "SMC - Serpa Medeiros",
      description: "Currently interning in Cloud Applications, focusing on Software Development and cloud technologies."
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
      year: "2024-2025",
      title: "Cybersecurity Specialist",
      company: "ENTA - Escola de Novas Tecnologias dos Açores",
      description: "Currently pursuing Technical Specialist course in Cybersecurity, building expertise in network security and cloud technologies."
    },
    {
      year: "2024",
      title: "AWS Solutions Architect Associate",
      company: "Amazon Web Services",
      description: "Achieved AWS Solutions Architect Associate certification, demonstrating expertise in designing scalable cloud solutions."
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
      year: "2023",
      title: "CyberOps Associate Certification",
      company: "Cisco",
      description: "Obtained Cisco Certified Cybersecurity Associate certification, solidifying expertise in cybersecurity operations."
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
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate cybersecurity specialist with a strong foundation in network security, 
                cloud technologies, and practical problem-solving. My journey is driven by continuous 
                learning and the desire to make technology more secure and accessible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Profile Section */}
        <section id="about">
          <ProfileSection />
        </section>

        {/* Skills Section */}
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
                Here's a breakdown of my technical expertise across various domains
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
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
                        src="/ccna_600.png" 
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
                        src="/cyberops.png" 
                        alt="CyberOps Certification" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">CyberOps Associate</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Cisco</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
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
                        src="/aws-cloud-architect.png" 
                        alt="AWS Solutions Architect Associate" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AWS Solutions Architect</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Amazon Web Services</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2024</p>
                    <div className="mt-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mx-auto" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Additional Certifications */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.slice(3).map((cert, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 ${cert.link ? 'cursor-pointer hover:shadow-lg' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => cert.link && window.open(cert.link, '_blank')}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                      </div>
                      {cert.link && (
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</p>
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
                        <div className="absolute top-4 right-4">
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
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
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
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
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
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
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

        {/* Awards Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Awards & Achievements</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Recognition for excellence in competitions and academic performance
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2nd Place</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Azores Skills</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cybersecurity - May 2024</p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3rd Place</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Skills Portugal</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cybersecurity - 2024</p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3rd Place</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Atlântico Junior</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">FLAD - 2022</p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation Award</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Connexall</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">David Tavares Award</p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Merit Award</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Ponta Delgada</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">City Hall Recognition</p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Merit Award</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Jolera</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Best Student Recognition</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
