export type ArchitectureStep = string;

export type MetricRow = {
  label: string;
  value: string;
};

export type MetricGroup = {
  title: string;
  rows: MetricRow[];
};

export type ProjectLinks = {
  github?: string;
  demo?: string;
};

export type FeaturedProject = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  problem: string;
  build: string;
  architecture: ArchitectureStep[];
  engineering: string[];
  technologies: string[];
  metricGroups?: MetricGroup[];
  disclaimer?: string;
  status?: string;
  constraint?: string;
  links?: ProjectLinks;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "africompute",
    name: "AfriCompute",
    category: "AI Infrastructure & Scheduling",
    tagline:
      "A simulation framework for comparing compute-scheduling policies under demand.",
    problem:
      "Naive scheduling policies — first-come-first-served, static priority — degrade under high-demand, heterogeneous workloads: average wait times climb and low-priority jobs starve. Before building anything more sophisticated, I needed to actually measure how much that matters.",
    build:
      "I started with a scheduler simulation comparing three policies — FCFS, Priority, and Fair Share — against the same workload, scoring each on average wait time, fairness, starvation, and resource utilization rather than assuming one policy is obviously better. Once Fair Share held up under a high-demand test, I expanded the simulator into a more complete pipeline: a dynamic-infrastructure model (AFAS-style) that adds P95 wait, starvation, utilization, and fairness as first-class metrics instead of just averages.",
    architecture: [
      "Workloads",
      "Scheduling Policy (FCFS / Priority / Fair Share / AFAS)",
      "Resource Allocation",
      "Infrastructure Simulation",
      "Metrics Collection",
      "Evaluation",
    ],
    engineering: [
      "Compared FCFS, Priority, and Fair Share against the same workload before adding any complexity — Fair Share cut average wait by ~21% versus FCFS and ~15% versus Priority in the 250-job high-demand test.",
      "Tracked P95 wait, starvation, and utilization alongside average wait, since a scheduler that looks good on the mean can still starve individual jobs.",
      "Extended the simulator into a dynamic-infrastructure pipeline (AFAS-style) rather than stopping at the three-policy comparison, to see how the same metrics hold up under a more realistic resource model.",
      "Kept results scoped as simulation output — the numbers describe the simulated environment, not a real cloud deployment.",
    ],
    technologies: [
      "Python",
      "Discrete-event simulation",
      "Scheduling algorithms",
      "Data analysis",
    ],
    metricGroups: [
      {
        title: "High-Demand Experiment — 250 jobs (average wait)",
        rows: [
          { label: "FCFS", value: "28.280" },
          { label: "Priority", value: "26.228" },
          { label: "Fair Share", value: "22.404" },
        ],
      },
      {
        title: "Expanded Experiment — Dynamic Infrastructure (AFAS)",
        rows: [
          { label: "Average wait", value: "24.7944" },
          { label: "P95 wait", value: "68.04" },
          { label: "Starvation", value: "0.2352" },
          { label: "Utilization", value: "0.3014" },
          { label: "Fairness", value: "1.0" },
        ],
      },
    ],
    disclaimer:
      "Experimental / simulation results — not production cloud benchmarks.",
    links: { github: "https://github.com/Alien-dev-ai/africompute" },
  },
  {
    slug: "hirelens-ai",
    name: "HireLens AI",
    category: "Recruitment Tooling",
    tagline:
      "Turns a CV and job description into a structured evidence dossier — not a hiring decision.",
    problem:
      "Recruiters and hiring managers manually compare candidate CVs against a job description and then write interview questions from scratch. That process is slow, inconsistent between reviewers, and easy to do sloppily under time pressure.",
    build:
      "I built a pipeline that turns unstructured CV text into structured, requirement-mapped evidence: it processes the CV and job description, extracts evidence, maps that evidence against specific requirements, and compiles it into a candidate evidence profile that becomes an interview dossier with candidate-specific interview questions. The deliberate design decision was to stop there — HireLens organizes evidence for a human to review, it does not decide who to hire.",
    architecture: [
      "CV + Job Description Input",
      "Document Processing",
      "Evidence Extraction",
      "Requirement Mapping",
      "Candidate Evidence Profile",
      "Interview Dossier",
      "Interview Questions",
    ],
    engineering: [
      "Chose not to build a ranking or scoring model — the pipeline output is a structured dossier, not a suitability score, so the hiring call stays with the recruiter or interviewer.",
      "Uses Gemini to extract evidence from CV text and map it against explicit job requirements, rather than doing free-form summarization.",
      "Built for batch processing so a recruiter can run several candidates against the same job description in one pass.",
      "Separated 'evidence extraction' from 'interview dossier generation' as distinct pipeline stages, so the interview questions are grounded in mapped evidence rather than generated independently.",
    ],
    technologies: ["Gemini", "Python", "Document parsing", "Prompt engineering"],
    constraint:
      "By design, HireLens does not score, rank, or recommend candidates. It surfaces evidence and prepares interview material for recruiters, hiring managers, and interviewers — the hiring decision stays with the human reviewer.",
    links: { github: "https://github.com/Alien-dev-ai/hirelens-ai" },
  },
  {
    slug: "voice-clone-bentley",
    name: "Voice Clone — Bentley",
    category: "Voice AI",
    tagline:
      "A real-time voice-cloning pipeline built to run continuously inside a live workflow.",
    problem:
      "Cloning a voice convincingly is one problem. Keeping that pipeline running reliably inside an existing live production workflow — not a one-off render — is a different, harder one, and it's the one this project was actually built to solve.",
    build:
      "I combined XTTS v2 for voice generation with RVC for voice transformation into a single real-time pipeline, then integrated it into a live OBS streaming workflow through a custom API rather than treating it as a standalone script. The project had a real client-facing use case, so the pipeline had to hold up continuously, not just work once in a demo.",
    architecture: [
      "Audio / Voice Input",
      "Audio Processing",
      "Voice Generation (XTTS v2)",
      "RVC Voice Transformation",
      "Output",
      "Live OBS Workflow",
    ],
    engineering: [
      "Chained XTTS v2 (generation) and RVC (transformation) into one pipeline instead of using either component in isolation.",
      "Integrated the pipeline into OBS via a custom API so it runs inside a live streaming workflow, not as an offline batch process.",
      "Built for a real client-facing use case, which put continuous reliability ahead of one-off audio quality experiments.",
    ],
    technologies: [
      "XTTS v2",
      "RVC",
      "Audio/speech processing",
      "API integration",
      "OBS",
    ],
    links: { github: "https://github.com/Alien-dev-ai/voice-cloning-engine" },
  },
  {
    slug: "sentinel-ai",
    name: "Sentinel AI",
    category: "Agentic AI · Multi-Agent Research",
    tagline:
      "A multi-agent research platform that splits research into eight specialized stages instead of one prompt.",
    problem:
      "Asking a single LLM to plan, research, verify, and write in one pass tends to produce output that's fluent but not reliably grounded — there's no separation between 'finding information' and 'deciding it's true' and 'writing it well'.",
    build:
      "I split the work into eight specialized stages, each with a distinct responsibility: Planner breaks the task into a research plan, Research gathers information, Retrieval handles context, Fact Checker verifies factual consistency, Citation manages sourcing, Writer produces the response, Reviewer checks the result, and Memory maintains context across the whole run. The interface surfaces each agent's live status as it works, rather than just returning a final answer.",
    architecture: [
      "Planner",
      "Research",
      "Retrieval",
      "Fact Checker",
      "Citation",
      "Writer",
      "Reviewer",
      "Memory",
    ],
    engineering: [
      "Replaced a single User → LLM → Answer flow with an 8-stage pipeline (Planner → Research → Retrieval → Fact Checker → Citation → Writer → Reviewer → Memory), so each responsibility is isolated and inspectable.",
      "Fact-checking and citation happen as dedicated stages before writing, not as an afterthought — claims get verified before they're incorporated into the final text.",
      "A separate Memory stage maintains relevant context across the pipeline instead of relying on one long prompt to hold everything.",
      "The interface exposes live per-agent status and progress, so a run is observable while it's happening rather than only at completion.",
    ],
    technologies: [
      "LLM orchestration",
      "Agentic AI",
      "Retrieval",
      "Prompt engineering",
      "Python",
    ],
    links: {},
  },
  {
    slug: "quantum",
    name: "Quantum",
    category: "Personal AI Assistant",
    tagline:
      "A personal AI assistant built around voice interaction and reduced cloud dependency.",
    problem:
      "Most voice assistants trade privacy for convenience by routing everything through the cloud. I wanted something closer to a personal computer assistant, built with local/offline operation in mind rather than as a thin wrapper around a cloud API.",
    build:
      "Quantum runs a voice loop — speech recognition, command understanding, action execution, and a spoken response back to the user — with an emphasis on local/offline capability wherever that's actually implemented. It's an ongoing personal system rather than a finished commercial product: the command set and voice loop grow as I add capabilities, not a fixed feature list.",
    architecture: [
      "Voice Input",
      "Speech Recognition",
      "Command Understanding",
      "Action Execution",
      "Response Generation",
      "Voice Output",
    ],
    engineering: [
      "Built around local/offline operation to reduce cloud dependence, rather than defaulting to a cloud assistant API for every request.",
      "Treated as an ongoing system — new capabilities get added to the same voice loop rather than shipped as a versioned release.",
    ],
    technologies: ["Speech recognition", "NLP", "Python", "Voice interaction"],
    status: "Ongoing personal project",
    links: {},
  },
  {
    slug: "alien-1",
    name: "Alien 1",
    category: "Edge AI · Robotics",
    tagline:
      "A voice-controlled Raspberry Pi system — AI intelligence connected to physical hardware.",
    problem:
      "Showing that a voice-driven system can act in the physical world — not just answer in a chat window — means handling recognition, command logic, and hardware control together, on-device, without a cloud round-trip in the loop.",
    build:
      "Alien 1 started as a Raspberry Pi voice-controlled toy-car system and grew around Raspberry Pi and Arduino/Bluetooth hardware interaction: spoken commands get recognized locally, mapped to actions, and sent straight to GPIO to drive motors, with audio and Bluetooth feedback closing the loop back to the user. It's not a general autonomous robotics platform — its value is specifically that the control loop talks to real hardware without needing a cloud AI backend.",
    architecture: [
      "Voice Input",
      "Speech Recognition",
      "Command Processing",
      "Raspberry Pi (GPIO)",
      "Motor Control",
      "Audio / Bluetooth Feedback",
    ],
    engineering: [
      "The recognition-to-control loop runs and drives hardware without requiring a cloud AI backend.",
      "GPIO drives the motors directly from recognized commands; audio/Bluetooth feedback closes the loop back to the user.",
      "Built on Raspberry Pi with Arduino/Bluetooth hardware interaction, kept intentionally scoped as an edge device rather than a general robotics platform.",
    ],
    technologies: ["Raspberry Pi", "GPIO", "Speech recognition", "Python", "Edge AI"],
    links: {},
  },
];

