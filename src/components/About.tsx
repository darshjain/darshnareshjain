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
          I am Darsh Naresh Jain, a passionate AI/ML researcher and graduate student pursuing a Master of Science in Computer Science at the University of Virginia. With a strong foundation in artificial intelligence, machine learning, and Large Language Models, I specialize in developing cutting-edge AI solutions that bridge the gap between research and real-world applications.
        </Paragraph>
        <Paragraph className="mt-4">
          Currently maintaining a GPA of 3.92/4.00, I am deeply immersed in advanced coursework including Machine Learning, Computer Vision, Natural Language Processing, and Distributed Systems. My research focuses on Large Language Models, RAG (Retrieval-Augmented Generation) systems, and prompt engineering techniques. I work extensively with modern AI frameworks including LangChain, OpenAI APIs, Hugging Face Transformers, PyTorch, and TensorFlow to build intelligent applications.
        </Paragraph>
        <Paragraph className="mt-4">
          My professional experience includes developing cryptocurrency forensics software at Lab Systems (I) Pvt. Ltd., where I utilized Python, C++, Next.js, and ElectronJS to create scalable solutions. I have expertise in database technologies like MongoDB, LevelDB, and ElasticSearch, and have led teams while optimizing workflows with Git and modern development practices.
        </Paragraph>
        <Paragraph className="mt-4">
          I am passionate about solving complex problems through AI innovation and creating systems that make a meaningful impact. My academic projects span blockchain technology, AI-powered applications, and machine learning solutions. Through this platform, I share my journey in AI research, technical insights, and collaborative projects that push the boundaries of what's possible with artificial intelligence.
        </Paragraph>
      </div>
    </div>
  );
}
