import sidefolioMyFrt from "public/images/sidefolio-myFrt.svg";
import sidefolioMyFrt2 from "public/images/sidefolio-myFrt2.png";
import sidefolioCS from "public/images/sidefolio-cs.jpeg";
import sidefolioCS2 from "public/images/sidefolio-cs2.jpeg";
import sidefolioCS3 from "public/images/sidefolio-cs3.jpeg";
import sidefolioVRI from "public/images/sidefolio-vri.jpeg";
import sidefolioVRI2 from "public/images/sidefolio-vri2.jpeg";
import sidefolioES from "public/images/sidefolio-ES.jpeg";
import sidefolioES2 from "public/images/sidefolio-ES2.jpeg";
import sidefolioMedilog from "public/images/sidefolio-medilog.jpeg";
import sidefolioMedilog2 from "public/images/sidefolio-medilog2.jpeg";
import sidefolioFMD from "public/images/sidefolio-FMD.png";
import sidefolioFMD2 from "public/images/sidefolio-FMD-2.png";

import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://aceternity.com",
    title: "MyFRT",
    description: "Disk Forensics Tool.",
    thumbnail: sidefolioMyFrt,
    images: [sidefolioMyFrt, sidefolioMyFrt2],
    stack: [
      "Python",
      "Electron",
      "NextJS",
      "MongoDB",
      "ElasticSearch",
      "Bash Scripting",
      "Vercel",
      "Cloudflare",
    ],
    slug: "MyFrt",
    //slug: "aceternity",
    content: (
      <div>
        <p>
          MyFRT is a state-of-the-art disk forensics application designed to
          streamline evidence extraction and optimize investigative workflows. I
          developed the tool using Electron, NextJS, and TailwindCSS, creating
          an intuitive and responsive user interface to ensure investigators
          could work efficiently. The backend, powered by MongoDB,
          ElasticSearch, and Python, supported high-speed processing of disk
          data, while Bash scripting automated critical forensic tasks for
          enhanced productivity.{" "}
        </p>
        <p>
          The development process included rigorous testing to ensure accuracy
          and reliability, along with seamless deployment via Vercel and
          Cloudflare for robust performance. By combining user-focused design
          with advanced technologies, MyFRT empowered investigators to extract
          evidence with precision and achieve efficient case resolutions,
          setting a new standard in digital forensics.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://aceternity.com",
    title: "Coinspector",
    description: "Blockchain Fraud Investigation Tool.",
    thumbnail: sidefolioCS,
    images: [sidefolioCS2, sidefolioCS3],
    stack: [
      "Python",
      "NextJS",
      "MongoDB",
      "TailwindCSS",
      "Vercel",
      "Cloudflare",
      "Bitcoin",
    ],
    slug: "CoinSpector",
    //slug: "aceternity",
    content: (
      <div>
        <p>
          Coinspector is a specialized tool for investigating fraudulent
          activities in cryptocurrency and blockchain networks, providing
          insights into transactions and patterns to identify potential fraud. I
          developed the platform using NextJS for a sleek and user-friendly
          interface, integrated with TailwindCSS for modern design elements. The
          backend leveraged MongoDB and Python to analyze blockchain data
          efficiently, while Vercel and Cloudflare ensured smooth and secure
          deployment.{" "}
        </p>
        <p>
          Throughout development, I implemented testing frameworks to validate
          the accuracy of data retrieval and analysis, ensuring investigators
          received trustworthy insights. Coinspector combines cutting-edge
          technology with meticulous design to deliver an indispensable solution
          for combating blockchain-related fraud, enhancing transparency and
          accountability in cryptocurrency transactions.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://aceternity.com",
    title: "Visual Room Interfaces",
    description:
      "Real-Time Environmental Visualizations with AI and Sensor Integration.",
    thumbnail: sidefolioVRI,
    images: [sidefolioVRI, sidefolioVRI2],
    stack: ["Python", "Stable Diffusion", "InfluxDb", "Sensors"],
    slug: "VRI",
    //slug: "aceternity",
    content: (
      <div>
        <p>
          The Visual Room Interfaces project revolved around creating real-time
          visual representations of environmental conditions using Stable
          Diffusion and sensor data. By integrating sensor readings, the system
          generated detailed and realistic visualizations that represented
          environmental metrics such as temperature, humidity, and air quality.
          This approach provided users with an intuitive and visual way to
          understand complex data, making decision-making faster and more
          effective. The use of InfluxDB as a time-series database enabled
          seamless handling of sensor data, ensuring high accuracy and real-time
          updates.{" "}
        </p>
        <p>
          In user studies, the system achieved a 90% success rate in aiding
          decision-making processes, showcasing its utility in real-world
          applications. The project also focused on streamlining the process of
          interpreting raw data by combining data-driven insights with
          user-friendly visualizations. This innovation not only improved
          efficiency but also demonstrated the potential of integrating AI
          models and real-time data for creating intelligent environments that
          are both interactive and impactful.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://algochurn.com",
    title: "EmoSync",
    description:
      "Emotion-Driven Adaptive UI for Enhanced E-Learning Experiences.",
    thumbnail: sidefolioES,
    images: [sidefolioES, sidefolioES2],
    stack: ["Python", "Machine Learning", "UI Design"],
    slug: "EmoSync",
    //slug: "algochurn",
    content: (
      <div>
        <p>
          EmoSync was an advanced e-learning platform designed to adapt its user
          interface dynamically based on the learner's emotions, detected
          through facial and speech analysis. The system used machine learning
          models to recognize emotional states and employed color therapy and
          psychological principles to modify the interface for enhancing the
          user’s mood and focus. This approach significantly improved the
          learning experience, making it more personalized and engaging. EmoSync
          focused on creating a balance between cognitive load and emotional
          well-being, ensuring learners could retain information more
          effectively.{" "}
        </p>
        <p>
          The platform demonstrated a 30% increase in user engagement, which
          correlated with improved cognitive performance among participants. By
          integrating cutting-edge emotion detection technology, EmoSync
          provided a novel approach to e-learning, addressing challenges such as
          disengagement and stress. This project highlighted the potential of
          leveraging AI-driven adaptive interfaces to improve user outcomes in
          educational and other interactive domains.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://gomoonbeam.com",
    title: "Medilog",
    description: "A Blockchain-Based Pharmaceutical Supply Chain System.",
    thumbnail: sidefolioMedilog,
    images: [sidefolioMedilog, sidefolioMedilog2],
    stack: ["Blockchain", "Nextjs", "Solidity"],
    slug: "Medilog",
    //slug: "moonbeam",
    content: (
      <div>
        <p>
          Medilog aimed to solve issues related to counterfeit drugs and lack of
          transparency in the pharmaceutical supply chain. The system was a
          full-stack web application that used blockchain technology for
          securely tracking prescription drugs. Built with NextJS, Solidity, and
          MongoDB, Medilog provided end-to-end traceability by allowing
          manufacturers, distributors, and consumers to verify the authenticity
          of medications. By leveraging blockchain’s immutability, the project
          ensured trust in the data, making it tamper-proof and accessible to
          all stakeholders.{" "}
        </p>
        <p>
          This solution addressed critical gaps in the pharmaceutical industry
          by increasing efficiency and safety. It provided real-time tracking of
          drugs from production to distribution, thereby enhancing transparency
          and reducing the risk of counterfeit products. The project
          demonstrated the power of integrating blockchain with modern web
          technologies to tackle real-world challenges and earned recognition
          through its patent in Germany, reflecting its innovative approach.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Face Mask Detection & Attendance System",
    description: "AI-Based Mask Compliance and Automated Attendance.",
    thumbnail: sidefolioFMD,
    images: [sidefolioFMD, sidefolioFMD2],
    stack: ["Python", "ML"],
    slug: "FMD",
    //slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          The Face Mask Detection & Attendance System was developed to automate
          attendance processes while ensuring compliance with mask mandates
          during the COVID-19 pandemic. By utilizing OpenCV and machine learning
          algorithms, the system accurately detected individuals wearing face
          masks and logged their attendance through a live video feed. This
          solution eliminated the need for manual checks, improving efficiency
          and ensuring safety in public and private spaces.{" "}
        </p>
        <p>
          The project served as a practical demonstration of applying computer
          vision to address immediate societal challenges. The automated
          attendance system not only reduced human intervention but also
          showcased the potential of AI in enhancing public health measures.
          This innovative system had a high accuracy rate and laid the
          groundwork for developing future AI-based applications for workplace
          safety and surveillance.
        </p>{" "}
      </div>
    ),
  },
];
