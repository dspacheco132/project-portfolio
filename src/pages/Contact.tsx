import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "diogopacheco132@gmail.com",
      href: "mailto:diogopacheco132@gmail.com",
      color: "text-red-600 dark:text-red-400",
      description: "Send me an email for any questions or proposals"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Azores, Portugal",
      href: "#",
      color: "text-blue-600 dark:text-blue-400",
      description: "Based in Azores, but I work remotely"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/dspacheco132",
      color: "text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400",
      bgColor: "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
      description: "See my projects and contributions"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/diogo-pacheco-1a280a264",
      color: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30",
      description: "Connect with me professionally"
    },
  ];

  const availability = [
    {
      icon: Clock,
      title: "Working Hours",
      description: "Monday to Friday, 9am to 6pm (GMT)",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: MessageCircle,
      title: "Response Time",
      description: "I usually respond within 24 hours",
      color: "text-green-600 dark:text-green-400"
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
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always interested in new opportunities, interesting projects and conversations about technology. 
                Don't hesitate to get in touch!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Choose the most convenient way to get in touch with me
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        <info.icon className={`w-8 h-8 ${info.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{info.label}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-3 font-medium">{info.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Social Media</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Connect with me on social media to follow my work and projects
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} ${social.color} p-6 rounded-lg transition-all duration-300 flex items-center space-x-4 group border border-gray-200 dark:border-gray-700`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <social.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{social.name}</h3>
                      <p className="text-sm opacity-80">{social.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Availability</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Information about when I'm available to respond
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {availability.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                If you have an interesting project or an opportunity you'd like to discuss, 
                don't hesitate to get in touch. I'm always available to chat!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:diogopacheco132@gmail.com"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Email
                </motion.a>
                <motion.a
                  href="tel:+351938536332"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
