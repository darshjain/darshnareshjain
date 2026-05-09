"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { cn } from "@/lib/utils";
import { IconExternalLink, IconChevronLeft } from "@tabler/icons-react";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-12 pb-20">
      {/* Back button */}
      <Link 
        href="/projects" 
        className="inline-flex items-center space-x-2 text-sm font-medium text-secondary hover:text-primary transition-colors mb-4"
      >
        <IconChevronLeft className="h-4 w-4" />
        <span>Back to Projects</span>
      </Link>

      {/* Hero / Main Image */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-video rounded-[2rem] overflow-hidden glass shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={typeof activeImage === 'string' ? activeImage : (activeImage as any).src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={activeImage}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Thumbnails */}
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {product.images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(image)}
              className={cn(
                "relative flex-shrink-0 w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all",
                activeImage === image ? "border-accent scale-105" : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <Image src={image} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <Heading className="text-3xl md:text-4xl font-extrabold tracking-tight">{product.title}</Heading>
            <div className="flex flex-wrap gap-2">
              {product.stack?.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-zinc-800 rounded-full text-xs font-bold text-secondary text-accent/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <Paragraph className="text-lg leading-relaxed mb-6 italic">
              {product.description}
            </Paragraph>
            <div className="text-neutral-600 dark:text-neutral-400">
               {product.content}
            </div>
          </div>
        </div>

        <div className="space-y-8">
           {/* Sidebar: Call to Action */}
           <div className="p-8 rounded-3xl glass-card space-y-6">
              <h3 className="text-lg font-bold">Project Details</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary">Type</span>
                  <span className="font-medium">Software Engineering</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Role</span>
                  <span className="font-medium">Lead Developer</span>
                </div>
              </div>
              {product.architecture ? (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center space-x-2 w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Architecture</span>
                  <IconExternalLink className="h-4 w-4" />
                </button>
              ) : (
                <a
                  href={product.href !== "#" && !product.href.includes("aceternity") && !product.href.includes("algochurn") && !product.href.includes("tailwindmasterkit") && !product.href.includes("gomoonbeam") ? product.href : "#"}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "flex items-center justify-center space-x-2 w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]",
                    (product.href === "#" || product.href.includes("aceternity") || product.href.includes("algochurn") || product.href.includes("tailwindmasterkit") || product.href.includes("gomoonbeam")) ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
                  )}
                >
                  <span>Live Demo</span>
                  <IconExternalLink className="h-4 w-4" />
                </a>
              )}
           </div>

           {/* Architecture Diagram Trigger/Callout */}
           <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-zinc-900/50 border border-neutral-100 dark:border-zinc-800">
             <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Technical Insight</h4>
             <p className="text-xs text-secondary leading-relaxed">
               This project utilizes a high-performance distributed architecture and specialized AI integration.
             </p>
           </div>
        </div>
      </div>

      {/* Modal for Architecture Diagram */}
      <AnimatePresence>
        {isModalOpen && product.architecture && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white dark:bg-zinc-950 rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-zinc-800 flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-zinc-900">
                <div>
                  <Heading as="h2" className="text-2xl font-bold">System Architecture</Heading>
                  <Paragraph className="text-sm mt-1">High-level overview of {product.title}</Paragraph>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
              <div className="p-4 sm:p-6 overflow-auto w-full flex-1 bg-neutral-50/50 dark:bg-zinc-900/20">
                <ArchitectureDiagram
                  cols={product.architecture.cols}
                  rows={product.architecture.rows}
                  nodes={product.architecture.nodes}
                  connections={product.architecture.connections}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
