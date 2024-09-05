import {
    mobile,
    backend,
    creator,
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
    carrent,
    jobit,
    tripguide,
    threejs,
    Nupaths,
    giant,
    HeirAtlas,
    codeninjas,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Artifical Intelligence/Machine Learning Developer",
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
  ];
  
  const experiences = [
    {
      title: "Instructional Assistant",
      company_name: "NuPaths",
      icon: Nupaths,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Deliver technical support to both students and educators at NuPaths.",
        "Conduct online and live sessions to offer assistance.",
        "Maintain accurate records of attendance.",
        "Distribute pertinent IT resources as needed.",
        "Contribute to the cultivation of a learning environment characterized by heightened efficiency and effectiveness.",
      ],
    },
    {
      title: "Full Stack Develeoper Intern",
      company_name: "Heir Atlas",
      icon: HeirAtlas,
      iconBg: "#E6DEDD",
      date: "Jan. 2024 - Present",
      points: [
        "Tailored User Experience: Created an intuitive asset management portal using Servlets and Java for seamless navigation.",
        "Secure Transactions: Integrated Stripe for safe and efficient payment processing.",
        "Efficient Asset Management: Streamlined tracking, categorization, and retrieval processes.",
        "Responsive Support: Implemented a customer support system for timely assistance.",
      ],
    },
    {
      title: "Code Sensei",
      company_name: "Code Ninjas",
      icon: codeninjas,
      iconBg: "#383E56",
      date: "March 2023 - August 2023",
      points: [
        "Established an engaging learning environment for 7-14-year-olds, teaching coding through game development using JavaScript and Scratch",
        "Instructed on computer science basics such as variables, loops, and conditionals.",
        "Merged technology passion with simplified coding explanations.",
      ],
    },
    {
      title: "Pharmacy Technicion",
      company_name: "Giant",
      icon: giant,
      iconBg: "#E6DEDD",
      date: "Sept. 2021 - Present",
      points: [
        "Experienced Pharmacy Technician adept at dispensing medications and maintaining records of controlled substances.",
        "Skilled in collaborating with healthcare professionals to ensure patient safety and optimal care.",
        "Proficient in utilizing pharmacy systems and technology to accurately process and dispense medication orders.",
        "HIPPA Certified",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
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
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };