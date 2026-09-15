export type Specialization = {
  index: string;
  title: string;
  description: string;
  tags: string[];
};

export const specializations: Specialization[] = [
  {
    index: "01",
    title: "Agentic AI",
    description:
      "LLM-powered agents, orchestration, research systems, tool use and multi-agent workflows.",
    tags: ["Orchestration", "Tool use", "Multi-agent", "Planning"],
  },
  {
    index: "02",
    title: "Voice AI",
    description:
      "Speech recognition, voice synthesis, voice cloning and real-time voice systems.",
    tags: ["ASR", "TTS", "Voice cloning", "Real-time audio"],
  },
  {
    index: "03",
    title: "Computer Vision",
    description:
      "OpenCV, MediaPipe, facial recognition, object detection and real-time vision systems.",
    tags: ["OpenCV", "MediaPipe", "Detection", "Real-time"],
  },
  {
    index: "04",
    title: "AI Systems",
    description:
      "RAG pipelines, embeddings, vector databases, APIs, deployment and production-oriented AI architecture.",
    tags: ["RAG", "Embeddings", "Vector DBs", "Deployment"],
  },
];
