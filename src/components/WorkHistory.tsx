"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled, IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";

const typeStyles: Record<string, string> = {
  Founding: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30",
  "Full-time": "bg-accent/10 text-accent border-accent/30",
  Research: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/30",
  Internship: "bg-orange-500/10 text-orange-600 dark:text-orange-300 border-orange-500/30",
};

export const WorkHistory = () => {
  return (
    <div className="relative mt-12 space-y-10 before:absolute before:left-5 md:before:left-[8.5rem] before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-neutral-200 dark:before:via-zinc-800 before:to-transparent">
      {timeline.map((item, index) => (
        <motion.div
          key={`timeline-${index}`}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative flex items-start gap-4 md:gap-0"
        >
          {/* Date column (desktop) */}
          <div className="hidden md:flex flex-col items-end w-32 pr-8 pt-2 shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              {item.date}
            </span>
            {item.location && (
              <span className="mt-1 text-[10px] text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
                <IconMapPin className="h-3 w-3" />
                {item.location}
              </span>
            )}
          </div>

          {/* Timeline dot */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-900 bg-white dark:bg-zinc-900 shadow-md shrink-0 md:-translate-x-1/2 z-10">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-40" />
          </div>

          {/* Content card */}
          <div className="flex-1 md:ml-8 p-6 md:p-7 rounded-3xl glass-card">
            {/* Mobile date */}
            <div className="md:hidden mb-3 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                {item.date}
              </span>
              {item.type && (
                <span
                  className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${typeStyles[item.type] || "bg-neutral-100 text-neutral-600 border-neutral-200"}`}
                >
                  {item.type}
                </span>
              )}
            </div>

            {/* Header row */}
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <Heading
                  as="h4"
                  className="text-lg md:text-xl font-black text-neutral-900 dark:text-white leading-tight"
                >
                  {item.title}
                </Heading>
                {item.type && (
                  <span
                    className={`hidden md:inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${typeStyles[item.type] || "bg-neutral-100 text-neutral-600 border-neutral-200"}`}
                  >
                    {item.type}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold text-accent">{item.company}</span>
                {item.location && (
                  <span className="md:hidden text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                    <IconMapPin className="h-3 w-3" />
                    {item.location}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {item.description && (
              <Paragraph className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-5">
                {item.description}
              </Paragraph>
            )}

            {/* Responsibilities */}
            <ul className="space-y-2.5 mb-5">
              {item.responsibilities.map((responsibility, rIdx) => (
                <li
                  key={rIdx}
                  className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
                >
                  <IconCircleCheckFilled className="h-4 w-4 mt-0.5 text-accent/50 shrink-0" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            {/* Stack chips */}
            {item.stack && item.stack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-zinc-800">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[10px] font-semibold rounded-md bg-neutral-100/80 dark:bg-zinc-900/60 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-zinc-800/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
