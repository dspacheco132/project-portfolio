import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "diogopacheco132@gmail.com",
      href: "mailto:diogopacheco132@gmail.com",
      color: "text-gray-700 dark:text-gray-300",
      description: "Send me an email for any questions or proposals"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Azores, Portugal",
      href: "#",
      color: "text-gray-700 dark:text-gray-300",
      description: "Based in Azores, but I work remotely"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/dspacheco132",
      color: "text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400",
      bgColor: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700",
      description: "See my projects and contributions"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/diogo-pacheco-1a280a264",
      color: "text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400",
      bgColor: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700",
      description: "Connect with me professionally"
    },
  ];

  const availability = [
    {
      icon: Clock,
      title: "Working Hours",
      description: "Monday to Friday, 9am to 6pm (GMT)",
      color: "text-gray-700 dark:text-gray-300"
    },
    {
      icon: MessageCircle,
      title: "Response Time",
      description: "I usually respond within 24 hours",
      color: "text-gray-700 dark:text-gray-300"
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
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{info.label}</h3>
                      <p className="text-base text-gray-700 dark:text-gray-300 mb-2 font-medium">{info.value}</p>
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
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} ${social.color} p-4 rounded-lg transition-all duration-300 flex items-center space-x-3 group shadow-sm hover:shadow-md`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.name}</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availability.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Work Together?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  If you have an interesting project or an opportunity you'd like to discuss, 
                  don't hesitate to get in touch. I'm always available to chat!
                </p>
                <motion.a
                  href="mailto:diogopacheco132@gmail.com"
                  className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Email
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
