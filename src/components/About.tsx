"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/about/1.jpeg",
    "/about/2.jpeg",
    "/about/3.jpeg",
    "/about/4.jpeg",
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10">
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 my-8 sm:my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="overflow-hidden"
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt={`About image ${index + 1}`}
              className="rounded-md object-cover transform shadow-lg block w-full h-32 sm:h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto">
        <Paragraph className="mt-4">
          I am Darsh Naresh Jain, a Full Stack Software Developer and AI/ML Engineer who recently graduated with a Master of Science in Computer Science from the University of Virginia with a GPA of 3.94/4.00. I specialize in building scalable data pipelines, AI-powered applications, and full-stack solutions that solve real-world challenges.
        </Paragraph>
        <Paragraph className="mt-4">
          Currently, I work as a Data Engineering Research Assistant at UVA Darden School of Business, where I implement automated scalable data pipelines processing 10TB+ of raw data and integrate Large Language Models using the OpenAI API to streamline data processing and enable automated insights. Previously, I contributed to mission-critical applications at Rhombus Power Inc., developing data solutions for satellite prediction systems and full-stack development across multiple production deployments.
        </Paragraph>
        <Paragraph className="mt-4">
          As a Founding Engineer at Lab Systems (I) Pvt. Ltd., I architected and implemented scalable cryptocurrency forensics and disk forensics web applications, built high-performance API services in C++ and Python, and developed AI-driven forensic agents to automate evidence analysis and investigation workflows. I led a product development team and streamlined deployment through DevOps practices, optimizing cloud infrastructure on AWS and Linux servers.
        </Paragraph>
        <Paragraph className="mt-4">
          My technical expertise spans Python, JavaScript, C/C++, SQL/NoSQL, and modern frameworks including ReactJS/NextJS, Flask, and Docker. I have hands-on experience with LLM fine-tuning, Retrieval Augmented Generation (RAG), AI Agents, and distributed systems. I&apos;m passionate about bridging cutting-edge AI research with production-ready applications and have been granted a German patent for a Blockchain-based pharmaceutical supply chain management system.
        </Paragraph>
      </div>
    </div>
  );
}