export type MoreProject = {
  name: string;
  description?: string;
  pipeline?: string[];
  metric?: { label: string; value: string };
  technologies?: string[];
  links?: ProjectLinks;
  pending?: boolean;
};

// Sourced from Noah_Sam_Amu_FlowCV_Resume.pdf (public/resume.pdf) and
// project context provided directly.
export const moreProjects: MoreProject[] = [
  {
    name: "AIN",
    description:
      "I fine-tuned NLLB-200 on ~27K Igbo–English pairs rather than calling a general translation API, then wrapped it in a FastAPI backend for real-time speech translation across four Nigerian languages.",
    pipeline: [
      "Speech Input",
      "Speech Recognition",
      "Translation Model (NLLB-200)",
      "Target Language",
      "Speech Output",
    ],
    metric: { label: "BLEU score", value: "14 → 28.86" },
    technologies: ["NLLB-200", "Fine-tuning", "FastAPI", "Speech translation"],
    links: { github: "https://github.com/ntuiakabogu-bigdev/aAIN_V1" },
  },
  {
    name: "AVES",
    description:
      "A voice sales engine where a 7-state finite state machine — not the LLM improvising — controls the conversation, with two-layer intent detection feeding it and objection handling and Google Calendar booking as distinct stages.",
    pipeline: [
      "Voice Input",
      "Intent Detection (2-layer)",
      "FSM Conversation State",
      "Objection Handling",
      "Appointment Automation",
      "Google Calendar",
    ],
    technologies: ["Vapi", "Twilio", "Google Calendar API", "FSM"],
  },
  {
    name: "AssetOracle AI Engine",
    description:
      "A production-oriented engine for real-world asset verification: document verification and investment scoring run as separate stages, with Llama Guard as a dedicated safety layer rather than trusting the base model's output directly. Shipped for a hackathon.",
    pipeline: [
      "Asset / Document",
      "Verification",
      "AI Analysis",
      "Safety Guardrails (Llama Guard)",
      "Investment Analysis",
      "Result",
    ],
    technologies: ["Llama Guard", "Document verification", "Python"],
    links: { github: "https://github.com/Asset-Oracle/con-ai-engine" },
  },
  {
    name: "FACIAL",
    description:
      "A computer-vision security system where access decisions come from a real-time OpenCV face-detection/recognition pipeline, not a static allow-list check.",
    pipeline: [
      "Camera",
      "Face Detection / Recognition",
      "Identity Verification",
      "Access Decision",
    ],
    technologies: ["OpenCV", "Facial recognition", "Python"],
    links: { github: "https://github.com/Alien-dev-ai/Facial-recognition" },
  },
  {
    name: "Cursor",
    description:
      "Replaces the physical mouse with a vision-based input method: tracked hand position in camera space gets mapped to screen coordinates in real time, frame by frame.",
    pipeline: [
      "Camera",
      "Hand Tracking",
      "Position Extraction",
      "Coordinate Mapping",
      "On-Screen Cursor",
    ],
    technologies: ["OpenCV", "NumPy", "Computer vision"],
    links: { github: "https://github.com/Alien-dev-ai/Cursor" },
  },
  {
    name: "SATURN",
    description:
      "An earlier RAG chatbot exploring persistent, personalized context — a JSON store holds conversation history and personalization (user name, chatbot name) instead of the chatbot staying stateless between turns. A step in the journey toward Sentinel, not a multi-agent system itself.",
    pipeline: [
      "User Message",
      "JSON Memory (History + Personalization)",
      "LLM (OpenAI)",
      "Response",
    ],
    technologies: ["RAG", "OpenAI", "Memory/context"],
  },
];
