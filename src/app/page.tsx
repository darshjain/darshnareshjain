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
        I&apos;m a Full Stack Software Engineer passionate about{" "}
        <Highlight>building products</Highlight> and web apps that have a real impact in lives.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
        With over <Highlight>2 years of Founder & Software Engineer experience</Highlight>, I build scalable web and desktop applications
        that are high-performing, user-friendly, and optimized for real-world usage.
      </Paragraph>

      <Heading as="h2" className="font-black text-base sm:text-lg md:text-lg lg:text-lg mt-16 sm:mt-20 mb-4">
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

      <Heading as="h2" className="font-black text-base sm:text-lg md:text-lg lg:text-lg mt-16 sm:mt-20 mb-4">
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}

