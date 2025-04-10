
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
    id: "cloud-infrastructure",
    title: "Multi-Cloud Architecture",
    description: "Enterprise-grade infrastructure deployment across AWS and Oracle Cloud with Terraform IaC.",
    longDescription: "This project showcases a sophisticated multi-cloud architecture that leverages both AWS and Oracle Cloud Infrastructure. Using Terraform as the infrastructure-as-code tool, I implemented a resilient and scalable environment that provides high availability and disaster recovery capabilities.\n\nThe infrastructure includes VPCs/VCNs, subnets, security groups, load balancers, and auto-scaling groups configured in both cloud providers. A custom module system was developed to maintain infrastructure consistency across environments while allowing for provider-specific optimizations.\n\nAn end-to-end CI/CD pipeline was established using GitHub Actions to validate, plan, and apply infrastructure changes in a controlled manner. The project also features comprehensive monitoring using Grafana dashboards that provide unified visibility across both cloud environments.",
    image: "/placeholder.svg",
    tags: ["AWS", "Oracle Cloud", "Terraform", "IaC", "CI/CD"],
    date: "February 2025",
    featured: true,
    liveUrl: "https://example.com/cloud-architecture",
    githubUrl: "https://github.com/example/cloud-architecture"
  },
  {
    id: "devops-pipeline",
    title: "DevOps Containerization Pipeline",
    description: "Automated containerization workflow using Docker, GitHub Actions and Cloudflare infrastructure.",
    longDescription: "This project demonstrates a modern DevOps pipeline focused on containerization and continuous deployment. I designed and implemented a complete workflow that begins with code commits and ends with containerized applications running in production.\n\nThe pipeline includes Docker image building with multi-stage builds for optimization, vulnerability scanning of container images, automated testing of containerized applications, and deployment to container orchestration platforms.\n\nThe infrastructure leverages Cloudflare for edge computing, CDN capabilities, and DDoS protection. The project features zero-downtime deployments using blue-green deployment strategies, with automated rollbacks in case of failures. Grafana dashboards were configured to monitor application performance and container health metrics in real-time.",
    image: "/placeholder.svg",
    tags: ["Docker", "Cloudflare", "GitHub Actions", "DevOps", "Grafana"],
    date: "January 2025",
    featured: true,
    liveUrl: "https://example.com/devops-pipeline",
    githubUrl: "https://github.com/example/devops-pipeline"
  },
  {
    id: "data-analytics",
    title: "Data Analytics Platform",
    description: "Python-based analytics platform with database integration, data visualization, and ETL pipelines.",
    longDescription: "This comprehensive data analytics platform was built to process, analyze, and visualize large datasets from various sources. Developed primarily in Python, it includes custom ETL (Extract, Transform, Load) pipelines that integrate with multiple database systems including PostgreSQL, MySQL, and Oracle.\n\nThe platform features automated data quality checks, data normalization processes, and advanced analytics using libraries such as Pandas, NumPy, and SciPy. The visualization layer was built using a combination of Matplotlib, Seaborn, and interactive Plotly dashboards.\n\nThe entire system is containerized for consistent deployment across environments, with database connections secured through proper authentication mechanisms. Performance optimizations include query tuning, appropriate indexing strategies, and caching mechanisms to handle large-scale data processing efficiently.",
    image: "/placeholder.svg",
    tags: ["Python", "Databases", "ETL", "Data Analytics", "Visualization"],
    date: "December 2024",
    featured: false,
    liveUrl: "https://example.com/data-analytics",
    githubUrl: "https://github.com/example/data-analytics"
  },
  {
    id: "auth-system",
    title: "Enterprise Authentication System",
    description: "Secure authentication and authorization system implementing OAuth 2.0 and OpenID Connect protocols.",
    longDescription: "This enterprise-grade authentication and authorization system provides a secure foundation for applications requiring robust identity management. The system implements OAuth 2.0 and OpenID Connect protocols to enable single sign-on (SSO) capabilities across multiple applications.\n\nKey security features include JWT (JSON Web Token) based authentication, role-based access control (RBAC), multi-factor authentication (MFA), and comprehensive audit logging. The system supports various authentication methods including social logins, SAML for enterprise identity providers, and traditional username/password authentication with advanced password policies.\n\nThe entire solution was designed with security best practices in mind, including proper token validation, protection against common web vulnerabilities (OWASP Top 10), and secure communication over TLS. A custom admin interface allows for user management, role assignments, and detailed access reports.",
    image: "/placeholder.svg",
    tags: ["OAuth", "Security", "Authentication", "Authorization", "JWT"],
    date: "October 2024",
    featured: true,
    liveUrl: "https://example.com/auth-system",
    githubUrl: "https://github.com/example/auth-system"
  },
  {
    id: "agile-platform",
    title: "Agile Project Management Tool",
    description: "Custom Scrum and Kanban platform designed from the ground up with Figma and implemented with modern technologies.",
    longDescription: "This Agile project management platform was designed to support Scrum and Kanban methodologies while addressing specific workflow needs not met by existing tools. The design process began with extensive user research and competitive analysis, followed by creating comprehensive wireframes and high-fidelity prototypes in Figma.\n\nThe platform features interactive Scrum boards, customizable Kanban workflows, burndown/burnup charts, velocity tracking, and sprint planning tools. It includes automated workflows for sprint transitions, integration with version control systems for linking commits to user stories, and customizable reporting capabilities.\n\nThe implementation utilized a modern technology stack with a focus on real-time collaboration features, allowing multiple team members to work simultaneously. The UI was carefully crafted to provide an intuitive experience based on the detailed Figma prototypes, with particular attention to responsive design for mobile and tablet usage during stand-up meetings.",
    image: "/placeholder.svg",
    tags: ["Scrum", "Agile", "Project Management", "Figma", "UI/UX"],
    date: "August 2024",
    featured: false,
    liveUrl: "https://example.com/agile-platform",
    githubUrl: "https://github.com/example/agile-platform"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};
