// data/projects.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Bayesian MCMC Disparity Estimation",
    description: "Built firm-wide Bayesian MCMC application (Dirichlet-multinomial & beta-binomial) in Python/Docker that became standard methodology for all disparity studies, replacing legacy Monte Carlo methods.",
    tech: ["Python", "PyMC", "Docker", "Bayesian Statistics"],
    github: "https://github.com/nguyen-km/bayesian-disparity",
    link: "#"
  },
  {
    title: "Revenue Prediction ML Pipeline",
    description: "Designed BBC's first ML pipeline using CatBoost to predict revenues for thousands of businesses per study, enabling robust small business analyses across multiple government agencies.",
    tech: ["Python", "CatBoost", "Scikit-learn", "Pandas"],
    github: "https://github.com/nguyen-km/revenue-ml-pipeline",
    link: "#"
  },
  {
    title: "scalablebayesm R Package",
    description: "Contributed to CRAN package extending Bayesian hierarchical MCMC methods for scalable target marketing. Implemented parallel computing modules and comprehensive unit tests.",
    tech: ["R", "C++", "Rcpp", "MCMC"],
    github: "https://github.com/nguyen-km/scalablebayesm",
    link: "https://cran.r-project.org/package=scalablebayesm"
  },
  {
    title: "National Avocado Day Data Pipeline",
    description: "Engineered winner selection pipeline for 500k-entrant promotion using Snowflake SQL, delivering validated outputs to Deloitte and supporting major marketing campaign.",
    tech: ["Snowflake SQL", "ETL", "Python", "Azure Data Lake"],
    github: "https://github.com/nguyen-km/avocado-pipeline",
    link: "#"
  }
];