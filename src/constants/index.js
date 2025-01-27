import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    tripguide,
    threejs,
  } from "../assets";
  import Github from "../assets/tech/Github.png"
  import MySQL from "../assets/tech/MySQL.png"
  import BetaK9 from "../assets/BetaK9.png"
  import ReactK9 from "../assets/ReactK9.png"
  import Portfolio from "../assets/portfolio.png"
  import SQL from "../assets/tech/SQL.png"
  import PHP from "../assets/tech/PHP.png"
  import FirstIgnite from "../assets/company/FirstIgnite.png";
  import Healthmark from "../assets/company/Healthmark.png";
  import TeamK9 from "../assets/company/TeamK9OfficialLogo.png";
  import Puzzle from "../assets/puzzle.png"

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
      title: "Web Developer & Designer - HTML, CSS, JS, PHP, React JS, SCSS",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "SQL Developer",
      icon: backend,
    },
    {
      title: "Boxer & Music Producer",
      icon: creator,
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
      name: "PHP",
      icon: PHP,
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
      name: "SQL",
      icon: SQL,
    },
    {
      name: "Github",
      icon: Github,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "MySQL",
      icon: MySQL,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Technology Analyst",
      company_name: "FirstIgnite",
      icon: FirstIgnite,
      iconBg: "#383E56",
      date: "March 2023 - July 2023",
      points: [
        "Utilized the FirstIgnite platform and external databases to identify potential corporate partners for university partners.",
        "Manage entire portfolio of technologies, ranging from hydrogen production to cyber security software, and support each of them in the commercialization process",
        "Provided quick and actionable feedback to the product development team to continuously improve functionality and effectiveness of the FirstIgnite platform",
      ],
    },
    {
      title: "Database Support Intern",
      company_name: "Healthmark Industries",
      icon: Healthmark,
      iconBg: "#E6DEDD",
      date: "September 2023 - January 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Ameture Boxer",
      company_name: "Team K9",
      icon: TeamK9,
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points: [
        "Engaged in a disciplined and structured boxing training regimen, demonstrating commitment to personal growth, physical fitness, and mental resilience.",
        "Actively leverage the principles of discipline and goal setting gained through boxing in professional and academic projects.",
        "Developed a full-stack website for my boxing coach using HTML, CSS, JavaScript, PHP, XAMPP (Local Hosting/Testing), IONOS (Public Hosting), SSL Certificate, and a Domain. Incorporating features such as a PHP email contact form for inquiries. Future plans include either a functional database with MySQL or a Shopify store for easy deployment.",
        "(*New version of the website is in preparation for deployment using REACT JS & SCSS for better optimization across devices and enhanced UI)",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "K9 Boxing Website (Beta)",
      description:
        "A professional website built for my coach Cornelius 'K9' Bundrage featuring Photo Gallery, Services, and a contact form. Utilizing Vanilla HTML, CSS, JavaScript, and PHP",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent",
        },
        {
          name: "PHP",
          color: "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent",
        },
      ],
      image: BetaK9,
      source_code_link: "https://teamk9boxing.com/K9Boxing.html",
    },
    {
      name: "K9 Boxing Website (New)",
      description:
      "An upgraded version of the K9 Boxing website, built using React for a dynamic and responsive user experience. This version incorporates SCSS for modular and maintainable styling, along with various imported libraries for enhanced functionality. CSS loaders improve performance and optimize styles, while JavaScript powers interactive components and smooth animations.",
      tags: [
        {
          name: "JavaScript",
          color: "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ReactK9,
    },
    {
      name: "3D Project Portfolio",
      description:
        "A modern and interactive 3D portfolio showcasing my projects, built using Vite and React for fast performance and modular development. This project leverages JavaScript for dynamic functionality, Tailwind CSS for responsive and efficient styling, and CSS for additional customizations. The portfolio integrates 3D elements to create an engaging user experience.",
      tags: [
        {
          name: "Vite",
          color: "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent",
        },
        {
          name: "Tailwind CSS",
          color: "bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Three.JS",
          color: "bg-gradient-to-r from-gray-700 to-white bg-clip-text text-transparent drop-shadow-lg",
        },
      ],
      image: Portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sliding Picture Puzzle",
      description:
        "Just a simple game I created a while ago in my web development class.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent",
        },
      ],
      image: Puzzle,
      source_code_link: "https://pranav-malpeddi-project2.netlify.app/",
    }
  ];
  
  export { services, technologies, experiences, projects };