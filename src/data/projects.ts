
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
    id: "terraform-infrastructure",
    title: "AWS Terraform Infrastructure",
    description: "AWS infrastructure automation with Terraform, creating scalable EC2 instances with proper security configuration.",
    longDescription: "# Terraform Infrastructure Project\n\nThis project creates an Ubuntu EC2 instance on AWS with:\n\n- Ubuntu 20.04 LTS (ami-04b4f1a9cf54c11d0)\n- t2.micro instance type (free tier eligible)\n- Security Group allowing SSH (port 22)\n\n## Basic Configuration\n- Clone the repository\n- Run:\n  ```\n  terraform init\n  terraform plan\n  terraform apply\n  ```\n\n## Security\n⚠️ WARNING: The current Security Group allows:\n- SSH access from any IP (0.0.0.0/0)\n- Recommended to restrict to specific IPs for production\n\n## Cleanup\nTo remove all resources:\n```\nterraform destroy\n```\n\n## Customization Options\n- Change the ami for different Ubuntu versions/regions\n- Modify key_name to use your SSH key\n- Adjust cidr_blocks in security group for restricted access\n\n## Requirements\n- AWS account with EC2 permissions\n- Terraform (v1.0+) installed\n- Configured SSH key in AWS",
    image: "/placeholder.svg",
    tags: ["AWS", "Terraform", "IaC", "EC2", "DevOps"],
    date: "March 2025",
    featured: true,
    liveUrl: "https://example.com/terraform-project",
    githubUrl: "https://github.com/example/terraform-project"
  },
  {
    id: "flask-ai-chat",
    title: "AI Chat with Flask and OpenRouter",
    description: "A simple web application that allows interaction with different AI models available on OpenRouter using Flask.",
    longDescription: "# Chat with AI using Flask and OpenRouter\n\nThis project is a simple web application that allows you to interact with different AI models available on OpenRouter. It uses the Flask framework to create the interface and makes requests to the OpenRouter API to get responses.\n\n## Requirements\n\n- Python 3.8 or higher\n- An account on [OpenRouter](https://openrouter.ai/) to get an API key\n\n## Installation\n\n1. Clone this repository:\n   ```bash\n   git clone https://github.com/your-username/repository-name.git\n   cd repository-name\n   ```\n\n2. Create a virtual environment (optional, but recommended):\n   ```bash\n   python -m venv venv\n   source venv/bin/activate  # On Windows: venv\\Scripts\\activate\n   ```\n\n3. Install dependencies:\n   ```bash\n   pip install -r requirements.txt\n   ```\n\n## Configuration\n\n1. Create a `.env` file in the project root and add the following environment variables:\n   ```plaintext\n   OPENROUTER_API_KEY=your_api_key_here\n   YOUR_SITE_URL=https://yoursite.com\n   YOUR_SITE_NAME=My Site\n   ```\n   - Replace `your_api_key_here` with your OpenRouter API key\n   - Replace `https://yoursite.com` with your site URL\n   - Replace `My Site` with your site name\n\n2. Save the `.env` file\n\n## Running the Project\n\n1. Start the Flask server:\n   ```bash\n   python app.py\n   ```\n\n2. Access the application in your browser:\n   ```\n   http://127.0.0.1:5000\n   ```\n\n## How to Use\n\n1. On the home page, enter your question in the \"Question\" field\n2. (Optional) Add an image URL in the \"Image URL\" field\n3. Select the desired AI from the dropdown menu\n4. Click \"Submit\" to get a response\n\n## Project Structure\n\n```\nproject/\n│\n├── app.py                 # Main Flask application file\n├── requirements.txt       # Project dependencies list\n├── .env                   # Environment variables file\n├── README.md              # Project documentation\n└── templates/             # Folder for HTML templates\n    └── index.html         # Home page template\n```\n\n## Dependencies\n\n- **Flask**: Web framework for creating the application\n- **requests**: Library for making HTTP requests to the OpenRouter API\n- **python-dotenv**: Library for loading environment variables from a `.env` file",
    image: "/placeholder.svg",
    tags: ["Python", "Flask", "AI", "OpenRouter", "Web"],
    date: "February 2025",
    featured: false,
    liveUrl: "https://example.com/flask-ai-chat",
    githubUrl: "https://github.com/example/flask-ai-chat"
  },
  {
    id: "kubernetes-webserver",
    title: "Kubernetes Web Server with Minikube",
    description: "A project that sets up an NGINX web server running in a Kubernetes cluster with Minikube, including ConfigMap and Ingress setup.",
    longDescription: "# 🚀 Kubernetes Web Server with Minikube\n\nThis project sets up an **NGINX** web server running in a **Kubernetes** cluster with **Minikube**. It includes a **ConfigMap** for custom HTML and an **Ingress** for friendly domain access.\n\n## 📌 Project Structure\n\n| File | Function |\n|---------|--------|\n| `deployment.yaml` | Creates the pods running NGINX |\n| `configmap.yaml` | Defines the site's custom HTML |\n| `service.yaml` | Exposes the web server within the cluster |\n| `ingress.yaml` | Allows access to the site via a friendly domain |\n\n## 📥 Installation\n\n### 1️⃣ Install Minikube (if not already installed)\n\n**Linux:**\n```bash\ncurl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64\nsudo install minikube-linux-amd64 /usr/local/bin/minikube\n```\n\n**Mac (Homebrew):**\n```bash\nbrew install minikube\n```\n\n**Windows (Chocolatey):**\n```powershell\nchoco install minikube\n```\n\nCheck the installation:\n```bash\nminikube version\n```\n\n### 2️⃣ Start Minikube\n```bash\nminikube start --driver=docker\n```\n\nCheck the nodes:\n```bash\nkubectl get nodes\n```\n\n## 🔥 Deploying Components\n\n### 1️⃣ Create ConfigMap for Custom HTML\n```bash\nkubectl apply -f configmap.yaml\n```\n\n### 2️⃣ Create Deployment for the Web Server\n```bash\nkubectl apply -f deployment.yaml\n```\n\n### 3️⃣ Create Service to Expose the Web Server\n```bash\nkubectl apply -f service.yaml\n```\n\n### 4️⃣ Enable and Create Ingress for Friendly Domain\n```bash\nminikube addons enable ingress\nkubectl apply -f ingress.yaml\n```\n\nAdd the domain to **/etc/hosts** (Linux/Mac) or **C:\\Windows\\System32\\drivers\\etc\\hosts** (Windows):\n```\n<MINIKUBE_IP> mysite.local\n```\n\nFind the Minikube IP with:\n```bash\nminikube ip\n```\n\nNow, open in the browser:\n```\nhttp://mysite.local\n```\n\n## 🔄 Verification and Debugging\n\nCheck pods:\n```bash\nkubectl get pods\n```\n\nCheck NGINX logs:\n```bash\nkubectl logs -l app=web\n```\n\nAccess the container inside the pod:\n```bash\nkubectl exec -it $(kubectl get pod -l app=web -o jsonpath=\"{.items[0].metadata.name}\") -- /bin/sh\n```\n\nCheck services:\n```bash\nkubectl get svc\n```\n\n## 🗑️ Removing Resources\nTo delete everything:\n```bash\nkubectl delete deployment web-server\nkubectl delete service web-service\nkubectl delete ingress web-ingress\nkubectl delete configmap nginx-config\nminikube stop\n```\n\n## 🎯 Next Steps\n- Add HTTPS with TLS on Ingress\n- Deploy a real application (Node.js, Python, Go)\n- Add a database (MySQL or PostgreSQL)\n- Monitoring with Prometheus and Grafana",
    image: "/placeholder.svg",
    tags: ["Kubernetes", "Minikube", "NGINX", "DevOps", "Docker"],
    date: "January 2025",
    featured: true,
    liveUrl: "https://example.com/kubernetes-webserver",
    githubUrl: "https://github.com/example/kubernetes-webserver"
  },
  {
    id: "docker-cleanup",
    title: "Docker Cleanup Script",
    description: "A comprehensive shell script for cleaning up Docker environments with selective removal of containers, images, volumes, and networks.",
    longDescription: "# Docker Cleanup Script\n\nA comprehensive shell script for cleaning up Docker environments, offering selective removal of containers, images, volumes, networks, and system resources.\n\n## Features\n\n- 🗑️ Selective cleanup of Docker resources\n- 🎨 Color-coded interactive menu\n- ⏳ Visual progress indicators\n- ✅ Safety checks and confirmations\n- 🧹 System pruning options\n\n## Usage\n\nRun the script and select from the available cleanup options:\n\n```bash\nchmod +x docker-cleanup.sh\n./docker-cleanup.sh\n```\n\n### Menu Options\n\n1. **Delete everything** - Full cleanup (containers, images, volumes, networks)\n2. **Delete images only** - Remove all Docker images\n3. **Delete volumes only** - Remove all Docker volumes\n4. **Delete builder cache** - Clean build cache\n5. **System prune** - Safe system cleanup (docker system prune)\n6. **Exit** - Quit the script\n\n## Requirements\n\n- 🐳 Docker installed and running\n- 🐧 Linux/Unix environment\n- 🔐 sudo privileges (for some operations)\n\n## Safety Notes\n\n❗ **Important warnings:**\n- The \"Delete everything\" option is destructive and irreversible\n- Always ensure you don't have important uncommitted work in containers\n- Consider backing up important volumes before cleanup\n- The script skips default networks (bridge, host, none)\n\n## Best Practices\n\n1. Use `system prune` (option 5) for regular maintenance\n2. Clean specific resource types when possible\n3. Run during low-usage periods as some operations may be resource-intensive\n4. Review what will be deleted before confirming operations\n\n## Technical Details\n\nThe script includes:\n- Docker runtime verification\n- Spinner animations for long operations\n- Color-coded output for better visibility\n- Error handling for common scenarios\n\n## License\n\nMIT License - Free for personal and commercial use",
    image: "/placeholder.svg",
    tags: ["Docker", "Shell Script", "DevOps", "Automation"],
    date: "December 2024",
    featured: false,
    liveUrl: "https://example.com/docker-cleanup",
    githubUrl: "https://github.com/example/docker-cleanup"
  },
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
