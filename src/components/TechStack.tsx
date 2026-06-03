"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type FeaturedItem = { title: string; src: string };

type Category = {
  name: string;
  items: string[];
};

const featured: FeaturedItem[] = [
  { title: "Python", src: "/images/logos/python.png" },
  { title: "Next.js", src: "/images/logos/next.png" },
  { title: "Node.js", src: "/images/logos/node.png" },
  { title: "MongoDB", src: "/images/logos/mongodb.png" },
  { title: "AWS", src: "/images/logos/aws.webp" },
  { title: "Tailwind", src: "/images/logos/tailwind.png" },
  { title: "Vercel", src: "/images/logos/vercel.png" },
  { title: "Solidity", src: "/images/logos/solidity.png" },
  { title: "Framer Motion", src: "/images/logos/framer.webp" },
  { title: "Figma", src: "/images/logos/figma.png" },
  { title: "Sass", src: "/images/logos/sass.png" },
  { title: "Truffle", src: "/images/logos/truffle.png" },
];

const categories: Category[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C / C++", "SQL", "NoSQL", "GraphQL", "Bash", "PHP", "SASS"],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      "FastAPI",
      "Flask",
      "Express.js",
      "Next.js",
      "React",
      "TailwindCSS",
      "Pandas",
      "Polars",
      "GeoPandas",
      "PyTorch",
      "Web3",
      "PyTest",
      "Mocha",
      "CodeIgniter",
      "Electron",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "Kubernetes (GKE)",
      "Docker",
      "Cloudflare",
      "Vercel",
      "CI/CD",
      "Apache Airflow",
      "SLURM / HPC",
      "Vault",
      "WAF",
      "Auth0",
    ],
  },
  {
    name: "AI / Data",
    items: [
      "OpenAI API",
      "Gemini API",
      "RAG",
      "MCP",
      "LLM Fine-tuning",
      "PEFT / QLoRA",
      "vLLM",
      "Vector DBs (pgVector)",
      "Agentic AI",
      "Databricks",
      "Elasticsearch",
      "Neo4j",
      "Redis",
      "PostgreSQL",
      "Kafka",
    ],
  },
  {
    name: "Tooling",
    items: ["Git / GitHub", "JIRA", "Postman", "Selenium", "Klee", "Infer", "Claude Code", "Slack"],
  },
];

export const TechStack = () => {
  return (
    <div className="space-y-12">
      {/* Featured logos — instantly readable hero strip */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
        {featured.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center justify-center p-4 rounded-2xl glass-card group transition-all duration-300"
          >
            <div className="relative w-9 h-9 mb-2 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest text-center group-hover:text-accent transition-colors">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Categorized chips — full breadth from resume, organized for scan-ability */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 rounded-3xl glass-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {cat.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100/80 dark:bg-zinc-900/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-zinc-800/60 hover:border-accent/40 hover:text-accent transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
