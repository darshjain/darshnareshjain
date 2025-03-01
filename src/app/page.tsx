import { Blogs } from "@/components/Blogs";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { news } from "@/constants/news";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Darsh</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a software engineer with{" "}
        <Highlight>1 year of experience</Highlight> building scalable web and desktop apps
        that are performance optimized and user friendly.
      </Paragraph>

      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        News
      </Heading>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {news.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <item.icon size={18} className="text-primary flex-shrink-0" />
            <a href={item.href} className="hover:underline">
              <span className="text-sm font-medium text-primary">{item.date}</span> – {item.title}
            </a>
          </li>
        ))}
      </ul>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
