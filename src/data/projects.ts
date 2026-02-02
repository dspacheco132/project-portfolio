// Replace StaticImageData with string since we don't want to use next/image
const CDN_BASE_URL = "https://r2.diogopacheco.com";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  date?: string;
  longDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
  extraImages?: { url: string; alt?: string; explanation?: string }[];
  youtubeUrl?: string;
  /** Short, impactful bullets for recruiters — e.g. "Scalable architecture with Cassandra + Redis" */
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: "featured-1",
    title: "EV Locator",
    description:
      "Electric Vehicle Search and Comparison Platform - A comprehensive web application for searching, comparing, and locating electric and plug-in hybrid vehicles across the North American market.",
    image: `${CDN_BASE_URL}/public/3D-EVLOCATOR.png`,
    tags: ["React", "TypeScript", "FastAPI", "Python", "Redis", "Docker", "Nginx", "AWS", "Cloudflare"],
    link: "https://evlocator.sagewell.com/",
    date: "2025-09-01",
    longDescription: "Built and deployed a full-stack EV search platform for the North American market, integrated with the MarketCheck API. Delivered a responsive React + TypeScript frontend (Vite) and a FastAPI + Pydantic backend, with Redis for query caching and Nginx as reverse proxy. Managed infrastructure with Docker, secured API credentials via AWS Secrets Manager, and used Cloudflare Tunnel for development.",
    highlights: [
      "Full-stack product for North American EV market",
      "AWS + Cloudflare production deployment",
      "Redis caching, FastAPI, end-to-end ownership",
    ],
    liveUrl: "https://evlocator.sagewell.com/",
    githubUrl: undefined, // Private repository
  },
  {
    id: "featured-2",
    title: "Sagewell Website",
    description:
      "Corporate website development and deployment focused on strengthening digital presence, delivering modern design, and optimizing content for the company.",
    image: `${CDN_BASE_URL}/public/SAGEWELL-COM%20copy.gif`,
    tags: ["React", "TypeScript", "Vercel", "SEO", "Strapi", "Figma", "Photoshop", "Illustrator"],
    link: "https://www.sagewell.com",
    date: "2025-08-30",
    longDescription: "Led design, development, and deployment of Sagewell's corporate website to strengthen its digital presence. Built with React + Vite and TypeScript, deployed on Vercel. Owned SEO optimization, Strapi headless CMS integration, custom layouts (Figma, Photoshop, Illustrator), and performance tuning via Google Lighthouse.",
    highlights: [
      "Corporate site: design, build, SEO, and CMS integration",
      "Vercel deployment, Strapi headless CMS",
      "Performance-driven with Lighthouse audits",
    ],
    liveUrl: "https://www.sagewell.com",
    githubUrl: undefined, // Private repository
  },
  {
    id: "featured-3",
    title: "RFIDConnect",
    description:
      "Automated attendance registration system using RFID technology for schools.",
    image: `${CDN_BASE_URL}/public/RFIDCONNECT.png`,
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
      "Designed and built an end-to-end attendance system for schools using RFID cards and readers. Developed the Flask web dashboard, MySQL database, and hardware integration. Delivered automated reports and a secure, practical workflow that streamlines school administration and reduces manual work.",
    highlights: [
      "End-to-end IoT: hardware, backend, and web dashboard",
      "Flask + MySQL + RFID hardware integration",
      "Automated attendance and reporting for schools",
    ],
    githubUrl: "https://github.com/Swift132/rfidconnect",
    extraImages: [
      {
        url: `${CDN_BASE_URL}/public/projects/rfidconnect/dashboard.webp`,
        alt: "Dashboard screen of RFIDConnect web app"
      },
      {
        url: `${CDN_BASE_URL}/public/projects/rfidconnect/login.webp`,
        alt: "Login screen of RFIDConnect"
      },
      {
        url: `${CDN_BASE_URL}/public/projects/rfidconnect/design-prototypes.webp`,
        alt: "Design screens and Figma prototypes of RFIDConnect"
      },
      {
        url: `${CDN_BASE_URL}/public/projects/rfidconnect/hardware-wiring.webp`,
        alt: "RFIDConnect hardware wiring and components inside the prototype"
      },
      {
        url: `${CDN_BASE_URL}/public/projects/rfidconnect/lcd-display.webp`,
        alt: "RFIDConnect LCD displaying a welcome message"
      },
      {
        url: `${CDN_BASE_URL}/public/projects/rfidconnect/prototype-sensor.webp`,
        alt: "RFIDConnect prototype with student card on sensor"
      },
      {
        url: `${CDN_BASE_URL}/public/projects/rfidconnect/prototype-card.webp`,
        alt: "RFIDConnect prototype with student card on sensor"
      },
      {
        url: `${CDN_BASE_URL}/public/projects/rfidconnect/card-front.webp`,
        alt: "RFIDConnect student RFID card (front side)"
      },
      {
        url: `${CDN_BASE_URL}/public/projects/rfidconnect/prototype-display.webp`,
        alt: "RFIDConnect prototype with student card and LCD display"
      }
    ]
  },
  {
    id: "1",
    title: "Flask AI Chat",
    description:
      "A simple AI chat application built with Flask and deployed with Docker.",
    image: `${CDN_BASE_URL}/public/projects/flask-ai-chat/main.webp`,
    tags: ["Flask", "AI", "Docker", "Python"],
    link: "https://github.com/dspacheco132/openrouter-api.git",
    date: "2023-12-15",
    longDescription: "Web chat app that lets users switch between multiple AI models via OpenRouter. Built with Flask for the backend and a simple web UI that streams responses from the OpenRouter API. Containerized with Docker for easy deployment.",
    liveUrl: "https://swift-ai.pt",
    githubUrl: "https://github.com/dspacheco132/openrouter-api.git",
  },
  {
    id: "2",
    title: "Terraform Infrastructure Project",
    description:
      "AWS infrastructure setup with Terraform, creating an Ubuntu EC2 instance with proper security configuration.",
    image: `${CDN_BASE_URL}/public/projects/terraform/main.webp`,
    tags: ["Terraform", "AWS", "Infrastructure as Code", "DevOps"],
    link: "https://github.com/dspacheco132/prj-terraform.git",
    date: "2024-01-30",
    longDescription: "Infrastructure-as-Code with Terraform: provisions an Ubuntu 20.04 EC2 instance (t2.micro), configures a security group for SSH, and documents security practices and customization for reuse.",
    githubUrl: "https://github.com/dspacheco132/prj-terraform.git",
  },
  {
    id: "3",
    title: "Kubernetes Web Server",
    description:
      "NGINX web server running in a Kubernetes cluster with Minikube, including ConfigMap and Ingress.",
    image: `${CDN_BASE_URL}/public/projects/kubernetes/main.webp`,
    tags: ["Kubernetes", "NGINX", "Minikube", "DevOps"],
    link: "https://github.com/dspacheco132/kubernets-test.git",
    date: "2024-02-15",
    longDescription: "Deployed an NGINX web server in a Kubernetes cluster (Minikube) with ConfigMap for custom HTML and Ingress for external access. Covers core Kubernetes concepts: pods, services, and ingress controllers.",
    githubUrl: "https://github.com/dspacheco132/kubernets-test.git",
  },
  {
    id: "4",
    title: "Docker Cleanup Script",
    description:
      "A comprehensive shell script for cleaning up Docker environments.",
    image: `${CDN_BASE_URL}/public/projects/docker-cleanup/main.webp`,
    tags: ["Docker", "Shell Script", "DevOps", "System Administration"],
    link: "https://github.com/dspacheco132/clean-docker.git",
    date: "2024-11-10",
    longDescription: "Interactive shell script for Docker cleanup: selectively removes containers, images, volumes, and networks. Includes a color-coded menu, progress indicators, safety checks, and system prune options for dev and CI environments.",
    githubUrl: "https://github.com/dspacheco132/clean-docker.git",
  },
  {
    id: "5",
    title: "S3 LocalStack",
    description:
      "Local AWS S3 simulation using LocalStack for development and testing purposes.",
    image: `${CDN_BASE_URL}/public/projects/localstack/s3-localstack.png`,
    tags: ["AWS", "S3", "LocalStack", "Docker", "Development"],
    link: "https://github.com/dspacheco132/s3-local-stack.git",
    date: "2025-06-11",
    longDescription: "Local AWS S3 simulation with LocalStack and Docker. Covers bucket creation, object operations, and examples for local development and testing without AWS costs.",
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
    longDescription: "Responsive portfolio built with React, TypeScript, and Tailwind CSS. Includes dark mode, smooth animations, and an interactive project showcase for clean, maintainable presentation of work.",
    githubUrl: "https://github.com/dspacheco132/project-portfolio",
  },
  {
    id: "7",
    title: "AWS Lambda Automation",
    description:
      "Automate tasks and workflows using AWS Lambda, triggering serverless functions based on various AWS events.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", // Unsplash AWS theme placeholder
    tags: ["AWS", "Lambda", "Serverless", "Automation", "Cloud"],
    date: "2025-03-02",
    longDescription: "Event-driven automation with AWS Lambda. Implemented triggers from S3, DynamoDB, and CloudWatch Events for scalable, serverless workflows.",
  },
  {
    id: "9",
    title: "CI/CD Pipeline with GitHub Actions",
    description:
      "Automated CI/CD pipeline setup using GitHub Actions for testing, building, and deploying applications.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["GitHub Actions", "CI/CD", "DevOps", "Automation", "Testing"],
    date: "2024-07-05",
    longDescription: "End-to-end CI/CD pipeline with GitHub Actions: automated testing, code quality checks, builds, and deployment to multiple environments for faster, reliable releases.",
  },
  {
    id: "10",
    title: "Microservices Architecture",
    description:
      "A microservices-based application architecture using Docker, Kubernetes, and service mesh technologies.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Microservices", "Docker", "Kubernetes", "Service Mesh", "Architecture"],
    date: "2024-09-18",
    longDescription: "Microservices architecture with service discovery, load balancing, and inter-service communication. Containerized services orchestrated with Kubernetes and wired for monitoring in production.",
    githubUrl: "https://github.com/dspacheco132/microservices-architecture",
  },
  {
    id: "11",
    title: "Supabase Self-Hosted",
    description:
      "Docker Compose setup for self-hosting Supabase, providing a complete backend-as-a-service stack locally.",
    image: "https://r2.diogopacheco.com/public/supabase-dashboard.png",
    tags: ["Supabase", "Docker", "Docker Compose", "Self-hosting", "Database", "PostgreSQL", "DevOps"],
    date: "2025-08-10",
    longDescription: "Docker Compose setup for self-hosting Supabase: PostgreSQL, Auth, Storage, and core services. Includes backup and restore scripts for development and production.",
    highlights: [
      "Full Supabase self-hosted: Auth, DB, Storage via Docker",
      "Backup/restore scripts for production use",
      "Documented with video walkthrough",
    ],
    githubUrl: "https://github.com/dspacheco132/supabase-deploy.git",
    youtubeUrl: "https://www.youtube.com/watch?v=pJkO1j5TwxA&t=354s",
  },
  {
    id: "12",
    title: "Strapi Docker Environment",
    description:
      "Automated Strapi development environment using Docker Compose with automated installation and setup scripts.",
    image: "https://r2.diogopacheco.com/public/analytics.png_a733bbc13e.png",
    tags: ["Strapi", "Docker", "Docker Compose", "CMS", "TypeScript", "Node.js", "DevOps"],
    date: "2025-08-15",
    longDescription: "Automated Strapi setup via Docker Compose and an expect-based entrypoint. Provisions a TypeScript Strapi project with SQLite, domain config, custom data imports, and simple container lifecycle management for dev and production.",
    githubUrl: "https://github.com/dspacheco132/strapi-prod.git",
  },
  {
    id: "13",
    title: "Grafana Enterprise Dashboard",
    description:
      "Docker Compose setup for testing and configuring Grafana Enterprise with persistent storage and environment configuration.",
    image: "https://r2.diogopacheco.com/public/grafana-dashboard-english.png",
    tags: ["Grafana", "Docker", "Docker Compose", "Monitoring", "Visualization", "DevOps"],
    date: "2025-08-20",
    longDescription: "Docker Compose setup for Grafana Enterprise: env-based admin config, persistent storage, restart policies, and simple management. Enables quick local testing of dashboards, data sources, and monitoring configs.",
    githubUrl: "https://github.com/dspacheco132/grafana-prj.git",
  },
  {
    id: "14",
    title: "Transcriber Whisper API",
    description:
      "REST API developed in Python using FastAPI and OpenAI Whisper for audio-to-text transcription with support for multiple formats and languages.",
    image: "https://r2.diogopacheco.com/public/Whisper-001--1024x576.webp",
    tags: ["Python", "FastAPI", "OpenAI Whisper", "Audio Transcription", "AI", "Docker", "REST API"],
    date: "2025-08-25",
    longDescription: "REST API for audio-to-text transcription with OpenAI Whisper. Supports mp3, wav, m4a, flac, ogg, webm; automatic language detection and translation; multiple model sizes. Dockerized, with a URL-based transcription endpoint for Telegram and N8N integration.",
    highlights: [
      "AI-powered transcription with Whisper, multi-format support",
      "REST API ready for N8N, Telegram, and automation workflows",
      "Docker, translation, and language detection",
    ],
    githubUrl: "https://github.com/dspacheco132/transcriber-whisper.git",
  },
  {
    id: "15",
    title: "URL Shortener",
    description:
      "A modern URL shortener built with Next.js, Express, Apache Cassandra, and Redis. Short links use Hashids for compact, obfuscated slugs.",
    image: `https://r2.diogopacheco.com/public/lnk-home.png`,
    tags: ["Next.js", "React", "TypeScript", "Express", "Cassandra", "Redis", "Hashids", "Docker", "Tailwind CSS", "shadcn/ui"],
    link: "https://github.com/dspacheco132/URL-Shortener",
    date: "2026-02-02",
    longDescription:
      "lnk. — URL shortener with click analytics, dark mode, i18n (EN/PT), and SEO (sitemap, robots.txt, Open Graph). Next.js 16 frontend and Express backend; Cassandra for slug → URL storage; Redis for atomic IDs and click counts; Hashids (base62) for compact slugs. Diagrams below show the system design and request flow from creation to redirect.",
    highlights: [
      "Scalable architecture: Cassandra for storage, Redis for atomic counters",
      "Production-ready: Docker, CI/CD, live at lnk.diogopacheco.com",
      "Designed for security: non-guessable slugs, server-side ID generation",
    ],
    liveUrl: "https://lnk.diogopacheco.com",
    githubUrl: "https://github.com/dspacheco132/URL-Shortener",
    extraImages: [
      {
        url: "https://r2.diogopacheco.com/public/system-design-url-shortner.png",
        alt: "System Design — URL Shortener architecture",
        explanation: `## Architecture overview

- **Frontend (Next.js)** — Proxies API requests to the Express backend
- **Cassandra** — Stores \`slug → long URL\` mapping with high availability and write scalability
- **Redis** — Atomic ID generation via \`INCR\` and fast click counting
- **Separation of concerns** — Each layer scales independently`
      },
      {
        url: "https://r2.diogopacheco.com/public/diagram-functioning-url-shortner.png",
        alt: "Functioning Flow — URL Shortener request lifecycle",
        explanation: `## Request flow

1. Client sends long URL → backend calls Redis \`INCR\` to get a unique integer ID
2. ID is **encoded** to a base62 slug via Hashids (not hashed)
3. \`slug + long URL\` stored in Cassandra
4. On redirect: lookup by slug, increment click count in Redis, return 302

---

## Why base62 encoding instead of hashing?

- **Hashing** (MD5, SHA) is one-way: you cannot reverse a hash to recover the ID; collisions require collision handling
- **Encoding** is deterministic: \`ID ↔ slug\` is reversible and collision-free
- **Base62** (0–9, a–z, A–Z) keeps slugs short and URL-safe

---

## Security

- The client **cannot predict** the next link
- IDs are assigned **server-side** by Redis atomically
- Secret + custom alphabet in Hashids make slugs **non-sequential and non-guessable**`
      },
      {
        url: "https://r2.diogopacheco.com/public/link-created-url-shortner.png",
        alt: "lnk. — Shorten URL result",
        explanation: "**Copy-to-clipboard** short URL with **Open Graph** metadata for rich previews when shared on social platforms."
      }
    ]
  },
];

// Add this new function to get a project by ID
export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};
