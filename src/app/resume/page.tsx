import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resume | Darsh Naresh Jain",
  description:
    "Professional experience and work history of Darsh Jain - AI/ML Engineer and Full Stack Developer with M.S. in Computer Science from University of Virginia (GPA: 3.94).",
};

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        Full Stack Software Developer and AI/ML Engineer with an <Highlight>M.S. in Computer Science from the University of Virginia (GPA: 3.94)</Highlight>.
        I specialize in building scalable data pipelines, AI-powered applications, and full-stack solutions that solve real-world challenges.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Currently working as a <Highlight>Data Engineering Research Assistant at UVA Darden School of Business</Highlight>, implementing automated scalable data pipelines
        processing 10TB+ of raw data and integrating Large Language Models using the OpenAI API. Previously contributed to mission-critical applications at
        Rhombus Power Inc. and served as a <Highlight>Founding Engineer at Lab Systems (I) Pvt. Ltd.</Highlight>, architecting cryptocurrency forensics and disk forensics solutions.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Technical expertise spans <Highlight>Python, JavaScript, C/C++, SQL/NoSQL</Highlight>, and modern frameworks including ReactJS/NextJS, Flask, and Docker.
        Hands-on experience with LLM fine-tuning, Retrieval Augmented Generation (RAG), AI Agents, and distributed systems. Granted a
        <Highlight>German patent</Highlight> for a Blockchain-based pharmaceutical supply chain management system.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
