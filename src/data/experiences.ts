export type Experience = {
  company: string;
  titles: string[];
  description: string;
  from: Date;
  to: Date | null;
  link: string;
};

export const experiences: Experience[] = [
  {
    company: "Bankdata",
    titles: ["Senior Software Developer"],
    description:
      "Developing a microfrontend architecture designed to facilitate the decoupling of other frontend teams. This involves the creation of a CLI, an SDK, and a comprehensive documentation to support and guide the development teams in their use.",
    from: new Date("02/01/2024"),
    to: null,
    link: "https://bankdata.dk",
  },
  {
    company: "Better Developers",
    titles: ["CTO & Partner"],
    description:
      "Responsible for the technological evolution of the business. Contributed to talent acquisition efforts, designing coding interviews, and screening candidates for technical skills. Led a team of frontend developers to ensure adherence to good architecture and best practices.",
    from: new Date("03/01/2023"),
    to: new Date("01/01/2024"),
    link: "https://betterdevelopers.dk",
  },
  {
    company: "IT Minds",
    titles: ["Senior Software Developer", "Software Developer", "Student Software Developer"],
    from: new Date("08/01/2019"),
    to: new Date("02/01/2023"),
    description:
      "Developed and delivered high quality, robust production code for a diverse array of projects for various clients. Offered tutoring to junior developers through mentorship, peer reviews, sparring, and knowledge sharing. Worked as a sourced consultant in many different teams, collaborating with UX designers, product owners, and other engineers to deliver digital experiences at an agile cadence.",
    link: "https://it-minds.dk",
  },
  {
    company: "ML Consulting",
    titles: ["Freelance"],
    from: new Date("03/01/2013"),
    to: null,
    description:
      "Side business engaging in everything tech-related. Tackled a wide variety of challenges at small and medium sized businesses, such as developing small applications, installation of survelliance systems, setup and management of server infrastructure, smart phone repairs, and on-prem support.",
    link: "http://ikkel.dk",
  },
];
