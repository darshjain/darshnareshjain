"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col space-y-16"
      >
        {/* Hero Section */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/images/professional_photo.jpeg"
              alt="Darsh Naresh Jain"
              height="120"
              width="120"
              className="relative rounded-full ring-4 ring-white dark:ring-zinc-900 object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          <div className="flex-1 text-center sm:text-left">
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
                  Open to Full-time Roles
                </span>
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full">
                  Founding Engineer
                </span>
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                  Patent Holder
                </span>
              </div>
              <Heading className="text-4xl md:text-6xl font-black mb-4">
                I&apos;m Darsh Naresh Jain
              </Heading>
              <Paragraph className="max-w-2xl text-lg md:text-xl font-medium !text-neutral-900 dark:!text-white mb-6">
                Founding Software Engineer building <Highlight className="bg-accent/10 !text-accent">AI products</Highlight> and <Highlight className="bg-accent/10 !text-accent">distributed systems</Highlight> from zero-to-one.
              </Paragraph>
              <Paragraph className="max-w-2xl">
                I&apos;ve been the <Highlight>first engineer on the ground</Highlight> at an early-stage startup, shipped <Highlight>LLM agents and RAG systems</Highlight> in production, and architected fault-tolerant pipelines processing <Highlight>10TB+</Highlight> of data. I lead with code, ship to production, and add measurable value end-to-end.
              </Paragraph>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center space-x-4 mb-8">
            <Heading as="h2" className="text-2xl font-bold">Projects</Heading>
            <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 dark:from-zinc-800 to-transparent"></div>
          </div>
          <Products />
        </motion.section>

        {/* Tech Stack */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center space-x-4 mb-8">
            <Heading as="h2" className="text-2xl font-bold">Tech Stack</Heading>
            <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 dark:from-zinc-800 to-transparent"></div>
          </div>
          <TechStack />
        </motion.section>
      </motion.div>
    </Container>
  );
}
