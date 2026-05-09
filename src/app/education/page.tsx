import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Educations } from "@/components/Education";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Darsh Naresh Jain",
  description:
    "Academic background of Darsh Naresh Jain — M.S. in Computer Science from the University of Virginia (3.94 GPA) and B.E. in Computer Engineering from the University of Mumbai (3.71 GPA).",
};

export default function EducationPage() {
  return (
    <Container>
      <section className="space-y-6 mb-12">
        <span className="inline-block text-3xl">🎓</span>
        <Heading className="font-black text-4xl md:text-5xl">Education</Heading>
        <Paragraph className="max-w-2xl text-base md:text-lg leading-relaxed">
          From foundational computer engineering at the University of Mumbai to a focused master&apos;s in AI &amp; ML at the University of Virginia — the academic path that&apos;s shaped how I build software today.
        </Paragraph>
      </section>

      <Educations />
    </Container>
  );
}
