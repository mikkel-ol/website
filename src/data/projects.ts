import beepbotImg from "../assets/projects/beepbot.webp";
import erdImg from "../assets/projects/erd-syntax-sm.webp";
import inscriveImg from "../assets/projects/inscrive-sm.webp";
import skatrouletteImg from "../assets/projects/skatroulette.webp";

export type Project = {
  name: string;
  description: string;
  tech: string[];
  owner?: string;
  link?: string;
  img?: {
    src: string;
    alt: string;
  };
  installs?: number;
};

export const projects: Project[] = [
  {
    name: "ERD Syntax Highlighting",
    description:
      "Extension for VS Code providing syntax highlighting for Entity-Relationship Diagrams, enhancing readability and structure understanding in .er files.",
    link: "https://marketplace.visualstudio.com/items?itemName=mikkel-ol.er-syntax-highlighting",
    tech: ["Node.js", "Regex", "Theming", "Extension"],
    img: {
      src: erdImg,
      alt: "ERD Syntax Highlighting",
    },
    installs: 4123,
  },
  {
    name: "inscrive.io",
    description: "Cloud-based LaTeX editor that allows real-time collaboration and editing with client side compilation of documents.",
    link: "https://inscrive.io",
    tech: ["Next.js", "WebAssembly", "ASP.NET", "SignalR", "LaTeX"],
    img: {
      src: inscriveImg,
      alt: "Inscrive.io",
    },
  },
  {
    name: "Skatroulette",
    description: "Not satisfied with your tax return? Refresh the page until you are!",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://skatroulette.dk",
    img: {
      src: skatrouletteImg,
      alt: "Skatroulette",
    },
  },
  {
    name: "BeepBot",
    description: "All-purpose Discord bot that features web-based soundboard, welcome greetings, playing music, and much more.",
    tech: ["Node.js", "Discord.js", "TypeScript", "Express", "ASP.NET", "SQL Server"],
    img: {
      src: beepbotImg,
      alt: "Beep Bot",
    },
  },
  {
    name: "InterCount",
    owner: "SEGES",
    description:
      "The project revolved around furthering the development of InterCount which is a web application used by the agricultural industry to perform accounting and related activities",
    tech: ["Angular", "RxJS", "NgXS", "TypeScript"],
  },
  {
    name: "CropManager",
    owner: "SEGES",
    description:
      "The project revolved around furthering the development of CropManager which is a web application used by farmers and their advisors in the operations of their agricultural business.",
    tech: ["Angular", "RxJS", "TypeScript", "Angular Material", "Elf"],
  },
  {
    name: "Apple Pay and Google Pay integration",
    owner: "CannaOne",
    description:
      "The purpose of the project was to integrate Apple Pay and Google Pay on an existing webshop. The business was using a payment provider that did not support integration with these in their Woocommerce plugin, providing only an API interface. Therefore we made a custom Woocommerce plugin integrating Apple Pay and Google Pay to their payment provider.",
    tech: ["Wordpress", "PHP", "WooCommerce", "Payment gateway"],
  },
  {
    name: "Storeforecast 5",
    owner: "BESTSELLER",
    description:
      "The project revolved around the development of Storeforecast 5 which was an internal tool at BESTSELLER used by buying planners to forecast how to buy goods and stocks for their stores. The project was to replace their old solution, Storeforecast 4, and extend into many new features, including Machine Learning, to improve the abilities of the planners.",
    tech: ["React", "Apollo GraphQL", "MUI", "ASP.NET", "CI/CD"],
  },
  {
    name: "Labterm2",
    owner: "CGI",
    description:
      "The project revolved around the development of Labterm2, an application for administering NPU terminologies for The Danish Health Data Authority, as they deemed their existing application outdated. The solution extended the current functionality of viewing, editing and adding different elements into supporting multiple languages and data sets seeing as the solution were to be used abroad by similar authorities. The solution was developed as an Angular + Java Spring application.",
    tech: ["Angular", "RxJS", "TypeScript", "Angular Material", "CI/CD"],
  },
  {
    name: "GEPARD",
    owner: "CGI",
    description:
      "The first cross-regional health care system in Denmark. The system serves as the main bank of data of pathology and genetics for all Danish citizens.",
    tech: ["Angular", "ASP.NET", "RxJS", "CI/CD", "TypeScript", "Akita"],
  },
  {
    name: "Hand-held terminal application",
    owner: "Plantas",
    description:
      "The purpose of the project was to make an upgrade from the client's (at the time) current solution of using hand-held terminals to a new solution of using a smartphone application. The main requirement for the application included rendering it possible for the client's drivers to manage orders when visiting customers. The project was developed as a Flutter application with an ASP.NET Core backend.",
    tech: ["ASP.NET", "Microsoft Azure", "AutoMapper"],
  },
  {
    name: "Tildeling.dk",
    owner: "Tolstrup & Hvilsted",
    description:
      "Tildeling.dk was a project originally developed by IT Minds which was used as a platform for public tenders as well as for rankings, questions, answers and more. The solution was developed as an ASP.NET Core + Angular solution.",
    tech: ["ASP.NET", "Angular", "Microsoft Azure", "RxJS"],
  },
  {
    name: "Tildeling.dk",
    owner: "Tolstrup & Hvilsted",
    description:
      "Tildeling.dk was a project originally developed by IT Minds which needed updating and extension in order to be able to support more types of tenders, as specifically requested by RUC. In particular, the request comprised the ability to impose qualitative demands for a tender. The solution was extended on the existing ASP.NET Core + Angular solution.",
    tech: ["ASP.NET", "xUnit", "Microsoft Azure"],
  },
  {
    name: "FEAG",
    owner: "For Enden Af Gaden",
    description:
      "The restaurant was facing a challenge of having catering personel readily available when hosting events. I developed a solution with tablet screens in each room and in the kitchen where guests and personel could communicate, and guests could call waiters and staff to their room. The application was a PWA running in kiosk mode on all tablets with an on-site Raspberry Pi running a .NET API fascilitating the websocket communation between the tablets.",
    tech: ["Angular", "ASP.NET", "SignalR", "Raspberry Pi", "Self hosting"],
  },
  {
    name: "Flowt",
    owner: "Bachelor's project",
    description:
      "The purpose of the project was to develop Flowt, a flowbased data processing tool the likes of Node-RED and Microsoft Flow/Power Automate. It aimed towards automating medium-complex tasks, such as editing multiple text files, grabbing and merging data from spreadsheets or image processing. Moreover, the tool focused on user friendliness and ease-of-use by providing a platform through which the process of adding processing blocks could could be carried out by the user. The solution was built as a React + ASP.NET solution in Docker containers deployed in Kubernetes clusters.",
    tech: ["ASP.NET", "Docker", "Kubernetes", "Microsoft Azure"],
  },
  {
    name: "Freemium Games",
    owner: "Semester project",
    description:
      "As part of a semester project, my group and |developed a game portal which eased the process for game developers and gamers to share their passion for gaming. The product was built as a web application through which the client application communicated with the server application through a RESTful API. The server stored and fetched data on a Microsoft SQL Server.",
    tech: ["Vue.js", "ASP.NET", "RESTful API", "MSSQL"],
  },
  {
    name: "Remote controlled boat",
    owner: "Semester project",
    description:
      "As part of a semester project, I developed a remotecontrolled boat in cooperation with my study group. In relation to this, I took part in designing a remote control with two analog joysticks which communicated with the boat through Raspberry Pis via WiFi. The remote control contained a screen which received a live feed from a camera on board the boat. In addition to this, the feed also contained data from various sensors on the boat. The boat was controlled through a PSoC which communicated with the boat's Raspberry Pi through UART.",
    tech: ["C++"],
  },
];

export const projects_highlight = projects.filter(
  ({ name }) => name === "inscrive.io" || name === "ERD Syntax Highlighting" || name === "Skatroulette"
);
