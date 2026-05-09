"use client";
import React from "react";
import { socials } from "@/constants/socials";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-neutral-100 dark:border-zinc-900 mt-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="mx-2 text-neutral-300 dark:text-zinc-800">|</span>
          <span>Built with Next.js & Tailwind</span>
        </div>

        <div className="flex items-center space-x-6">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-accent transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
