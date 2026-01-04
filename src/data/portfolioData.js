// src/data/portfolioData.js

export const PROFILE = {
  fullName: "Osama Nadeem Draidi",
  email: "osama.duraidy@gmail.com",
  phone: "+970 593027848",
  location: "Palestine – Tulkarm",
  nationality: "Palestinian",
  dobLabel: "13th Jul. 2003",
  gender: "Male",
  github: "https://github.com/OsamaNadeem2003",
  codeforces: "https://codeforces.com/profile/OsamaNadeem",
 cvPdfPath: "/assets/Osama-Nadeem-Resume 2026.pdf",

  // ✅ NEW socials
  facebook: "https://facebook.com/", // ضع رابطك الحقيقي
  linkedin: "https://www.linkedin.com/", // ضع رابطك الحقيقي
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },

  // ✅ بدل experience
  { id: "courses", label: "Courses" },

  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const EDUCATION = [
  {
    period: "09/2021 – 1-2026",
    place: "Tulkarm, Palestine",
    title: "Bachelor’s degree",
    org: "Palestine Technical University-Kadoorie (PTUK)",
    details: ["Computer System Engineering", "Average: 81"],
  },
  {
    period: "08/2009 – 08/2021",
    place: "Tulkarm, Palestine",
    title: "Tawjihi (Scientific Stream)",
    org: "Shuhada’ Bait Lied sec. School",
    details: ["Average: 92.9"],
  },
];

export const COURSES = [
  // ✅ NEW (مثل الصورة الثانية)
  {
    period: "05/2025 – 07/2025",
    title: "Using AI as Personal Assistant Training",
    org: "Gaza Sky Geeks (GSG)",
    place: "Online",
    bullets: [
      "Completed a 50-hour online training focused on using AI as a personal assistant.",
      "Practiced AI tools to boost productivity and workflow.",
      "Used tools like: Mootion, Diffchecker, ConversionBlitz, YesChat, and more.",
    ],
    tags: ["50 Hours", "AI Tools"],
  },
  {
    period: "10/2024 – 01/2025",
    title: "Web Development",
    org: "Department of Computer Engineering, PTUK",
    place: "Tulkarm, Palestine",
    bullets: [
      "Completed a 35-hour training focused on Front-End development.",
      "Built responsive pages using HTML/CSS/JavaScript with validation and clean structure.",
    ],
    tags: ["Front-End", "HTML", "CSS", "JavaScript"],
  },
];



export const SKILLS = [
  "C++",
  "JAVA",
  "OOP",
  "Data Structure",
  "SQL database",
  "HTML/CSS/JS",
  "React.js",
  "Material-UI (MUI)",
  "Self-study & learning",
  "Excellent Communication Skills",
];

export const LANGUAGES = [
  { name: "Arabic", level: "Native language" },
  { name: "English", level: "Very good" },
];

export const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "htmlcss", label: "HTML & CSS" },
  { key: "js", label: "JavaScript" },
  { key: "reactmui", label: "React & MUI" },

  // ✅ removed (Node & Express)
];

export const PROJECTS = [
  // ✅ NEW: Graduation project (LUQMA) + صورة Eat.png
  {
    id: 1,
    category: "reactmui",
    title: "Graduation Project (LUQMA)",
    desc: "A graduation project restaurant management web application with real-world UX and modern front-end architecture.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/OsamaNadeem2003",
    image: "/assets/Eat.png",
    accent:
      "linear-gradient(135deg, rgba(255,165,0,0.30), rgba(46,160,255,0.22))",
    meta: "Academic • Supervised",
  },

  {
    id: 2,
    category: "reactmui",
    title: "Portfolio (React + MUI)",
    desc: "Clean layout, responsive, with dark/light mode and reusable components.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/OsamaNadeem2003",
    image: "/assets/portfolio.png",
    accent:
      "linear-gradient(135deg, rgba(46,160,255,0.35), rgba(124,58,237,0.25))",
    meta: "Self-study • Practice",
  },
  {
    id: 3,
    category: "js",
    title: "CRUD Operations",
    desc: "CRUD app structure with forms, validation, and data handling (sample).",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/OsamaNadeem2003",
    image: "/assets/CRUD.png",
    accent:
      "linear-gradient(135deg, rgba(34,197,94,0.30), rgba(46,160,255,0.22))",
    meta: "Self-study • Practice",
  },
];
