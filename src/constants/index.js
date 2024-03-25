import {
  client,
  code,
  database,
  react,
  looping,
  loopingLogo,
  yukkaLogo,
  evapp,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  carpooling,
  diaree,
  weather,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: client,
  },
  {
    title: "React Native Developer",
    icon: react,
  },
  {
    title: "Back-End Developer",
    icon: database,
  },
  {
    title: "Data Scientist",
    icon: code,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "YUKKA Lab AG",
    icon: yukkaLogo,
    iconBg: "#383E56",
    date: "2019",
    points: [
      "Introduction to NLP techniques:", 
      "Topic Modelling - LDA model using Python and R.",
      "Sentiment Analysis using R."
    ],
  },
  {
    title: "Junior Data Scientist",
    company_name: "Looping Group",
    icon: looping,
    iconBg: "#E6DEDD",
    date: "2019 - 2021",
    points: [
      "Develop Power BI-based dashboards.",
      "Implement Tableau-based dashboards.", 
      "Create Shiny-based dashboards using R.",
      "Conduct data wrangling and data analysis using Python and R.",
      "Notions in Data Integration and Data Automation utilising Cloud Service: Microsoft Azure.", 
      "Use of additional analytics tools such as Talkwalker, Google Analytics, Google Data Studio and Socialbakers.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Looping Group",
    icon: loopingLogo,
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Designed, built, and maintained data pipelines for DAX 30 clients, ensuring accuracy and completeness.",
      "Automated data processing tasks, optimising efficiency and reliability of data flows, resulting in a 25% reduction in processing time.",
      "Troubleshooted and debugged data processing and storage issues, ensuring seamless operations.",
      "Developed business intelligence dashboards, providing actionable insights for complex program data, contributing to a 30% improvement in decision-making processes.",
      "Conducted Tableau training for teammates and contributed to the development of style guides and design systems.",
      "Created prototypes and designed mockups for web and mobile applications.",
      "Leveraged an extensive Tech Stack, including: Python, SQL, Microsoft Azure, Tableau, Power BI, Flask, Streamlit, R, Shiny and Figma.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "EVAPP",
    icon: evapp,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Played a key role in designing and implementing critical features, including User Profile, Add Credits Section, and Live Chat, resulting in a 25% improvement in user engagement.",
      "Conducted a seamless migration of the codebase from JavaScript to TypeScript, optimising maintainability and minimising errors.",
      "Actively contributed to backend route development, ensuring smooth communication within the app.",
      "Collaborated effectively within a team environment, applying project goals using Jira for streamlined project management.",
      "Utilised an extensive Tech Stack comprising: TypeScript, React Native, Expo, Express.js, MongoDB and Mongoose.",
    ],
  },
];



const projects = [
  {
    name: "Car Pooling Mobile App ",
    description:
      "A mobile-based application designed for users to effortlessly search, book, and oversee car rentals offered by different providers, offering a convenient and efficient solution for their transportation requirements.",
    tags: [
      {
        name: "reactnative",
        color: "violet-text-gradient",
      },
      {
        name: "expressjs",
        color: "violet-text-gradient",
      },
      {
        name: "mongodb",
        color: "violet-text-gradient",
      },
      {
        name: "typescript",
        color: "violet-text-gradient",
      },
    ],
    image: carpooling,
    source_code_link: "https://github.com/eriklenzmann/EVAPP",
  },
  {
    name: "Diary Desktop App",
    description:
      "Diaree is a full-stack diary desktop app that securely store your memories in style with a seamless blend of user-friendly design and advanced backend capabilities.",
    tags: [
      {
        name: "reactjs",
        color: "violet-text-gradient",
      },
      {
        name: "mongodb",
        color: "violet-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "violet-text-gradient",
      },
      {
        name: "typescript",
        color: "violet-text-gradient",
      },
    ],
    image: diaree,
    source_code_link: "https://github.com/dinarabs/Diaree",
  },
  {
    name: "Weather Desktop App",
    description:
      "NimbusCast is a full-stack app that tracks global weather data in real time and delivers a poem at random based on the conditions in the area you search.",
    tags: [
      {
        name: "reactjs",
        color: "violet-text-gradient",
      },
      {
        name: "expressjs",
        color: "violet-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "violet-text-gradient",
      },
      {
        name: "javascript",
        color: "violet-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/pilyct/weather-app",
  },
];

export { services, technologies, experiences, projects };
