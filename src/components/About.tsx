  "use client";
  import { Paragraph } from "@/components/Paragraph";
  import Image from "next/image";
  import { motion } from "framer-motion";

  export default function About() {
    const images = [
      "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ];

    return (
      <div className="px-4 md:px-10">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: -50, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="overflow-hidden"
            >
              <Image
                src={image}
                width={200}
                height={400}
                alt={`About image ${index + 1}`}
                className="rounded-md object-cover transform shadow-lg block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              />
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <Paragraph className="mt-4">
            I am Darsh Naresh Jain, a passionate software developer and graduate student pursuing a Master of Science in Computer Science at the University of Virginia. With a strong foundation in full-stack development and a deep interest in user experience, I strive to create innovative, scalable, and impactful software solutions.
          </Paragraph>
          <Paragraph className="mt-4">
            In my professional journey, I have contributed to the development of web and desktop applications as a Software Developer at Lab Systems (I) Pvt. Ltd. My work involved utilizing technologies like Python, C++, Next.js, and ElectronJS to design and implement cryptocurrency forensics software, optimizing performance and delivering exceptional user experiences. Additionally, I have expertise in database solutions using MongoDB, LevelDB, and ElasticSearch to create efficient and secure systems.
          </Paragraph>
          <Paragraph className="mt-4">
            I have also led teams, optimized workflows with Git, and ensured seamless collaboration through effective communication of design architectures. My academic projects, including a blockchain-based pharmaceutical supply chain system, reflect my commitment to solving real-world challenges with cutting-edge technology.
          </Paragraph>
          <Paragraph className="mt-4">
            I am driven by problem-solving, innovation, and a passion for learning. Through this platform, I look forward to sharing my skills, experiences, and collaborations on projects that make a meaningful impact.
          </Paragraph>
        </div>
      </div>
    );
  }
