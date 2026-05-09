import type { Education } from "@/types/education";

export const educations: Education[] = [
  {
    href: "https://www.virginia.edu",
    school: "University of Virginia",
    degree: "Master of Science in Computer Science",
    location: "Charlottesville, VA, United States",
    period: "Aug 2024 — Dec 2025",
    gpa: "3.94 / 4.00",
    badge: "Graduate",
    summary:
      "Specialized in artificial intelligence, machine learning, and large language model applications — pairing rigorous coursework with hands-on research building production-grade AI systems.",
    coursework: [
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Distributed Systems",
      "Advanced Algorithms",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
    ],
    skills: [
      "Large Language Models",
      "LangChain",
      "OpenAI APIs",
      "HuggingFace Transformers",
      "PyTorch",
      "TensorFlow",
      "Vector Databases",
      "Prompt Engineering",
      "RAG Systems",
      "Fine-tuning (PEFT / QLoRA)",
      "MLOps",
      "Cloud AI Services",
    ],
    achievements: [
      "Graduated with a 3.94 / 4.00 GPA across rigorous AI coursework.",
      "Designed an LLM-vs-LLM fault-localization framework using Gemma-3 12B with PEFT and QLoRA fine-tuning.",
      "Built RAG systems and prompt-engineering pipelines used in research projects.",
      "Hands-on experience with vector databases and modern model fine-tuning workflows.",
    ],
    focus:
      "Practical AI systems — RAG, fine-tuning, and agentic LLM architectures applied to real-world data problems.",
  },
  {
    href: "https://www.umumbai.ac.in",
    school: "University of Mumbai",
    degree: "Bachelor of Engineering in Computer Engineering",
    location: "Mumbai, India",
    period: "Aug 2019 — May 2023",
    gpa: "3.71 / 4.00",
    badge: "Undergraduate",
    summary:
      "Built foundations across systems, algorithms, and software engineering — graduating with First Class with Distinction and a final-year project in AI/ML.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Computer Architecture",
      "Web Technologies",
      "Machine Learning",
    ],
    skills: [
      "Python",
      "Java",
      "Web Development",
      "Database Design",
      "System Design",
      "Project Management",
    ],
    achievements: [
      "Graduated with First Class with Distinction.",
      "Maintained consistent academic performance across the four-year program.",
      "Completed a comprehensive AI/ML final-year project.",
      "Active in technical competitions and hackathons.",
    ],
    focus:
      "Core computer-engineering principles applied to applied ML and full-stack software.",
  },
];
