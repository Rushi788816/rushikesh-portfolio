const skills = [
  // Frontend
  { id: 1, name: "React.js", category: "Frontend", level: 85 },
  { id: 2, name: "JavaScript (ES6+)", category: "Frontend", level: 85 },
  { id: 3, name: "HTML5", category: "Frontend", level: 90 },
  { id: 4, name: "CSS3", category: "Frontend", level: 85 },
  { id: 5, name: "Tailwind CSS", category: "Frontend", level: 80 },
  { id: 6, name: "Redux Toolkit", category: "Frontend", level: 75 },

  // Backend & APIs
  { id: 7, name: "PHP", category: "Backend", level: 80 },
  { id: 8, name: "Laravel", category: "Backend", level: 80 },
  { id: 9, name: "Node.js", category: "Backend", level: 65 },
  { id: 10, name: "RESTful APIs", category: "Backend", level: 87 },

  // Database
  { id: 11, name: "MySQL", category: "Database", level: 80 },
  { id: 12, name: "PostgreSQL", category: "Database", level: 75 },

  // Tools & Workflow
  { id: 13, name: "Git & GitHub", category: "Tools", level: 85 },
  { id: 14, name: "Postman / Apidog", category: "Tools", level: 80 },
  { id: 15, name: "Swagger", category: "Tools", level: 75 },
  { id: 16, name: "Shopify", category: "Tools", level: 75 },
  { id: 17, name: "VS Code / XAMPP", category: "Tools", level: 90 }
];

export const skillCategories = [
  { key: "All", label: "All Skills" },
  { key: "Frontend", label: "Frontend" },
  { key: "Backend", label: "Backend & APIs" },
  { key: "Database", label: "Database" },
  { key: "Tools", label: "Tools & Workflow" }
];

export const learningNow = [
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Docker",
  "AWS"
];

export default skills;
