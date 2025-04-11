export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  date: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
}

// Add example images for the projects
export const projects: Project[] = [
  {
    id: "1",
    title: "Terraform Infrastructure Project",
    description: "AWS EC2 Instance Automation with Terraform",
    longDescription: `This project creates an Ubuntu EC2 instance on AWS with:

- Ubuntu 20.04 LTS (ami-04b4f1a9cf54c11d0)
- t2.micro instance type (free tier eligible)
- Security Group allowing SSH (port 22)

## Basic Configuration
1. Clone the repository
2. Run:
   - terraform init
   - terraform plan
   - terraform apply

## Security
⚠️ WARNING: The current Security Group allows:
- SSH access from any IP (0.0.0.0/0)
- Recommended to restrict to specific IPs for production

## Cleanup
To remove all resources:
- terraform destroy

## Customization Options
- Change the ami for different Ubuntu versions/regions
- Modify key_name to use your SSH key
- Adjust cidr_blocks in security group for restricted access

## Requirements
- AWS account with EC2 permissions
- Terraform (v1.0+) installed
- Configured SSH key in AWS`,
    image: "/terraform-project.jpg",
    date: "April 2024",
    tags: ["AWS", "Terraform", "Infrastructure", "DevOps"],
    liveUrl: "",
    githubUrl: "https://github.com/Swift132/terraform-aws-ec2"
  },
  {
    id: "2",
    title: "AI Chat with Flask and OpenRouter",
    description: "Web application to interact with AI models through OpenRouter API",
    longDescription: `This project is a simple web application that allows you to interact with different AI models available on OpenRouter. It uses the Flask framework to create the interface and makes requests to the OpenRouter API to get responses.

## Requirements
- Python 3.8 or higher
- OpenRouter account for API key

## Installation
1. Clone the repository
2. Create a virtual environment (optional but recommended)
3. Install dependencies: \`pip install -r requirements.txt\`

## Configuration
Create a .env file with:
- OPENROUTER_API_KEY=your_api_key
- YOUR_SITE_URL=https://yoursite.com
- YOUR_SITE_NAME=Your Site Name

## Running the Project
1. Start the Flask server: \`python app.py\`
2. Access the application in your browser: \`http://127.0.0.1:5000\`

## Project Structure
- app.py: Main Flask application file
- requirements.txt: Project dependencies
- .env: Environment variables file
- templates/: HTML templates directory`,
    image: "/flask-ai-chat.jpg",
    date: "March 2024",
    tags: ["Python", "Flask", "AI", "API"],
    liveUrl: "",
    githubUrl: "https://github.com/Swift132/flask-ai-chat"
  },
  {
    id: "3",
    title: "Kubernetes Web Server with Minikube",
    description: "NGINX web server running in a Kubernetes cluster with Minikube",
    longDescription: `This project sets up an NGINX web server running in a Kubernetes cluster with Minikube. It includes a ConfigMap for custom HTML and an Ingress for friendly domain access.

## Project Structure
- deployment.yaml: Creates pods running NGINX
- configmap.yaml: Defines the site's custom HTML
- service.yaml: Exposes the web server within the cluster
- ingress.yaml: Allows access via a friendly domain

## Installation
1. Install Minikube (if not already installed)
2. Start Minikube: \`minikube start --driver=docker\`
3. Deploy components:
   - \`kubectl apply -f configmap.yaml\`
   - \`kubectl apply -f deployment.yaml\`
   - \`kubectl apply -f service.yaml\`
   - \`kubectl apply -f ingress.yaml\`
4. Add domain to hosts file
5. Access in browser: \`http://mysite.local\`

## Verification and Debugging
- Check pods: \`kubectl get pods\`
- Check logs: \`kubectl logs -l app=web\`
- Access container: \`kubectl exec -it $(kubectl get pod -l app=web -o jsonpath="{.items[0].metadata.name}") -- /bin/sh\``,
    image: "/kubernetes-webserver.jpg",
    date: "February 2024",
    tags: ["Kubernetes", "Docker", "DevOps", "NGINX"],
    liveUrl: "",
    githubUrl: "https://github.com/Swift132/kubernetes-webserver"
  },
  {
    id: "4",
    title: "Docker Cleanup Script",
    description: "Comprehensive shell script for cleaning up Docker environments",
    longDescription: `A comprehensive shell script for cleaning up Docker environments, offering selective removal of containers, images, volumes, networks, and system resources.

## Features
- 🗑️ Selective cleanup of Docker resources
- 🎨 Color-coded interactive menu
- ⏳ Visual progress indicators
- ✅ Safety checks and confirmations
- 🧹 System pruning options

## Usage
Run the script and select from the available cleanup options:
\`\`\`bash
chmod +x docker-cleanup.sh
./docker-cleanup.sh
\`\`\`

## Menu Options
1. Delete everything - Full cleanup
2. Delete images only - Remove all Docker images
3. Delete volumes only - Remove all Docker volumes
4. Delete builder cache - Clean build cache
5. System prune - Safe system cleanup
6. Exit - Quit the script

## Requirements
- Docker installed and running
- Linux/Unix environment
- sudo privileges (for some operations)

## Safety Notes
- The "Delete everything" option is destructive and irreversible
- Always ensure you don't have important uncommitted work in containers
- Consider backing up important volumes before cleanup`,
    image: "/docker-cleanup.jpg",
    date: "January 2024",
    tags: ["Docker", "Shell", "DevOps", "Automation"],
    liveUrl: "",
    githubUrl: "https://github.com/Swift132/docker-cleanup"
  }
];
