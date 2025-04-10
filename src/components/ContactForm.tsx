
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      toast({
        title: "Mensagem enviada",
        description: "Obrigado pelo seu contato! Retornarei em breve.",
        variant: "default",
      });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Entre em Contato</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tem um projeto interessante ou oportunidade? Vamos conversar!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-750 p-8 rounded-lg shadow-md"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nome
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full group"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Enviado!
                </span>
              ) : (
                <span className="flex items-center">
                  Enviar
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
