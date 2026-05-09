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
import sidefolioLLM from "public/images/sidefolio-LLM.png";

export const products = [
  {
    href: "https://virginia.edu",
    title: "LLM vs LLM: Fault Localization",
    description:
      "A self-evolving dual-LLM framework where one model injects faults and another learns to localize them, generating 5,000+ synthetic C++ programs to train a 12B-parameter debugger.",
    thumbnail: sidefolioLLM,
    images: [sidefolioLLM],
    stack: [
      "C++",
      "Python",
      "Gemma-3 12B",
      "PEFT",
      "QLoRA",
      "CUDA",
      "HuggingFace",
    ],
    slug: "LLM-Fault-Localization",
    architecture: {
      cols: 5,
      rows: 2,
      nodes: [
        { id: "repo_ingest", label: "Source Repo", sublabel: "Git Hooks", type: "entry", col: 0, row: 0 },
        { id: "task_queue", label: "Task Queue", sublabel: "Redis", type: "queue", col: 1, row: 0 },
        { id: "injector_cluster", label: "Bug Injector", sublabel: "Gemma-3 12B", type: "compute-cluster", col: 2, row: 0 },
        { id: "dataset_lake", label: "Data Lake", sublabel: "S3 Buggy Samples", type: "storage", col: 2, row: 1 },
        { id: "train_node", label: "Fine-tuning", sublabel: "PEFT + QLoRA", type: "training", col: 3, row: 0 },
        { id: "model_registry", label: "Model Registry", sublabel: "HuggingFace", type: "registry", col: 4, row: 0 },
      ],
      connections: [
        { from: "repo_ingest", to: "task_queue", label: "Trigger" },
        { from: "task_queue", to: "injector_cluster", label: "Dispatch" },
        { from: "injector_cluster", to: "dataset_lake", label: "Batch Write" },
        { from: "dataset_lake", to: "train_node", label: "Training Set" },
        { from: "train_node", to: "model_registry", label: "Push Weights" },
      ],
    },
    content: (
      <div>
        <p>
          As a graduate research project at the University of Virginia, I designed a novel framework where two
          large language models (LLMs) collaborate for automated fault localization. One LLM functions as a{" "}
          <b>fault injector</b>, generating synthetic buggy C++ programs, while the other acts as a{" "}
          <b>debugger</b>, fine-tuned to pinpoint bug locations. Inspired by generative adversarial setups,
          this iterative loop creates a self-improving debugging ecosystem.
        </p>
        <p>
          I built the prototype around <b>Gemma-3 12B</b>, generated <b>5,000+ buggy programs</b>, and
          fine-tuned a 12-billion-parameter debugger model using PEFT and QLoRA on CUDA-accelerated
          infrastructure. Preliminary results showed measurable improvements in localization accuracy and
          training loss reduction. The framework lays the groundwork for incorporating real bug benchmarks
          such as Defects4J and CodeNet, optimized inference pipelines, and reinforced LLM feedback loops.
        </p>
        <p>
          With adequate compute, this LLM-vs-LLM framework has the potential to significantly advance{" "}
          <b>automated debugging</b> and accelerate software development workflows.
        </p>
      </div>
    ),
  },
  {
    href: "https://aceternity.com",
    title: "MyFRT — Disk Forensics Platform",
    description:
      "Founding engineering work at Lab Systems: an Electron + Python disk forensics application that delivered 70% faster evidence processing through distributed C++ kernels and a unified investigator UI.",
    thumbnail: sidefolioMyFrt,
    images: [sidefolioMyFrt, sidefolioMyFrt2],
    stack: [
      "Python",
      "Electron",
      "NextJS",
      "C++",
      "MongoDB",
      "ElasticSearch",
      "Bash",
      "Cloudflare",
    ],
    slug: "MyFrt",
    architecture: {
      cols: 4,
      rows: 2,
      nodes: [
        { id: "ui", label: "Electron Client", sublabel: "NextJS UI", type: "frontend", col: 0, row: 0 },
        { id: "lb", label: "Edge LB", sublabel: "Cloudflare mTLS", type: "gateway", col: 1, row: 0 },
        { id: "worker_pool", label: "Forensics Workers", sublabel: "Auto-scaling Pool", type: "worker-pool", col: 2, row: 0 },
        { id: "redis_cache", label: "State Store", sublabel: "Redis Sessions", type: "cache", col: 2, row: 1 },
        { id: "mongo_cluster", label: "MongoDB", sublabel: "Sharded Cluster", type: "database", col: 3, row: 0 },
        { id: "es_cluster", label: "ElasticSearch", sublabel: "Search Head", type: "database", col: 3, row: 1 },
      ],
      connections: [
        { from: "ui", to: "lb", label: "gRPC / mTLS" },
        { from: "lb", to: "worker_pool", label: "Dispatch" },
        { from: "worker_pool", to: "redis_cache", label: "Session Sync" },
        { from: "worker_pool", to: "mongo_cluster", label: "Metadata" },
        { from: "worker_pool", to: "es_cluster", label: "Index Evidence" },
      ],
    },
    content: (
      <div>
        <p>
          As a founding engineer at <b>Lab Systems</b>, I architected MyFRT — a disk forensics platform built to
          streamline evidence extraction and case workflows for investigators. I owned the full stack: an
          Electron + NextJS desktop client, a Python and C++ kernel layer for high-throughput disk parsing, and
          a distributed worker pool that scaled with case load. Bash automation glued together evidence
          chain-of-custody steps that were previously manual.
        </p>
        <p>
          The system improved overall processing performance by <b>~70%</b> via distributed C++ kernels and
          parallelized indexing into ElasticSearch and MongoDB. Cloudflare and Vercel handled secure delivery,
          while rigorous testing and DevOps automation kept production stable across client deployments. MyFRT
          set a new internal standard for how the team shipped forensic tooling.
        </p>
      </div>
    ),
  },
  {
    href: "https://aceternity.com",
    title: "Coinspector — Blockchain Forensics",
    description:
      "Cryptocurrency forensics platform built at Lab Systems for tracing illicit on-chain activity. Distributed RPC ingestion, ML-based clustering heuristics, and a sleek investigator UI shipped to forensic clients.",
    thumbnail: sidefolioCS,
    images: [sidefolioCS2, sidefolioCS3],
    stack: [
      "Python",
      "NextJS",
      "Web3",
      "MongoDB",
      "Kafka",
      "TailwindCSS",
      "Cloudflare",
      "Bitcoin",
    ],
    slug: "CoinSpector",
    architecture: {
      cols: 5,
      rows: 2,
      nodes: [
        { id: "nodes", label: "BTC RPC Nodes", sublabel: "Distributed", type: "external-cluster", col: 0, row: 0 },
        { id: "kafka", label: "Apache Kafka", sublabel: "Stream Pipeline", type: "stream", col: 1, row: 0 },
        { id: "analyzer", label: "ML Analyzer", sublabel: "Heuristic μS", type: "backend-cluster", col: 2, row: 0 },
        { id: "db_write", label: "MongoDB", sublabel: "Replica Set", type: "database", col: 3, row: 0 },
        { id: "cdn", label: "Vercel Edge", sublabel: "API Cache", type: "network", col: 3, row: 1 },
        { id: "frontend", label: "React UI", sublabel: "Investigator", type: "frontend", col: 4, row: 0 },
      ],
      connections: [
        { from: "nodes", to: "kafka", label: "Tx Ingest" },
        { from: "kafka", to: "analyzer", label: "Pub / Sub" },
        { from: "analyzer", to: "db_write", label: "ACID Logs" },
        { from: "db_write", to: "cdn", label: "Cache Layer" },
        { from: "cdn", to: "frontend", label: "SSR / Hydrate" },
      ],
    },
    content: (
      <div>
        <p>
          Coinspector is a specialized investigator tool for cryptocurrency fraud — tracing transaction graphs,
          clustering wallets, and surfacing suspicious patterns on Bitcoin and EVM-compatible chains. I built
          the platform end-to-end at <b>Lab Systems</b>: a NextJS + TailwindCSS interface, a Python ML analyzer
          consuming a Kafka transaction stream, and MongoDB persistence served through a Vercel edge cache.
        </p>
        <p>
          Throughout development, I implemented testing harnesses to validate clustering accuracy and data
          provenance, ensuring investigators received trustworthy, reproducible insights. Coinspector pairs
          cutting-edge analytics with a clean operator experience and remains in active client use as part of
          the firm&apos;s forensics suite.
        </p>
      </div>
    ),
  },
  {
    href: "https://aceternity.com",
    title: "Visual Room Interfaces",
    description:
      "Real-time environmental visualizations driven by sensor data and Stable Diffusion. Achieved a 90% success rate aiding decision-making in user studies.",
    thumbnail: sidefolioVRI,
    images: [sidefolioVRI, sidefolioVRI2],
    stack: ["Python", "Stable Diffusion", "InfluxDB", "MQTT", "WebSockets", "Sensors"],
    slug: "VRI",
    architecture: {
      cols: 5,
      rows: 2,
      nodes: [
        { id: "edge", label: "IoT Edge", sublabel: "Sensor Array", type: "hardware", col: 0, row: 0 },
        { id: "hub", label: "IoT Hub", sublabel: "Azure / AWS", type: "gateway", col: 1, row: 0 },
        { id: "influx_cluster", label: "InfluxDB", sublabel: "Time-series", type: "database", col: 2, row: 0 },
        { id: "gpu_pool", label: "GPU Inference", sublabel: "Stable Diffusion", type: "compute-cluster", col: 2, row: 1 },
        { id: "ws_server", label: "WebSocket Server", sublabel: "Multi-tenant", type: "network", col: 3, row: 0 },
        { id: "display", label: "Live Dashboard", sublabel: "Realtime UI", type: "frontend", col: 4, row: 0 },
      ],
      connections: [
        { from: "edge", to: "hub", label: "MQTT" },
        { from: "hub", to: "influx_cluster", label: "Persist" },
        { from: "hub", to: "gpu_pool", label: "Inference" },
        { from: "influx_cluster", to: "ws_server", label: "Query" },
        { from: "gpu_pool", to: "ws_server", label: "Image Stream" },
        { from: "ws_server", to: "display", label: "Binary WS" },
      ],
    },
    content: (
      <div>
        <p>
          Visual Room Interfaces generates real-time visual representations of environmental conditions by
          fusing sensor data with Stable Diffusion. Sensor readings — temperature, humidity, air quality — are
          transformed into photorealistic scenes that make complex telemetry intuitive at a glance. InfluxDB
          handles time-series storage, while a GPU inference pool turns each reading into an image stream
          delivered over WebSockets.
        </p>
        <p>
          In user studies, the system achieved a <b>90% success rate</b> in aiding decision-making — a strong
          validation of pairing AI generation with live data for ambient awareness. The project demonstrates
          how interactive AI-driven environments can replace static dashboards for operational and educational
          contexts.
        </p>
      </div>
    ),
  },
  {
    href: "https://algochurn.com",
    title: "EmoSync",
    description:
      "Emotion-driven adaptive UI for e-learning that drove a 30% increase in user engagement by tailoring interface state to detected affect.",
    thumbnail: sidefolioES,
    images: [sidefolioES, sidefolioES2],
    stack: ["Python", "Machine Learning", "WebAssembly", "Redis", "UX Design"],
    slug: "EmoSync",
    architecture: {
      cols: 4,
      rows: 2,
      nodes: [
        { id: "client_camera", label: "Client WASM", sublabel: "Sentiment Inference", type: "frontend-compute", col: 0, row: 0 },
        { id: "api_gateway", label: "Kong Gateway", sublabel: "Auth & Route", type: "gateway", col: 1, row: 0 },
        { id: "session_service", label: "Adaptive Session", sublabel: "Stateful Service", type: "backend", col: 2, row: 0 },
        { id: "redis_pubsub", label: "Redis Pub/Sub", sublabel: "Realtime UI Bus", type: "cache", col: 2, row: 1 },
        { id: "learning_cms", label: "Content CMS", sublabel: "Adaptive Material", type: "database", col: 3, row: 0 },
      ],
      connections: [
        { from: "client_camera", to: "api_gateway", label: "Sentiment" },
        { from: "api_gateway", to: "session_service", label: "Auth / Route" },
        { from: "session_service", to: "redis_pubsub", label: "UI Broadcast" },
        { from: "redis_pubsub", to: "learning_cms", label: "Fetch Material" },
      ],
    },
    content: (
      <div>
        <p>
          EmoSync is an e-learning platform that adapts its interface in real time based on the learner&apos;s
          emotional state, detected from facial cues and speech. Machine-learning models infer affect; color
          theory and cognitive-load principles drive UI adjustments designed to keep learners focused without
          overwhelming them.
        </p>
        <p>
          The platform delivered a <b>30% increase in user engagement</b>, correlated with measurable
          improvements in retention. EmoSync demonstrates the potential of affective computing applied to
          education — addressing disengagement, stress, and information overload simultaneously through a
          single adaptive surface.
        </p>
      </div>
    ),
  },
  {
    href: "https://gomoonbeam.com",
    title: "Medilog — Patented Pharma Supply Chain",
    description:
      "Blockchain-based pharmaceutical supply chain platform for tamper-proof drug traceability. Improved traceability by 80% and reduced counterfeit instances in pilot deployments — granted German patent.",
    thumbnail: sidefolioMedilog,
    images: [sidefolioMedilog, sidefolioMedilog2],
    stack: ["Solidity", "NextJS", "Web3", "The Graph", "IPFS", "MongoDB"],
    slug: "Medilog",
    architecture: {
      cols: 5,
      rows: 2,
      nodes: [
        { id: "wallet", label: "Web3 Wallet", sublabel: "User Sign", type: "entry", col: 0, row: 0 },
        { id: "rpc_lb", label: "RPC Gateway", sublabel: "HA Endpoint", type: "gateway", col: 1, row: 0 },
        { id: "sc", label: "Smart Contracts", sublabel: "Solidity / Polygon", type: "blockchain-core", col: 2, row: 0 },
        { id: "subgraph", label: "The Graph", sublabel: "Subgraph Indexer", type: "indexer", col: 3, row: 0 },
        { id: "pinata", label: "IPFS Pinata", sublabel: "Asset Storage", type: "storage-cluster", col: 3, row: 1 },
        { id: "app", label: "NextJS App", sublabel: "Vercel Edge", type: "frontend", col: 4, row: 0 },
      ],
      connections: [
        { from: "wallet", to: "rpc_lb", label: "Sign Tx" },
        { from: "rpc_lb", to: "sc", label: "Submit" },
        { from: "sc", to: "subgraph", label: "Events" },
        { from: "sc", to: "pinata", label: "Asset Hashes" },
        { from: "subgraph", to: "app", label: "GraphQL" },
        { from: "pinata", to: "app", label: "Image URIs" },
      ],
    },
    content: (
      <div>
        <p>
          Medilog tackles counterfeit drugs and supply-chain opacity head-on. The system is a full-stack web
          application that uses blockchain for end-to-end prescription drug tracking — manufacturers,
          distributors, and consumers can verify authenticity at every hop. NextJS, Solidity, MongoDB, and an
          IPFS pinning layer power the user-facing flow, while The Graph provides indexed read access for the
          frontend.
        </p>
        <p>
          The system improved traceability by <b>~80%</b> and reduced instances of counterfeit drugs in pilot
          deployments. The project is recognized through a granted <b>German patent (No. 20 2023 102 823.3)</b>
          {" "}for its blockchain-based medical logistics design — a tangible mark of impact on real-world
          pharmaceutical safety.
        </p>
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Face Mask Detection & Attendance",
    description:
      "AI-driven mask compliance and automated attendance system using YOLO-based detection on distributed camera streams.",
    thumbnail: sidefolioFMD,
    images: [sidefolioFMD, sidefolioFMD2],
    stack: ["Python", "OpenCV", "YOLOv8", "PostgreSQL", "RabbitMQ", "Kubernetes"],
    slug: "FMD",
    architecture: {
      cols: 4,
      rows: 2,
      nodes: [
        { id: "cam_array", label: "IP Cameras", sublabel: "Distributed Feed", type: "hardware", col: 0, row: 0 },
        { id: "k8s_cluster", label: "K8s GPU Pods", sublabel: "YOLOv8", type: "compute-cluster", col: 1, row: 0 },
        { id: "msg_bus", label: "RabbitMQ", sublabel: "Event Bus", type: "stream", col: 2, row: 0 },
        { id: "postgres", label: "PostgreSQL", sublabel: "TimescaleDB", type: "database", col: 3, row: 0 },
        { id: "alert_svc", label: "Alert Service", sublabel: "Compliance", type: "worker", col: 3, row: 1 },
      ],
      connections: [
        { from: "cam_array", to: "k8s_cluster", label: "RTSP" },
        { from: "k8s_cluster", to: "msg_bus", label: "Detections" },
        { from: "msg_bus", to: "postgres", label: "Attendance Log" },
        { from: "msg_bus", to: "alert_svc", label: "Mask-off Trigger" },
      ],
    },
    content: (
      <div>
        <p>
          The Face Mask Detection & Attendance System automates attendance while enforcing mask compliance via
          live video. OpenCV and YOLOv8-based detection running on GPU pods process distributed camera streams,
          feeding events through RabbitMQ into TimescaleDB for attendance logs and a separate alerting worker
          for compliance violations.
        </p>
        <p>
          Built during the COVID-19 pandemic, the system removed manual checkpoint overhead and demonstrated
          how computer vision can address immediate societal challenges. Its architecture generalizes well —
          the same pattern now powers workplace-safety prototypes and access-control proofs of concept.
        </p>
      </div>
    ),
  },
];
