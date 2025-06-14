// Replace StaticImageData with string since we don't want to use next/image
export type Project = {
  id: string;
  title: string;
  description: string;
  image: string; // Changed from StaticImageData to string
  tags: string[];
  link?: string;
  date?: string; // Add date field
  longDescription?: string; // Add longDescription field
  liveUrl?: string; // Add liveUrl field
  githubUrl?: string; // Add githubUrl field
  extraImages?: { url: string; alt?: string }[];
};

// images
import flask_ai_chat from "../../public/flaskaichat.png";
import merit_jolera from "../../public/merit-jolera.jpg";
import kubernetes_webserver from "../../public/fa-minikube.png";
import terraform_project from "../../public/terraform.png";
import docker_cleanup from "../../public/dockercleanup.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Flask AI Chat",
    description:
      "A simple AI chat application built with Flask and deployed with Docker.",
    image: flask_ai_chat,
    tags: ["Flask", "AI", "Docker", "Python"],
    link: "https://github.com/dspacheco132/openrouter-api.git",
    date: "2023-12-15",
    longDescription: "This project is a web application that allows users to interact with different AI models available on OpenRouter. It uses the Flask framework to create the interface and makes requests to the OpenRouter API to get responses.",
    liveUrl: "https://swift-ai.pt",
    githubUrl: "https://github.com/dspacheco132/openrouter-api.git",
  },
  {
    id: "2",
    title: "Terraform Infrastructure Project",
    description:
      "AWS infrastructure setup with Terraform, creating an Ubuntu EC2 instance with proper security configuration.",
    image: terraform_project,
    tags: ["Terraform", "AWS", "Infrastructure as Code", "DevOps"],
    link: "https://github.com/dspacheco132/prj-terraform.git",
    date: "2024-01-30",
    longDescription: "This project creates an Ubuntu EC2 instance on AWS with Ubuntu 20.04 LTS, t2.micro instance type (free tier eligible), and a Security Group allowing SSH (port 22). It includes basic configuration, security considerations, and customization options.",
    githubUrl: "https://github.com/dspacheco132/prj-terraform.git",
  },
  {
    id: "3",
    title: "Kubernetes Web Server",
    description:
      "NGINX web server running in a Kubernetes cluster with Minikube, including ConfigMap and Ingress.",
    image: kubernetes_webserver,
    tags: ["Kubernetes", "NGINX", "Minikube", "DevOps"],
    link: "https://github.com/dspacheco132/kubernets-test.git",
    date: "2024-02-15",
    longDescription: "This project sets up an NGINX web server running in a Kubernetes cluster with Minikube. It includes a ConfigMap for custom HTML and an Ingress for friendly domain access. The project demonstrates fundamental Kubernetes concepts including pods, services, and ingress controllers.",
    githubUrl: "https://github.com/dspacheco132/kubernets-test.git",
  },
  {
    id: "4",
    title: "Docker Cleanup Script",
    description:
      "A comprehensive shell script for cleaning up Docker environments.",
    image: docker_cleanup,
    tags: ["Docker", "Shell Script", "DevOps", "System Administration"],
    link: "https://github.com/dspacheco132/clean-docker.git",
    date: "2024-11-10",
    longDescription: "A comprehensive shell script for cleaning up Docker environments, offering selective removal of containers, images, volumes, networks, and system resources. Features include color-coded interactive menu, visual progress indicators, safety checks, and system pruning options.",
    githubUrl: "https://github.com/dspacheco132/clean-docker.git",
  },
  {
    id: "5",
    title: "S3 LocalStack",
    description:
      "Local AWS S3 simulation using LocalStack for development and testing purposes.",
    image: "https://s3.swift-ai.pt/imagens/localstack.png",
    tags: ["AWS", "S3", "LocalStack", "Docker", "Development"],
    link: "https://github.com/dspacheco132/s3-local-stack.git",
    date: "2025-06-11",
    longDescription: "This project demonstrates how to set up and use LocalStack to simulate AWS S3 services locally. It includes Docker configuration, S3 bucket operations, and examples of how to interact with the local S3 service for development and testing without incurring AWS costs.",
    githubUrl: "https://github.com/dspacheco132/s3-local-stack.git",
  },
  {
    id: "6",
    title: "React Portfolio Website",
    description:
      "A modern portfolio website built with React, TypeScript, and Tailwind CSS featuring dark mode support.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "TypeScript", "Tailwind CSS", "Portfolio", "Responsive"],
    date: "2025-01-15",
    longDescription: "This portfolio website showcases my projects and skills using modern web technologies. It features a responsive design, dark mode toggle, smooth animations, and an interactive project showcase. Built with React and TypeScript for type safety and maintainability.",
    githubUrl: "https://github.com/dspacheco132/portfolio-website",
  },
  {
    id: "7",
    title: "AWS Lambda Automation",
    description:
      "Automate tasks and workflows using AWS Lambda, triggering serverless functions based on various AWS events.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", // Unsplash AWS theme placeholder
    tags: ["AWS", "Lambda", "Serverless", "Automation", "Cloud"],
    date: "2025-03-02",
    longDescription: "This project demonstrates how to use AWS Lambda for automating event-driven architectures within AWS. It includes sample triggers from S3, DynamoDB, and custom CloudWatch Events, empowering efficient, scalable automation without server management.",
    githubUrl: "https://github.com/dspacheco132/aws-lambda-automation",
  },
  {
    id: "8",
    title: "Node.js REST API",
    description:
      "A robust REST API built with Node.js, Express, and MongoDB for managing user authentication and data.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Node.js", "Express", "MongoDB", "REST API", "Authentication"],
    date: "2024-05-10",
    longDescription: "This RESTful API provides user authentication, data management, and secure endpoints. It includes JWT token authentication, password hashing, input validation, and comprehensive error handling. Built with scalability and security in mind.",
    githubUrl: "https://github.com/dspacheco132/nodejs-rest-api",
  },
  {
    id: "9",
    title: "CI/CD Pipeline with GitHub Actions",
    description:
      "Automated CI/CD pipeline setup using GitHub Actions for testing, building, and deploying applications.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["GitHub Actions", "CI/CD", "DevOps", "Automation", "Testing"],
    date: "2024-07-05",
    longDescription: "This project demonstrates a complete CI/CD pipeline setup using GitHub Actions. It includes automated testing, code quality checks, build processes, and deployment to multiple environments. The pipeline ensures code quality and reliability while streamlining the development workflow.",
    githubUrl: "https://github.com/dspacheco132/cicd-github-actions",
  },
  {
    id: "10",
    title: "Microservices Architecture",
    description:
      "A microservices-based application architecture using Docker, Kubernetes, and service mesh technologies.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Microservices", "Docker", "Kubernetes", "Service Mesh", "Architecture"],
    date: "2024-09-18",
    longDescription: "This project showcases a complete microservices architecture implementation with service discovery, load balancing, and inter-service communication. It includes containerized services, orchestration with Kubernetes, and monitoring capabilities for production-ready applications.",
    githubUrl: "https://github.com/dspacheco132/microservices-architecture",
  },
  {
    id: "11",
    title: "RFIDConnect",
    description:
      "Automated attendance registration system using RFID technology for schools.",
    image: "/lovable-uploads/0ba84c08-0d5f-4bbd-882f-e22241e78ec4.png", // updated to prototype with LCD display and card
    tags: [
      "RFID",
      "Attendance",
      "IoT",
      "Python",
      "Flask",
      "MySQL",
      "Automation",
      "PAP"
    ],
    date: "2024-06-14",
    longDescription:
      "RFIDConnect is a system developed to automate the attendance registration in classrooms using RFID cards and readers. The solution allows the management and monitoring of student attendance in a practical and secure way. It features a web interface built with Flask, MySQL integration, embedded hardware with RFID readers, and automated reports, making school management more efficient and reducing bureaucracy.",
    githubUrl: "https://github.com/seu-usuario/rfidconnect",
    extraImages: [
      {
        url: "/lovable-uploads/2f821fa2-8ff4-4f14-9690-f5bdacfbaf9e.png",
        alt: "Dashboard screen of RFIDConnect web app"
      },
      {
        url: "/lovable-uploads/3e795086-9ae9-46bf-9fe1-30ee5213c276.png",
        alt: "Login screen of RFIDConnect"
      },
      {
        url: "/lovable-uploads/cf0a311d-da29-4994-8aa9-4f35d9c207a0.png",
        alt: "RFIDConnect student RFID card (front side)"
      },
      {
        url: "/lovable-uploads/738af04b-08ff-480f-a1a2-147323b5e46e.png",
        alt: "RFIDConnect student RFID card (back side)"
      },
      {
        url: "/lovable-uploads/4701e051-9925-4dba-b5f8-39246b0a9462.png",
        alt: "Design screens and Figma prototypes of RFIDConnect"
      },
      // Nova seção: Fotos da maquete
      {
        url: "/lovable-uploads/0ba84c08-0d5f-4bbd-882f-e22241e78ec4.png",
        alt: "RFIDConnect prototype with student card and LCD display"
      },
      {
        url: "/lovable-uploads/a8a44476-cb38-4721-bd35-c4f351b9d99d.png",
        alt: "RFIDConnect prototype with student card on sensor"
      },
      {
        url: "/lovable-uploads/60174354-556d-45e2-a487-bf09597af50a.png",
        alt: "RFIDConnect hardware wiring and components inside the prototype"
      },
      {
        url: "/lovable-uploads/78e27671-2f3b-4b05-8ff9-860cdcbe9fff.png",
        alt: "RFIDConnect LCD displaying a welcome message"
      }
    ]
  },
];

// Add this new function to get a project by ID
export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};
