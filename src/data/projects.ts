
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  date: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "web-dashboard",
    title: "Web Analytics Dashboard",
    description: "A responsive dashboard for tracking website analytics with real-time data visualization.",
    longDescription: "This project features a comprehensive web analytics dashboard built with React and Chart.js. It provides real-time data visualization for website traffic, user behavior, and conversion metrics. The dashboard includes customizable widgets, date range filters, and exportable reports. I implemented responsive design principles to ensure optimal viewing across all devices, and used a modular component architecture for maintainability.",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    date: "March 2025",
    featured: true,
    liveUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/example/dashboard"
  },
  {
    id: "mobile-app",
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile application for tracking workouts and nutrition with personalized recommendations.",
    longDescription: "The Fitness Tracking App is designed to help users maintain their health goals with intuitive workout and nutrition tracking. Built with React Native, it works seamlessly across iOS and Android platforms. Key features include customizable workout plans, nutrition logging with barcode scanning, progress visualization, and social sharing capabilities. The app integrates with various health APIs to provide comprehensive health insights.",
    image: "/placeholder.svg",
    tags: ["React Native", "Firebase", "Redux", "Health API"],
    date: "January 2025",
    featured: true,
    liveUrl: "https://example.com/fitness-app",
    githubUrl: "https://github.com/example/fitness-app"
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and secure payment processing.",
    longDescription: "This e-commerce platform provides small businesses with a complete solution for selling products online. Built with a modern tech stack, it features product management, inventory tracking, secure cart functionality, and integration with multiple payment processors. The admin dashboard provides insights into sales, customer behavior, and inventory levels. The platform is designed for scalability and can handle high traffic volumes with optimized performance.",
    image: "/placeholder.svg",
    tags: ["Next.js", "MongoDB", "Stripe", "Vercel"],
    date: "December 2024",
    featured: false,
    liveUrl: "https://example.com/store",
    githubUrl: "https://github.com/example/store"
  },
  {
    id: "ai-assistant",
    title: "AI Personal Assistant",
    description: "A natural language processing assistant for task management, scheduling, and information retrieval.",
    longDescription: "The AI Personal Assistant uses natural language processing to help users manage their daily tasks, schedule appointments, and retrieve information. It can interpret complex queries, learn from user interactions, and provide increasingly personalized assistance over time. The assistant integrates with calendar apps, email services, and various APIs to offer comprehensive functionality. Voice recognition capabilities enable hands-free operation for added convenience.",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "NLP", "REST API"],
    date: "October 2024",
    featured: false,
    liveUrl: "https://example.com/assistant",
    githubUrl: "https://github.com/example/assistant"
  },
  {
    id: "blockchain",
    title: "Blockchain Voting System",
    description: "A secure and transparent voting platform built on blockchain technology for organizational elections.",
    longDescription: "This blockchain-based voting system provides a secure, transparent, and tamper-proof platform for conducting elections. It uses smart contracts to ensure vote integrity and provides real-time results. The system includes voter verification, anonymous balloting, and comprehensive audit trails. The web interface makes voting accessible while maintaining the highest security standards. This solution is particularly valuable for organizations requiring transparent governance processes.",
    image: "/placeholder.svg",
    tags: ["Solidity", "Ethereum", "Web3.js", "React"],
    date: "August 2024",
    featured: true,
    liveUrl: "https://example.com/voting",
    githubUrl: "https://github.com/example/voting"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};
