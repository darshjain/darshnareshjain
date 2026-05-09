"use client";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { educations } from "@/constants/educations";
import type { Education } from "@/types/education";
import { motion } from "framer-motion";
import {
  IconSchool,
  IconMapPin,
  IconCalendar,
  IconAward,
  IconCircleCheckFilled,
  IconBooks,
  IconBulb,
  IconTrophy,
  IconCompass,
} from "@tabler/icons-react";

const accentByBadge: Record<string, { ring: string; text: string; bg: string }> = {
  Graduate: {
    ring: "border-accent/60",
    text: "text-accent",
    bg: "bg-accent/10",
  },
  Undergraduate: {
    ring: "border-emerald-500/60",
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
  },
};

export const Educations = () => {
  return (
    <div className="space-y-14">
      {/* GPA Summary Cards */}
      <section className="space-y-5">
        <div className="flex items-center space-x-4">
          <Heading as="h2" className="text-xl md:text-2xl font-bold">
            Academic Snapshot
          </Heading>
          <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 dark:from-zinc-800 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {educations.map((edu, idx) => {
            const accent = accentByBadge[edu.badge || ""] || accentByBadge.Graduate;
            return (
              <motion.div
                key={edu.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`relative overflow-hidden p-6 rounded-3xl glass-card border-l-4 ${accent.ring}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] ${accent.text} ${accent.bg} px-2.5 py-1 rounded-full`}
                  >
                    {edu.badge}
                  </span>
                  <IconAward className={`h-5 w-5 ${accent.text} opacity-60`} />
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black text-neutral-900 dark:text-white">
                    {edu.gpa.split("/")[0].trim()}
                  </span>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    / {edu.gpa.split("/")[1]?.trim() || "4.00"} GPA
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  {edu.school}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {edu.degree}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Detailed cards */}
      <section className="space-y-5">
        <div className="flex items-center space-x-4">
          <Heading as="h2" className="text-xl md:text-2xl font-bold">
            Programs
          </Heading>
          <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 dark:from-zinc-800 to-transparent" />
        </div>

        <div className="space-y-8">
          {educations.map((edu, idx) => (
            <EducationCard key={edu.href} edu={edu} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

const EducationCard = ({ edu, idx }: { edu: Education; idx: number }) => {
  const accent = accentByBadge[edu.badge || ""] || accentByBadge.Graduate;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="rounded-3xl glass-card overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 md:p-7 border-b border-neutral-100 dark:border-zinc-800/60">
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-4">
            <div
              className={`h-12 w-12 rounded-2xl flex items-center justify-center ${accent.bg} ${accent.text} shrink-0`}
            >
              <IconSchool className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <Heading
                as="h3"
                className="text-lg md:text-xl font-black text-neutral-900 dark:text-white leading-tight"
              >
                {edu.degree}
              </Heading>
              <p className={`mt-1 text-sm font-semibold ${accent.text}`}>
                {edu.school}
              </p>
            </div>
            {edu.badge && (
              <span
                className={`hidden sm:inline-block text-[10px] font-bold uppercase tracking-[0.2em] ${accent.text} ${accent.bg} px-2.5 py-1 rounded-full whitespace-nowrap`}
              >
                {edu.badge}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <IconCalendar className="h-3.5 w-3.5" />
              {edu.period}
            </span>
            <span className="flex items-center gap-1.5">
              <IconMapPin className="h-3.5 w-3.5" />
              {edu.location}
            </span>
            <span className="flex items-center gap-1.5">
              <IconAward className="h-3.5 w-3.5" />
              GPA {edu.gpa}
            </span>
          </div>
        </div>

        <Paragraph className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {edu.summary}
        </Paragraph>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-100 dark:divide-zinc-800/60">
        <Section
          icon={<IconBooks className="h-4 w-4" />}
          title="Coursework"
          accentText={accent.text}
        >
          <div className="flex flex-wrap gap-1.5">
            {edu.coursework.map((c) => (
              <span
                key={c}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-neutral-100/80 dark:bg-zinc-900/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-zinc-800/60"
              >
                {c}
              </span>
            ))}
          </div>
        </Section>

        <Section
          icon={<IconBulb className="h-4 w-4" />}
          title="Skills Developed"
          accentText={accent.text}
        >
          <div className="flex flex-wrap gap-1.5">
            {edu.skills.map((s) => (
              <span
                key={s}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md ${accent.bg} ${accent.text} border border-current/20`}
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section
          icon={<IconTrophy className="h-4 w-4" />}
          title="Achievements"
          accentText={accent.text}
        >
          <ul className="space-y-2">
            {edu.achievements.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300"
              >
                <IconCircleCheckFilled
                  className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${accent.text} opacity-70`}
                />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>

        {edu.focus && (
          <Section
            icon={<IconCompass className="h-4 w-4" />}
            title="Focus"
            accentText={accent.text}
          >
            <Paragraph className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
              {edu.focus}
            </Paragraph>
          </Section>
        )}
      </div>
    </motion.article>
  );
};

const Section = ({
  icon,
  title,
  accentText,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  accentText: string;
  children: React.ReactNode;
}) => (
  <div className="p-6">
    <div className={`flex items-center gap-2 mb-3 ${accentText}`}>
      {icon}
      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em]">{title}</h4>
    </div>
    {children}
  </div>
);
