
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Briefcase, GraduationCap, FileText, Star, Languages } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Resume Header */}
        <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Curriculum Vitae
              </motion.h1>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <img 
                    src="/diogo-profile.jpg" 
                    alt="Diogo Pacheco"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md mb-4 md:mb-0 md:mr-6"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Diogo Silva Pacheco</h2>
                    <p className="text-gray-600 dark:text-gray-300">Data de nascimento: 08/01/2005</p>
                    <p className="text-gray-600 dark:text-gray-300">Nacionalidade: Portuguesa</p>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">Web Developer</Badge>
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200">Cybersecurity</Badge>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200">Designer Gráfico</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Resume Content */}
        <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column - Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Contacto
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Endereço</div>
                          <div className="text-gray-700 dark:text-gray-300">Alameda do Mar nº11, 9625-320 Maia, Portugal</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                          <a href="mailto:diogopacheco132@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">diogopacheco132@gmail.com</a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </span>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Telefone</div>
                          <div className="text-gray-700 dark:text-gray-300">(+351) 938536332</div>
                        </div>
                      </li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8 flex items-center">
                      <Languages className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Competências Linguísticas
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-gray-700 dark:text-gray-300 font-medium">Português</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Língua Materna</div>
                      </div>
                      <div>
                        <div className="text-gray-700 dark:text-gray-300 font-medium">Inglês</div>
                        <div className="flex gap-2 mt-1">
                          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">Compreensão oral: C2</Badge>
                          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">Leitura: C1</Badge>
                        </div>
                        <div className="flex gap-2 mt-1">
                          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">Produção oral: C1</Badge>
                          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">Escrita: C1</Badge>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8 flex items-center">
                      <Star className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Competências Digitais
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Docker</Badge>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Git</Badge>
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Shell Scripts</Badge>
                      <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">Windows/Linux</Badge>
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">MS Office</Badge>
                      <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">GitHub</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Helpdesk</Badge>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Experience, Education, Awards */}
                <motion.div 
                  className="md:col-span-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {/* Experience Section */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Briefcase className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Experiência Profissional
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="relative pl-8 pb-4 border-l-2 border-blue-500 dark:border-blue-400">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            18/04/2024 - 01/07/2024
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">Expolab - Centro Ciencia Viva, Lagoa, Portugal</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          Durante o meu estágio no Expolab - Centro Ciência Viva, desenvolvi e aperfeiçoei competências-chave em desenvolvimento web, através de um projeto desafiador: a criação de uma aplicação web interativa para uma caça ao tesouro no centro, intitulada <span className="font-semibold">Expolab Quest - Aventura Científica</span>.
                        </p>
                        <div className="mb-3">
                          <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Alguns dos principais contributos incluem:</div>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Concebi uma aplicação web funcional, intuitiva e atrativa</li>
                            <li>Foquei-me em garantir uma navegação fluida e envolvente</li>
                            <li>Integrei elementos de design e funcionalidades interativas inovadoras</li>
                            <li>Realizei testes exaustivos para identificar e resolver falhas</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <a href="https://expolab.centrosciencia.azores.gov.pt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Sítio Web</a>
                          <a href="https://expolab.dspacheco.pt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Ligação</a>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-4 border-l-2 border-blue-500 dark:border-blue-400">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Técnico de Iluminação em Espetáculos e Eventos Corporativos</h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">Portugal</p>
                        <div className="mb-3">
                          <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Habilidades Técnicas:</div>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Operação de mesas de iluminação (GrandMA2, Avolites)</li>
                            <li>Programação de Sistemas DMX</li>
                            <li>Conhecimento de tipos de máquinas</li>
                            <li>Leitura e Interpretação de Plantas de Iluminação</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education Section */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Educação e Formação
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="relative pl-8 pb-4 border-l-2 border-green-500 dark:border-green-400">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-500 dark:bg-green-400"></div>
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Técnico especialista em Cibersegurança (Nível V)</h4>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Atual</div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">Escola de Novas Tecnologias dos Açores, Portugal</p>
                        <div className="mb-3">
                          <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Conhecimentos aprofundados:</div>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Sistemas operativos</li>
                            <li>Criptografia de dados</li>
                            <li>Programação de algoritmos</li>
                            <li>Tipos de ameaças e ataques cibernéticos</li>
                            <li>Protocolos de segurança de rede</li>
                          </ul>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-4 border-l-2 border-green-500 dark:border-green-400">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-500 dark:bg-green-400"></div>
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Técnico de Informática Instalação e Gestão de Redes (Nível IV)</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            20/09/2021 - 01/08/2024
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">ENTA - Escola de Novas Tecnologias dos Açores, Ponta Delgada, Portugal</p>
                        <div className="mb-3">
                          <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Conhecimentos aprofundados:</div>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Tipologias de redes</li>
                            <li>Software de gestão de redes informáticas</li>
                            <li>Redes e protocolos de redes</li>
                            <li>Segurança de redes</li>
                          </ul>
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          <span className="font-medium">Classificação final:</span> 19 Valores | 
                          <span className="font-medium"> Nível no QEQ:</span> Nível 4 QRQ
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Awards Section */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Award className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Distinções e Prémios
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="relative pl-8 pb-4 border-l-2 border-yellow-500 dark:border-yellow-400">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
                        <div className="mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Prémio de Mérito Escolar</h4>
                          <p className="text-gray-700 dark:text-gray-300">Câmara Municipal de Ponta Delgada</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Média final de curso 19 valores</p>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-4 border-l-2 border-yellow-500 dark:border-yellow-400">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">2nd at Azores Skills - CyberSecurity</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            17/05/2024
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">Azores Skills - Campeonato Regional das Profissões</p>
                        <div className="mb-3">
                          <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Estruturação da Prova:</div>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Desenvolvimento de Segurança em Sistemas Operativos</li>
                            <li>Desenvolvimento de Segurança em Redes</li>
                            <li>Identificação e Exploração de Vulnerabilidades</li>
                            <li>Proteção e Defesa de Vulnerabilidades</li>
                          </ul>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-4 border-l-2 border-yellow-500 dark:border-yellow-400">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">3rd at Atlântico Junior - FLAD</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            21/07/2022
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">FLAD - Fundação Luso-Americana para o Desenvolvimento & Ciência Viva</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          Na edição de 2021/2022, o concurso premiou os melhores trabalhos em tópicos como energias renováveis marinhas, robôs marinhos, embarcações inovadoras, tecnologias para mitigar a poluição marinha, e biotecnologia.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
