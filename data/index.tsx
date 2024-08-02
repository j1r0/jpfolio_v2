import { link } from "fs";
import { title } from "process";
import { FaJava } from "react-icons/fa6";
import {
  SiAndroid,
  SiBootstrap,
  SiChakraui,
  SiDart,
  SiExpress,
  SiFlutter,
  SiGithub,
  SiGmail,
  SiGoogle,
  SiInstagram,
  SiLinkedin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const aboutMe = [
  "Software Engineering is not just about creating code; it's about crafting solutions that improve lives, foster innovation, and drive progress.",
];

export const gridItems = [
  {
    id: 1,
    title: "Languages & Frameworks",
    description: "Learning to master diverse",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
    imgClassName: "w-full h-full right-0 opacity-20",
    titleClassName: "text-center lg:pt-3 md:pt-6 pt-6",
    img: "/b5.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Enriches lives & Impacts communities.",
    description: "I develop software that",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "BS/MS in Software Engineering",
    subtitle: "Minor in Psychology",
    subheading: "Accelerated Master's",
    description: "Soaring through with 5 years of higher-level education.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName:
      "opacity-5 -translate-x-10 -translate-y-10 flex items-center justify-center h-[110%]",
    titleClassName: "justify-center text-right",
    img: "/erau-logo.png",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ERAU SASE Website",
    des: "An engaging and interactive website for a growing school organization with over 100 members. Its creation significantly enhanced the online presence and member engagement.",
    img: "/sasewebsite.png",
    iconLists: [
      <SiReact />,
      <SiVite />,
      <SiTailwindcss />,
      <SiNodedotjs />,
      <SiExpress />,
    ],
    figma: "https://www.figma.com/design/asLSI4MLL23B2DAWEvW7XJ/SASE-Website?node-id=0-1&t=k5Sa2PpU2Liv9HSW-1",
    link: "https://sase-website.pages.dev",
    linktype: "Website",
  },
  {
    id: 2,
    title: "FitSage",
    des: "An at-home fitness and nutrition app designed to combat health challenges for students that features a workout planner and tracks nutrient intake and body metrics.",
    img: "/fitsage.png",
    iconLists: [
      <SiFlutter />,
      <SiDart />,
      <FaJava />,
      <SiSqlite />,
      <SiAndroid />,
    ],
    figma: "",
    link: "https://github.com/ERAUFitnessTracker/FitSage",
    linktype: "GitHub",
  },
  {
    id: 3,
    title: "Visionary",
    des: "A lightweight and easy-to-use photography website. It functions as a photo database and a dynamic portfolio, showcasing work with a sleek, responsive design.",
    img: "/visionary.png",
    iconLists: [
      <SiReact />,
      <SiNodedotjs />,
      <SiExpress />,
      <SiMysql />,
      <SiChakraui />,
    ],
    figma: "https://www.figma.com/design/7zc5jB6tZND5YSb4nNW2gH/Visionary?node-id=0-1&t=q3KLwCAOE9VUwNAO-1",
    link: "https://github.com/j1r0/visionary",
    linktype: "GitHub",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/jpamplona28/",
  },
  {
    id: 2,
    icon: <SiGoogle />,
    link: "mailto:pamplonajimp@gmail.com",
  },
  {
    id: 3,
    icon: <SiGithub />,
    link: "https://github.com/j1r0",
  },
];
export const technologies1 = [
  {
    title: "Next.js",
  },
  {
    title: "Tailwind CSS",
  },
  {
    title: "Java",
  },
  {
    title: "Python",
  },
  {
    title: "C",
  },
];

export const technologies2 = [
  {
    title: "JavaScript",
  },
  {
    title: "TypeScript",
  },
  {
    title: "MySQL",
  },
  {
    title: "Node.js",
  },
  {
    title: "C++",
  },
];
export const technologies3 = [
  {
    title: "Express.js",
  },
  {
    title: "Dart",
  },
  {
    title: "MATLAB",
  },
  {
    title: "MongoDB",
  },
  {
    title: "React",
  },
];
