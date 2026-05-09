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
    <div className="space-y-12">
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 my-8">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 2 : -2 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden glass shadow-xl"
          >
            <Image
              src={image}
              fill
              alt={`About image ${index + 1}`}
              className="object-cover transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <Paragraph className="text-lg leading-relaxed">
          I&apos;m <span className="font-bold text-neutral-900 dark:text-white">Darsh Naresh Jain</span> — a <span className="font-semibold text-accent">founding software engineer</span> who builds AI products and distributed systems from zero. I just finished my{" "}
          <span className="text-accent underline decoration-accent/30 underline-offset-4">M.S. in Computer Science</span>{" "}
          at the University of Virginia (GPA 3.94/4.00), and I&apos;ve spent the last few years shipping production code at startups, research labs, and enterprise teams.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-3xl glass-card">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Now</h3>
            <Paragraph className="text-sm leading-relaxed">
              Shipping LLM applications at <span className="font-semibold">Cast Insights</span> — Python microservices on GKE, RAG pipelines, and tool-calling agents that extract structured insight from unstructured content.
            </Paragraph>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Research</h3>
            <Paragraph className="text-sm leading-relaxed">
              Architecting fault-tolerant ingestion pipelines at <span className="font-semibold">UVA Darden</span> — processing <span className="font-semibold">10TB+</span> of raw data and improving throughput by <span className="font-semibold">~70%</span>.
            </Paragraph>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Founding Engineer</h3>
            <Paragraph className="text-sm leading-relaxed">
              First engineer at <span className="font-semibold">Lab Systems</span> — owned the platform from blank slate, drove the technology roadmap, led product development, and shipped cryptocurrency &amp; disk forensics tools to clients.
            </Paragraph>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Patent</h3>
            <Paragraph className="text-sm leading-relaxed">
              Granted German patent for a blockchain-based pharma logistics system — improved supply-chain traceability by <span className="font-semibold">~80%</span> in pilot deployments.
            </Paragraph>
          </div>
        </div>

        <Paragraph>
          I work across the stack: Python, TypeScript, C/C++ on the build side; FastAPI, Next.js, and Flask on the application side; Kubernetes, Docker, and AWS/GCP on the infra side. Day-to-day I&apos;m fluent in LLM fine-tuning, RAG, agentic AI, and distributed data pipelines.
        </Paragraph>

        <Paragraph>
          Whether I&apos;m the first hire or the tenth, my pattern is the same — own a piece end-to-end, ship it, and make the surrounding system measurably better. If you&apos;re building something hard and looking for an engineer who actually adds value end-to-end, let&apos;s talk.
        </Paragraph>
      </motion.div>
    </div>
  );
}
