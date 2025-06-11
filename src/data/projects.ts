
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
    date: "2025-11-10",
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
    date: "2024-03-20",
    longDescription: "This project demonstrates how to set up and use LocalStack to simulate AWS S3 services locally. It includes Docker configuration, S3 bucket operations, and examples of how to interact with the local S3 service for development and testing without incurring AWS costs.",
    githubUrl: "https://github.com/dspacheco132/s3-local-stack.git",
  },
];

// Add this new function to get a project by ID
export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};
