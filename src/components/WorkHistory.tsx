"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <div className="flex flex-col space-y-20 mt-10">
      {timeline.map((item, index) => (
        <div
          className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 items-start"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-40 flex-shrink-0">{item.date}</Paragraph>
          <div className="flex-1">
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            <div className="flex flex-col space-y-2">
              {item.responsibilities.map((responsibility) => (
                <Step key={responsibility}>{responsibility}</Step>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start space-x-2">
      <IconCircleCheckFilled className="h-4 w-4 mt-1 text-neutral-300 flex-shrink-0" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">{children}</Paragraph>
    </div>
  );
};
