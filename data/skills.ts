// data/skills.ts
export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "Code2",
    skills: ["Python", "R", "SQL", "C++", "TypeScript"]
  },
  {
    name: "Machine Learning & Statistics",
    icon: "BarChart3",
    skills: ["XGBoost", "CatBoost", "PyMC", "TensorFlow", "Keras", "Causal Inference", "Econometrics", "Bayesian Statistics", "Statistical Modeling", "Survey Methodology", "Regression Analysis", "Time Series"]
  },
  {
    name: "Databases & Tools",
    icon: "Database",
    skills: ["Snowflake", "Docker", "PostgreSQL", "FastAPI", "Git", "SSIS", "Azure Data Lake"]
  },
  {
    name: "Visualization",
    icon: "GitBranch",
    skills: ["Matplotlib", "Seaborn", "ggplot", "Tableau"]
  }
];