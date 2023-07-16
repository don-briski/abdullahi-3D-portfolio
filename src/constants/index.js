import {
  react,
  backend,
  angular,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Igate,
  decagon,
  firebase,
  postgress,
  jira,
  swagger,
  actions,
  jest,
  angularT,
  sqlite3,
  mysql,
  ilearn,
  foodapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "services",
    title: "services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Angular Developer",
    icon: angular,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
   },
  // {
  //   name: "firebase",
  //   icon: firebase
  // },
  // {
  //   name: "postgres",
  //   icon: postgress
  // },
  // {
  //   name: "jira",
  //   icon: jira
  // },
  // {
  //   name: "swagger",
  //   icon: swagger
  // },
  //  {
  //   name: "github-actions",
  //   icon: actions
  // },
   {
    name: "angular",
    icon: angularT
  },
  // {
  //   name: "sq-lite3",
  //   icon: sqlite3
  // },
  // {
  //   name: "mySql",
  //   icon: mysql
  // }
];

const experiences = [
 
  {
    title: "Full Stack Developer",
    company_name: "Decagon",
    icon: decagon,
    iconBg: "#E6DEDD",
    date: "June 2022 - current",
    points: [
      "Adept in carrying-out Unit tests and integration test using jest",
      "Engage in a team project that developed a shopper Ecommerce web Application and ilearn application using react, and node",
      "Created and optimized front-end components using react",
      "Adept use of Git and GitHub for version control in web Application Development",
      "Create, integrate and manage both relational databases: Mysql, Postgres, sqlite3 and Nosql database: Mongo db.",
      "Frequently used docker to containerized web Applications",
      "familliarize with building simple frontend components with angular"
    ],
  },
  {
    title: "React.js Developer",
    company_name: "I-gate",
    icon: Igate,
    iconBg: "#383E56",
    date: "December 2022 - February 2023",
    points: [
      "Developing and maintaining web applications interface using React.js and other related technologies.",
      "Create manage and maintain front-end components and reusable components with angular 11+",
      "Consumes Restful Api for front-end application development",
      "Adept use of Git and GitHub for version control in web Application Development",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Reviewing web layouts and design for front-end development",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ilearn",
    description:
      "Web-based platform that allows users(students) to connect to professional tutors remotely with a paid token. student books sessions and get access to any professional of their area of interest.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgress",
        color: "green-text-gradient",
      },
      {
        name: "node/express",
        color: "pink-text-gradient",
      },
      {
        name: " css",
        color: "white-text-gradient",
      },
      {
        name: "cicd: github-actions",
        color: "blue-text-gradient",
      }
    ],
    image: ilearn,
    source_code_link: "https://github.com/",
    live_link: "https://ilearn-sq012-node.netlify.app/",
    progressvalue: 90
  },
  {
    name: "ajob",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    live_link : '',
    progressvalue: 10
  },
  {
    name: "Food App",
    description:
      "This app houses several restaurant that allows customer to purchase food from their favourite restaurant within a local. this app was mainly built to test for functionality before it was optimized and remodified for production .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sqqlite-3",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "node/express",
        color: "white-text-gradient",
      }
    ],
    image: foodapp,
    source_code_link: "https://github.com/don-briski/food-app-react-frontend",
    live_link: "https://foodorderring.netlify.app/",
    progressvalue: 93
  },
];

export { services, technologies, experiences, testimonials, projects };
