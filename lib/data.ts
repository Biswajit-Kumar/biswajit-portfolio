export const profile = {
  name: "Biswajit Dash",
  role: "MTech Student · Full-Stack & AI Engineering",
  tagline: "I build full-stack apps and AI-powered tools, and I'm currently deepening my ML & AI foundations at IIIT Allahabad.",
  location: "Allahabad, India",
  email: "0584papu.biswajitdash@gmail.com",
  github: "https://github.com/Biswajit-Kumar",
  linkedin: "", // TODO: add your LinkedIn URL
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
      "Built a full-stack RAG document-chat platform enabling real-time document uploads and interactive contextual Q&A. Integrated Google Gemini APIs for text embeddings and chat generation, engineered a local microservice architecture around Docker, MongoDB, and Qdrant, and drove the end-to-end product branding and system design.",
    tags: ["React", "Express", "MongoDB", "Qdrant", "LangChain", "Gemini API", "Docker"],
    github: "https://github.com/Biswajit-Kumar/PaperMind",
    live: "https://paper-mind-one.vercel.app",
  },
  {
    title: "LADFNet",
    subtitle: "Vision-Language Medical Image Segmentation",
    description:
      "A vision-language segmentation framework for CT lesion segmentation, extending LViT with BERT text-embedding fusion and a dual-decoder (Detail & Structure) architecture. Designed Window-based Local Self-Attention (WLSA) and an Adaptive Boundary-Aware Focal Tversky (ABAFT) loss to strengthen local feature extraction and balance the training objective dynamically. Reached a 74.92% Dice score on MosMedData+, outperforming the baseline LViT while lowering computational complexity and improving boundary preservation.",
    tags: ["PyTorch", "ViT", "BERT", "CUDA", "OpenCV", "Medical Imaging"],
  },
  {
    title: "Urban Sprawl Modeling",
    subtitle: "Geospatial ML for Environmental Criticality",
    description:
      "A five-phase geospatial machine learning pipeline built in Google Earth Engine to track 15 years of urban sprawl (2010–2025) and simulate growth trajectories toward 2040. Feature-engineered a 9-dimensional multispectral tensor (NDVI, NDWI, NDBI) across Landsat 5–9 imagery to eliminate spectral confusion between riverbed sand and built-up concrete. A Random Forest classifier trained on 1,000+ ground-truth samples reached 96.10% accuracy (0.94 Kappa), quantifying a 194% expansion in built-up footprint and a 3.01°C urban-heat-island surge.",
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
