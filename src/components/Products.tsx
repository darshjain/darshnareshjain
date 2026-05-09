"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {products.map((product: Product, idx: number) => (
        <motion.div
          key={product.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <Link
            href={product.slug ? `/projects/${product.slug}` : product.href}
            className="flex flex-col h-full glass-card rounded-3xl overflow-hidden"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium">View Project →</span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <Heading
                as="h4"
                className="text-lg md:text-xl mb-2 group-hover:text-accent transition-colors"
              >
                {product.title}
              </Heading>
              
              <Paragraph className="text-sm line-clamp-2 mb-4">
                {product.description}
              </Paragraph>
              
              <div className="mt-auto flex flex-wrap gap-2">
                {product.stack?.slice(0, 3).map((stack: string) => (
                  <span
                    key={stack}
                    className="text-[10px] uppercase tracking-wider font-bold bg-neutral-100 dark:bg-zinc-800 px-2 py-1 rounded-md text-secondary"
                  >
                    {stack}
                  </span>
                ))}
                {product.stack && product.stack.length > 3 && (
                  <span className="text-[10px] font-bold text-secondary self-center">
                    +{product.stack.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
