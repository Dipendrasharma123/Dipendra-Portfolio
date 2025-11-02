// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import rkmLogo from './assets/company_logo/rkm.png';

// Education Section Logo's

import jgiLogo from './assets/education_logo/jgi.png';
import annapurnaLogo from './assets/education_logo/12th.png';
import adarshLogo from './assets/education_logo/10th.png';

// Project Section Logo's
import jobPortalLogo from './assets/work_logo/jobPortal.png';
import lmsLogo from './assets/work_logo/lms.png';
import googleKeepLogo from './assets/work_logo/googleKeep.png';
import currencyConverterLogo from './assets/work_logo/currencyConverter.png';
import rrSLogo from './assets/work_logo/rrS.png';
import shopifyLogo from './assets/work_logo/shopify.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
       { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: rkmLogo,
      role: "Fullstack Developer Intern",
      company: "RKM The Web Builder",
      date: "June 2024 - August 2024",
      desc: "Developed a full-featured eCommerce web application using the MERN stack, integrating user authentication, product management, and secure payment gateways. Designed responsive front-end interfaces, implemented RESTful APIs for seamless data flow, and optimized database performance. Collaborated in an agile environment to ensure a smooth user experience and efficient order processing.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      img: jgiLogo,
      school: "Jain University, Bangalore",
      date: "Oct 2022 - June 2026",
      grade: "8.60 CGPA",
      desc: "I completed my BTech in Computer Science and Engineering from Jain University, Bangalore. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Jain University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - BTech (Computer Science and Engineering)",
    },
    {
      id: 2,
      img: annapurnaLogo,
      school: "Annapurna Secondary School,Butwal",
      date: "July 2019 - May 2021",
      grade: "83.25 %",
      desc: "I completed my class 12 education from Annapurna Secondary School,Butwal, under the NEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "NEB(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: adarshLogo,
      school: "Adarsh English Boarding Secondary School, Semari",
      date: "April 2018 - April 2019",
      grade: "91.25 %",
      desc: "I completed my class 10 education from Adarsh English Boarding Secondary School, Semari, under the NEB board, where I studied Science with Computer.",
      degree: "NEB(X), Science with Computer",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CareerConnect Job Portal",
      description:
        "A dynamic and user-friendly MERN stack application that seamlessly connects job seekers and employers. CareerConnect enables users to create profiles, search and apply for jobs, and upload resumes, while employers can post and manage openings efficiently. With secure authentication, responsive design, and real-time updates, it offers a smooth experience for both candidates and recruiters.",
      image: jobPortalLogo,
      tags: ["Node.js", "Express.js", "JavaScript", "React JS", "API"],
      github: "https://github.com/Dipendrasharma123/Job-Portal",
    },
    {
      id: 1,
      title: "AI-Powered LMS",
      description:
        "An intelligent and interactive Learning Management System (LMS) powered by AI to enhance personalized learning experiences. The platform enables students to access courses, track progress, and receive AI-driven recommendations, while instructors can manage content, evaluate performance, and automate assessments. With integrated chatbots, analytics, and adaptive learning, it ensures an engaging, efficient, and data-driven educational environment.",
      image: lmsLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express", "OpenAI API"],
      github: "https://github.com/Dipendrasharma123/AI-Powered-LMS",
    },
    {
      id: 2,
      title: "GoogleKeep App Clone",
      description:
        "A feature-rich Google Keep clone — a sleek note-taking app that lets users create, organize, and search notes effortlessly. It supports text, checklists, images, labels, reminders, and color-coded notes, with a responsive UI and real-time sync for a seamless cross-device experience",
      image: googleKeepLogo,
      tags: ["React.js", "CSS", "JavaScript", "API"],
      github: "https://github.com/Dipendrasharma123/Google-Keep-App-Clone",
    },
    {
      id: 3,
      title: "Railway Reservation System",
      description:
        "A console-based Railway Reservation System developed in Java that enables users to book, cancel, and view train tickets efficiently. The system features modules for Admin and Passenger, supports train search by source and destination, and includes functionalities like PNR generation, email and contact validation, and dynamic refund calculation based on cancellation time. Designed with an object-oriented approach, it ensures reliability, scalability, and a smooth booking experience.",
      image: rrSLogo,
      tags: ["Java", "IntelliJ IDEA", "NPM", "Validation"],
      github: "https://github.com/Dipendrasharma123/Railway-Reservation-System",
    },
    {
      id: 4,
      title: "Currency Converter",
      description:
        "A responsive Currency Converter application built using JavaScript that allows users to convert values between multiple currencies in real time. It integrates with a live exchange rate API to fetch up-to-date conversion rates and provides an intuitive interface for quick and accurate calculations. Designed for simplicity and efficiency, the app ensures a smooth user experience across all devices.",
      image: currencyConverterLogo,
      tags: ["HTML", "CSS", "JavaScript", "Chrome Extension"],
      github: "https://github.com/Dipendrasharma123/Currency-Converter",
    },
    {
      id: 5,
      title: "Shopify",
      description:
        "A Python-based Shopify clone built with Flask/Django, featuring product management, user authentication, cart, and secure checkout with real-time database integration and a responsive interface.",
      image: shopifyLogo,
      tags: ["React.js", "Python", "SQL", "JWT"],
      github: "https://github.com/Dipendrasharma123/Shopify-Store",
    },
  ];  