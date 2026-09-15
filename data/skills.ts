export type RatedSkill = {
  name: string;
  // Percent shown on an animated bar. Sourced only where there's a real
  // basis: the bar-chart proficiency graphic on Noah's own resume
  // (public/resume.pdf, page 2, "Skills & Frameworks"), a number Noah gave
  // directly (Python), or a range Noah authorized directly (Computer
  // Vision / Voice AI, rated 75-87). Never invented outside those bounds —
  // a skill with no real source lives in `items` below instead, as a plain
  // tag with no numeric claim attached to it.
  percent: number;
};

export type SkillCategory = {
  title: string;
  rated?: RatedSkill[];
  items?: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    rated: [
      { name: "Python", percent: 86 }, // given directly
      { name: "C++", percent: 85 }, // from resume bar chart
    ],
    items: ["C"],
  },
  {
    title: "AI / Machine Learning",
    rated: [
      { name: "Deep Learning", percent: 88 },
      { name: "NLPs", percent: 78 },
      { name: "CNNs", percent: 80 },
      { name: "Transformers", percent: 75 },
      { name: "RNNs", percent: 65 },
    ],
    items: ["PyTorch", "TensorFlow", "scikit-learn"],
  },
  {
    title: "Generative AI",
    rated: [
      { name: "RAG Systems", percent: 90 },
      { name: "Vector Embeddings & Databases", percent: 88 },
      { name: "LLM & Agentic Frameworks", percent: 85 },
      { name: "Generative AI (GANs)", percent: 82 },
    ],
    items: ["Prompt Engineering", "Agentic AI"],
  },
  {
    title: "Computer Vision",
    // Rated 75-87 per Noah's direction, weighted by how central each tool
    // is to shipped projects (OpenCV drives both FACIAL and Cursor).
    rated: [
      { name: "OpenCV", percent: 87 },
      { name: "MediaPipe", percent: 78 },
      { name: "YOLO", percent: 75 },
    ],
  },
  {
    title: "Voice AI",
    // Rated 75-87 per Noah's direction, weighted by how central each tool
    // is to shipped projects (XTTS v2 + RVC anchor the Bentley pipeline).
    rated: [
      { name: "XTTS", percent: 85 },
      { name: "RVC", percent: 82 },
      { name: "Whisper", percent: 80 },
      { name: "TTS / STT", percent: 77 },
    ],
  },
  {
    title: "Backend / Infrastructure",
    rated: [
      { name: "API Integration", percent: 76 },
      { name: "Cloud Computing (AWS)", percent: 70 },
      { name: "Model Shipping & Deployment", percent: 55 },
    ],
    items: ["FastAPI", "Flask", "Git"],
  },
];
