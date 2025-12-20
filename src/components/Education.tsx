"use client";
import React from "react";
import { Heading } from "./Heading";
import { Education } from "@/types/education";
import { educations } from "@/constants/educations";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Educations = () => {
  return (
    <div>
      {/* Academic Achievements Summary */}
      <div className="mb-8">
        <Heading as="h2" className="font-black text-lg sm:text-xl md:text-xl lg:text-xl mb-4">
          Academic Achievements
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Graduate Studies</h3>
            <p className="text-sm text-blue-700">Final GPA: 3.94/4.00</p>
            <p className="text-xs text-blue-600">University of Virginia</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Undergraduate</h3>
            <p className="text-sm text-green-700">Final GPA: 3.71/4.00</p>
            <p className="text-xs text-green-600">University of Mumbai</p>
          </div>
        </div>
      </div>

      {/* Academic Philosophy */}
      <div className="mb-8">
        <Heading as="h2" className="font-black text-lg sm:text-xl md:text-xl lg:text-xl mb-4">
          Academic Philosophy
        </Heading>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-800 leading-relaxed">
            My academic journey is driven by a passion for artificial intelligence and machine learning.
            I believe in bridging the gap between theoretical knowledge and practical applications,
            focusing on cutting-edge technologies like Large Language Models, RAG systems, and modern AI frameworks.
            Through rigorous coursework and hands-on research, I strive to contribute to the advancement of AI technologies
            that can solve real-world challenges and make a meaningful impact on society.
          </p>
        </div>
      </div>

      {/* Detailed Education Information */}
      <div className="space-y-8">
        <Heading as="h2" className="font-black text-lg sm:text-xl md:text-xl lg:text-xl mb-6">
          Educational Journey
        </Heading>

        {educations.map((education: Education, idx: number) => (
          <motion.div
            key={education.href}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Header Section */}
            <div className="mb-4">
              <div className="flex-1">
                <Heading
                  as="h3"
                  className="font-black text-lg sm:text-xl md:text-xl lg:text-xl text-gray-900 mb-2"
                >
                  {education.title}
                </Heading>
                <Paragraph className="text-sm sm:text-base text-gray-600 mb-3">
                  {education.description}
                </Paragraph>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-start gap-2 mt-2">
                {education.stack?.map((item: string, stackIndex: number) => (
                  <span
                    key={stackIndex}
                    className="bg-blue-100 text-blue-800 px-2 py-1 sm:px-3 rounded-full font-medium text-xs text-center w-fit"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Content */}
            <div className="mt-6">
              {education.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
