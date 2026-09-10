export const profile = {
  name: "Biswajit Dash",
  role: "MTech Student · Full-Stack & AI Engineering",
  tagline: "I build full-stack apps and AI-powered tools, and I'm currently deepening my ML & AI foundations at IIIT Allahabad.",
  location: "Allahabad, India",
  email: "0584papu.biswajitdash@gmail.com",
  github: "https://github.com/Biswajit-Kumar",
  linkedin: "https://www.linkedin.com/in/biswajit-dash-68573317a/",
  resumeUrl: "/resume.pdf", // put your resume PDF at public/resume.pdf
  status: "Open to internships & full-time roles", // TODO: confirm this is accurate
};

export const quickFacts = [
  {
    label: "Role",
    value: "Full-stack developer with a growing focus on ML & AI systems.",
  },
  {
    label: "Currently",
    value: "Pursuing an MTech in IT (2nd year) at IIIT Allahabad.",
  },
  {
    label: "Status",
    value: profile.status,
  },
  {
    label: "Location",
    value: profile.location,
  },
  {
    label: "Off-screen",
    value: "Badminton, sketching, and the occasional Rubik's cube solve.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"], // TODO: add Python, C++, SQL, etc. as applicable
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "AI / RAG",
    skills: ["LangChain", "Google Gemini API", "Vector Search (Qdrant)"],
  },
  {
    title: "Data & Infra",
    skills: ["MongoDB", "Docker"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export type Project = {
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  tags: string[];
  github?: string; // TODO: add repo URL once LADFNet / Urban Sprawl repos are public
  live?: string;
};

export const projects: Project[] = [
  {
    title: "PaperMind",
    period: "2026",
    description:
      "A full-stack RAG document-chat platform for uploading documents and asking contextual questions against them. Uses Google Gemini for embeddings and chat, with a Docker-based microservice architecture over MongoDB and Qdrant.",
    tags: ["React", "Express", "MongoDB", "Qdrant", "LangChain", "Gemini API", "Docker"],
    github: "https://github.com/Biswajit-Kumar/PaperMind",
    live: "https://paper-mind-one.vercel.app",
  },
  {
    title: "LADFNet",
    subtitle: "Vision-Language Medical Image Segmentation",
    period: "2025",
    description:
      "A vision-language framework for CT lesion segmentation — extends LViT with BERT text-embedding fusion, a dual-decoder design, and a custom boundary-aware loss (ABAFT). Scored 74.92% Dice on MosMedData+, beating baseline LViT with lower compute and sharper boundaries.",
    tags: ["PyTorch", "ViT", "BERT", "CUDA", "OpenCV", "Medical Imaging"],
  },
  {
    title: "Urban Sprawl Modeling",
    subtitle: "Geospatial ML for Environmental Criticality",
    period: "2025",
    description:
      "A Google Earth Engine ML pipeline tracking 15 years of urban sprawl (2010–2025) and projecting growth to 2040, using multispectral indices over Landsat imagery. A Random Forest classifier hit 96.10% accuracy (0.94 Kappa), measuring a 194% rise in built-up area and a 3.01°C urban-heat-island surge.",
    tags: ["Python", "Google Earth Engine", "Random Forest", "GIS", "Landsat", "Remote Sensing"],
  },
];

export const education = [
  {
    degree: "MTech — Information Technology",
    school: "Indian Institute of Information Technology (IIIT), Allahabad",
    period: "2025 — 2027 (2nd year)",
    detail: "CGPA 8.26",
  },
  {
    degree: "BTech — Engineering",
    school: "Government College of Engineering, Kalahandi, Odisha",
    period: "2019 — 2023",
    detail: "CGPA 8.75",
  },
  {
    degree: "Higher Secondary (XII)",
    school: "DAV Unit-8, Bhubaneswar, Odisha",
    period: "2017 — 2019",
    detail: "68.8%",
  },
  {
    degree: "Secondary (X)",
    school: "DAV Public School IFFCO, Paradeep, Odisha",
    period: "2017",
    detail: "93.1%",
  },
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "Issued Oct 2025",
    link: "/certificates/oci-ai-foundations-associate.pdf", // put the certificate file here
  },
];
