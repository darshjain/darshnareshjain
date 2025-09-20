import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src: "/images/logos/python.png",
      className: "h-10 w-16"
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
    },
    {
      title: "Node.js",
      src: "/images/logos/node.png",
      className: "h-10 w-12",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongodb.png",
      className: "h-10 w-24"
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
    },
    {
      title: "Tailwind CSS",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",
      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",
      className: "h-10 w-10",
    },
    {
      title: "Sass",
      src: "/images/logos/sass.png",
      className: "h-10 w-16",
    },
    {
      title: "Solidity",
      src: "/images/logos/solidity.png",
      className: "h-10 w-16",
    },
    {
      title: "Truffle",
      src: "/images/logos/truffle.png",
      className: "h-10 w-16",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-base sm:text-lg md:text-lg lg:text-lg mt-16 sm:mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap gap-4">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
