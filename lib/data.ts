import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Classic Teak Furniture ",
    description:
      "An e-commerce website for a furniture company featuring an augmented reality (AR) tool allowing customers to virtually place and view furniture products in their own space. This platform facilitates online sales and showcases a diverse range of furniture items, providing an immersive and interactive shopping experience for users. ",
    tags: [ "Next.js", "Tailwind", "Figma", "Redux" ,"MongoDB", "TypeScript", "Node JS"],
    imageUrl: '/Landing.png',
  },
  {
    title: "LabLynx",
    description:
      "A comprehensive web-based system designed for a medical laboratory enabling efficient patient registration, detailed recording of test information, and automated report generation. The system allows reports to be printed or emailed to users and includes advanced data analysis capabilities to predict patterns and trends in medical test results, enhancing diagnostic accuracy and operational efficiency.",
    tags: ["Next.js", "Tailwind", "Figma", "Redux" ,"MongoDB", "TypeScript", "Node JS"],
    imageUrl: '/LabLynx.png',
  },
  {
    title: "NisaBookland",
    description:
      "An e-commerce website designed for a book publication and bookshop company, enabling the seamless online sale and management of books. This  platform provides customers with a user-friendly interface to browse,  purchase, and track orders, while also offering robust tools for the company  to manage inventory, process transactions, and promote new releases and bestsellers. ",
    tags: ["Next.js", "Tailwind", "Figma", "Redux" ,"MongoDB", "TypeScript", "Node JS"],
    imageUrl: '/Nisa.png',
  },
] as const;


export const projectsData2 = [
  {
    title: "Hello Green 123",
    description:
      "HelloGreen is an innovative web platform dedicated to addressing the pressing issue of non-biodegradable waste management.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: '/',
  },
  {
    title: "Ceyloneses Resturante",
    description:
      "Ceylonese is a Sri Lanka authentic food resturent located on Singapore.",
    tags: ["React", "Next.js", "Tailwind", "Figma", "Redux"],
    imageUrl: '/',
  },
  
  
] as const;

export const projectsData3 = [
  {
    title: "Data Sciece Project",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: '/isuruimg.png',
  },
  {
    title: "Data Sciece Project",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: '/isuruimg.png',
  },
  {
    title: "Data Sciece Project",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: '/isuruimg.png',
  }
] as const;



export const skil = [
  {
    title: "React JS ",
    imageUrl: '/icons8-react.svg',
  },
  {
    title: "JavaScript",
    imageUrl: '/icons8-javascript.svg',
  },
  {
    title: "TailwindCSS",
    imageUrl: '/icons8-tailwind-css.svg',
  },
  {
    title: "Node JS",
    imageUrl: '/icons8-node-js.svg',
  },
  {
    title: "TypeScript",
    imageUrl: '/icons8-typescript.svg',
  },
  {
    title: "Next JS",
    imageUrl: '/icons8-nextjs.svg',
  },
  {
    title: "FIgma",
    imageUrl: '/icons8-figma.svg',
  },
  {
    title: "Redux",
    imageUrl: '/icons8-redux.svg',
  },
  {
    title: "C",
    imageUrl: '/icons8-c.svg',
  },
  {
    title: "Java",
    imageUrl: '/icons8-java.svg',
  },
  {
    title: "Python",
    imageUrl: '/icons8-python.svg',
  },
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Github",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Express JS",
  "Java",
  "Tenserflow",
  "Figma",
] as const;
