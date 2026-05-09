import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Darsh Naresh Jain",
  description:
    "Work experience and engineering history of Darsh Naresh Jain — Founding Software Engineer building AI products and distributed systems.",
};

const stats = [
  { value: "6+", label: "Roles shipped" },
  { value: "10TB+", label: "Data engineered" },
  { value: "70%", label: "Avg perf gains" },
  { value: "1", label: "Granted patent" },
];

export default function ResumePage() {
  return (
    <Container>
      <section className="space-y-6">
        <span className="inline-block text-3xl">💼</span>
        <Heading className="font-black text-4xl md:text-5xl">Experience</Heading>
        <Paragraph className="max-w-2xl text-base md:text-lg leading-relaxed">
          A timeline of the engineering teams I&apos;ve been part of — from first-engineer-on-the-ground at an early-stage startup to research labs and enterprise teams. The thread running through all of it: own a piece end-to-end, ship it to production, and leave the system measurably better.
        </Paragraph>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 md:p-5 rounded-2xl glass-card text-center"
            >
              <div className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center space-x-4 mb-2">
          <Heading as="h2" className="text-xl md:text-2xl font-bold">
            Work History
          </Heading>
          <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 dark:from-zinc-800 to-transparent" />
        </div>
        <Paragraph className="text-sm text-neutral-500 dark:text-neutral-400">
          Most recent first.
        </Paragraph>
        <WorkHistory />
      </section>
    </Container>
  );
}
