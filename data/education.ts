// data/education.ts
export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  gpa?: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "M.S., Applied Mathematics",
    school: "University of Colorado Boulder",
    period: "May 2023",
    location: "Boulder, CO",
    gpa: "4.0",
    description: "Specialization in Statistics & Data Science. Coursework: Bayesian Inference, Statistical Learning, Time Series, High-dimensional Statistics."
  },
  {
    degree: "B.A., Economics (Quantitative Emphasis) & Political Science",
    school: "University of Colorado Boulder",
    period: "December 2020",
    location: "Boulder, CO",
    gpa: "3.64",
    description: "Quantitative economics focus with rigorous training in econometrics, microeconomic theory, and data analysis."
  }
];