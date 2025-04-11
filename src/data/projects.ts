import { StaticImageData } from "next/image";

// images
import flask_ai_chat from "../../public/flask-ai-chat.jpg";
import merit_jolera from "../../public/merit-jolera.jpg";

type Project = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Flask AI Chat",
    description:
      "A simple AI chat application built with Flask and deployed with Docker.",
    image: flask_ai_chat,
    tags: ["Flask", "AI", "Docker", "Python"],
    link: "https://github.com/diogopacheco/flask-ai-chat",
  },
  {
    id: "2",
    title: "Merit Jolera",
    description:
      "Website for a fictional company, built with Next.js and Tailwind CSS.",
    image: merit_jolera,
    tags: ["Next.js", "Tailwind CSS", "React", "Typescript"],
    link: "https://github.com/diogopacheco/merit-jolera",
  },
];

// Add this new function to get a project by ID
export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};
