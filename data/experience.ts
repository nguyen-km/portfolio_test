// data/experience.ts
export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    title: "Data Scientist",
    company: "BBC Research & Consulting",
    period: "December 2025 — Present",
    location: "Denver, CO",
    achievements: [
      "Conceived and built a firm-wide Bayesian Markov Chain Monte Carlo (MCMC) application (Dirichlet-multinomial and beta-binomial models) in Python and Docker, replacing Monte Carlo methods and becoming BBC's standard availability estimation methodology across all disparity studies.",
      "Provided litigation support to the U.S. Department of Justice in Mid-America Milling Co. v. U.S. Department of Transportation, conducting meta-analysis, random effects regression, and disparity analyses across 828,000 contract observations spanning 10 years of BBC disparity study data.",
      "Designed and implemented BBC's first business revenue estimation machine learning pipeline using CatBoost in Python, predicting revenues for thousands of businesses per study to enable firm-wide small business analyses."
    ]
  },
  {
    title: "Data Analyst",
    company: "BBC Research & Consulting",
    period: "March 2024 — December 2025",
    location: "Denver, CO",
    achievements: [
      "Led quantitative analyses on multiple government agency studies including the 2025 Sound Transit Disparity Study and Economic Impact Assessment, conducting regression analyses, disparity ratio calculations, availability analyses, and economic impact modeling using IMPLAN.",
      "Designed and analyzed large-scale public agency surveys using best-worst scaling, k-means clustering, and program evaluation methods, informing transit marketing strategy and a complete revamp of ODOT's small business program."
    ]
  },
  {
    title: "Graduate Research Assistant",
    company: "Leeds School of Business, CU Boulder",
    period: "May 2022 — March 2023",
    location: "Boulder, CO",
    achievements: [
      "Implemented scalablebayesm, a published CRAN package extending Bayesian hierarchical MCMC methods for scalable target marketing and microeconometrics applications in R and C++.",
      "Developed unit tests to validate module MCMC sampling functions and ensure correctness of parallel implementation.",
      "Authored user documentation including code examples and use cases for academic and industry practitioners."
    ]
  },
  {
    title: "Data Engineering Intern",
    company: "Chipotle Mexican Grill",
    period: "June 2022 — August 2022",
    location: "Newport Beach, CA",
    achievements: [
      "Refactored SQL across 70+ SSIS packages to eliminate failures and improve performance in daily ETL pipelines.",
      "Engineered winner selection data pipeline for the 500,000-entrant 'Buy the Dip' National Avocado Day promotion using Snowflake SQL — joining across tables and validating outputs before flat file delivery to Deloitte.",
      "Consolidated dispersed ETL pipeline and data engineering documentation across SQL Server, Snowflake, and Azure Data Lake into a centralized repository, improving team accessibility."
    ]
  },
  {
    title: "Intern",
    company: "Council of Economic Advisers, The White House",
    period: "February 2019 — May 2019",
    location: "Washington, DC",
    achievements: [
      "Produced dozens of charts and tables for economic reports and memoranda distributed by the Executive Office of the President, including the 2019 Economic Report of the President.",
      "Extracted and compiled macroeconomic and financial data from Haver Analytics and federal government databases using Stata to support quantitative CEA research reports and memoranda.",
      "Synthesized economic research across financial markets, labor, agriculture, and trade policy to produce analytical summaries and briefings in direct support of CEA staff economists."
    ]
  }
];