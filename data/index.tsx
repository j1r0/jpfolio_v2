import { title } from "process";
import { FaJava } from "react-icons/fa6";
import {
  SiAndroid,
  SiArduino,
  SiC,
  SiChakraui,
  SiCplusplus,
  SiDart,
  SiExpress,
  SiFlutter,
  SiGithub,
  SiGoogle,
  SiInstagram,
  SiJavascript,
  SiJulia,
  SiLinkedin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";



export const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const aboutMe = [
  {
    id: 1,
    content:
      "Hello! My name is Jim and I’ve come a long way from where I began.",
  },
  {
    id: 2,
    content:
      "Growing up in Guam, I had a knack for tinkering with technology, often experimenting with old laptops and second-hand phones. Rightly so, my mom would call me a “sira-niko,” a playful combination of the Tagalog words for broken and mechanic, because I enjoyed fixing things even if I sometimes made them worse before improving them. Coming from a family with limited financial means and no college education, fixing these old tech meant that we would not need to spend hundreds on a repair or a new device. I also took it upon myself to pursue higher education at Embry-Riddle Aeronautical University, where I'm now an accelerated master’s student in software engineering.",
  },
  {
    id: 3,
    content:
      "In recent years, full-stack and app development have caught my eyes, inspired by my fascination with how software could simplify life. Here I am now in 2024, building a website that makes it easier for other people to get to know who I am :)",
  },
  {
    id: 4,
    content:
      "Currently, I am the president of the Society of Asian Scientists and Engineers (SASE) at ERAU. With this role, my mission is to cultivate a welcoming family for students far from home and assist them in gaining the skills and experience they need to succeed. If you are reading this and are from ERAU, join us! We have a lot of fun, exciting events, and awesome people to meet!",
  },
];

export const quote = [
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

export const projectList = [

  {
    id: 1,
    title: "VANTAGE",
    des: "Virtual Autonomous Navigation Testing and Guidance Environment. An open source collision avoidance system testing environment developed to provide a safe and controlled environment for UAV analysts to utilize.",
    img: "/vantage.png",
    iconLists: [
      { icon: <SiPython />, link: "https://docs.python.org/3/", iconName: "Python" },
      { icon: <SiJulia />, link: "https://docs.julialang.org/en/v1/", iconName: "Julia" },
      { icon: <SiArduino/>, link: "https://ardupilot.org/copter/docs/common-index.html", iconName: "ArduPilot" },
    ],
    figma: "https://www.figma.com/design/3LFUXZGglFq9kiKeomucW9/VANTAGE?node-id=0-1&t=Ofpgv9ZEo3OHObAu-1",
    link: "https://github.com/TEAM-13-VANTAGE/vantage",
    linktype: "GitHub",
  },
  {
    id: 2,
    title: "Portfolio v1",
    des: "Version 1 of my portfolio website that showcases my work and skills. It was visually appealing and responsive, but lacked personalization, which led to the creation of v2.",
    img: "/jpfoliov1.png",
    iconLists: [
      { icon: <SiNextdotjs />, link: "https://nextjs.org/docs", iconName: "Next.js" },
      { icon: <SiTailwindcss />, link: "https://tailwindcss.com/docs", iconName: "Tailwind CSS" },
      { icon: <SiTypescript />, link: "https://www.typescriptlang.org/docs/", iconName: "TypeScript" },
    ],
    figma: "https://www.figma.com/design/yovXhT0PNxPXZWmp29Amei/Portfolio?node-id=2-2&t=Dl1rwVUQm0yaH53Y-1",
    link: "https://jpamplona-v1.vercel.app/",
    linktype: "Website",
  },
  {
    id: 3,
    title: "Visionary",
    des: "A lightweight and easy-to-use photography website functions as a photo database and a dynamic portfolio, showcasing work with a sleek, responsive design. It's particularly useful for photographers looking to present their work professionally and accessibly, making it easy for clients and viewers to explore their portfolio on any device.",
    img: "/visionary.png",
    iconLists: [
      { icon: <SiReact />, link: "https://react.dev/blog/2023/03/16/introducing-react-dev", iconName: "React" },
      { icon: <SiNodedotjs />, link: "https://nodejs.org/en/docs/", iconName: "Node.js" },
      { icon: <SiExpress />, link: "https://expressjs.com/", iconName: "Express.js" },
      { icon: <SiMysql />, link: "https://dev.mysql.com/doc/", iconName: "MySQL" },
      { icon: <SiChakraui />, link: "https://chakra-ui.com/docs/getting-started", iconName: "Chakra UI" },
    ],
    figma:
      "https://www.figma.com/design/7zc5jB6tZND5YSb4nNW2gH/Visionary?node-id=0-1&t=q3KLwCAOE9VUwNAO-1",
    link: "https://github.com/j1r0/visionary",
    linktype: "GitHub",
  },
  {
    id: 4,
    title: "FitSage",
    des: "An at-home fitness and nutrition app was designed to combat health challenges for students, featuring a workout planner and tracking nutrient intake and body metrics. This was created to provide a comprehensive tool for maintaining a healthy lifestyle during the COVID-19 pandemic.",
    img: "/fitsage.png",
    iconLists: [
      { icon: <SiFlutter />, link: "https://flutter.dev/docs", iconName: "Flutter" },
      { icon: <SiDart />, link: "https://dart.dev/guides",  iconName: "Dart" },
      { icon: <FaJava />, link: "https://docs.oracle.com/en/java/", iconName: "Java" },
      { icon: <SiSqlite />, link: "https://www.sqlite.org/docs.html", iconName: "SQLite" },
      { icon: <SiAndroid />, link: "https://developer.android.com/docs", iconName: "Android" },
    ],
    figma: "",
    link: "https://github.com/ERAUFitnessTracker/FitSage",
    linktype: "GitHub",
  },
  {
    id: 5,
    title: "ERAU SASE Website",
    des: "An engaging and interactive website for a growing school organization (SASE) significantly enhanced the online presence and member engagement, allowing members to easily access resources and stay updated on events.",
    img: "/sasewebsite.png",
    iconLists: [
      { icon: <SiReact />, link: "https://react.dev/blog/2023/03/16/introducing-react-dev", iconName: "React" },
      { icon: <SiVite />, link: "https://vitejs.dev/guide/", iconName: "Vite" },
      { icon: <SiTailwindcss />, link: "https://tailwindcss.com/docs", iconName: "Tailwind CSS" },
      { icon: <SiNodedotjs />, link: "https://nodejs.org/en/docs/", iconName: "Node.js" },
      { icon: <SiExpress />, link: "https://expressjs.com/", iconName: "Express.js" },
    ],
    figma:
      "https://www.figma.com/design/asLSI4MLL23B2DAWEvW7XJ/SASE-Website?node-id=0-1&t=k5Sa2PpU2Liv9HSW-1",
    link: "https://sase-website.pages.dev",
    linktype: "Website",
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
export const technologies = [
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
    link: "https://nextjs.org/docs",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    link: "https://tailwindcss.com/docs",
  },
  {
    title: "Java",
    icon: <FaJava />,
    link: "https://docs.oracle.com/en/java/",
  },
  {
    title: "Python",
    icon: <SiPython />,
    link: "https://docs.python.org/3/",
  },
  {
    title: "C",
    icon: <SiC />,
    link: "https://en.cppreference.com/w/c",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    title: "MySQL",
    icon: <SiMysql />,
    link: "https://dev.mysql.com/doc/",
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs />,
    link: "https://nodejs.org/en/docs/",
  },
  {
    title: "C++",
    icon: <SiCplusplus />,
    link: "https://devdocs.io/cpp/",
  },
  {
    title: "Express.js",
    icon: <SiExpress />,
    link: "https://expressjs.com/",
  },
  {
    title: "Dart",
    icon: <SiDart />,
    link: "https://dart.dev/guides",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
    link: "https://docs.mongodb.com/",
  },
  {
    title: "React",
    icon: <SiReact />,
    link: "https://react.dev/blog/2023/03/16/introducing-react-dev",
  },
  {
    title: "Chakra UI",
    icon: <SiChakraui />,
    link: "https://chakra-ui.com/docs/getting-started",
  },
  {
    title: "SQLite",
    icon: <SiSqlite />,
    link: "https://www.sqlite.org/docs.html",
  },
  {
    title: "Flutter",
    icon: <SiFlutter />,
    link: "https://flutter.dev/docs",
  },
  {
    title: "GitHub",
    icon: <SiGithub />,
    link: "https://docs.github.com/en",
  },
];

export const contactList= [
  {
    title:"LinkedIn",
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/jpamplona28/",
  },
  {
    title:"GitHub",
    icon: <SiGithub />,
    link: "https://github.com/j1r0",
  },
  {
    title:"Instagram",
    icon: <SiInstagram />,
    link: "https://www.instagram.com/jirophotography/",
  },
  {
    title:"Email",
    icon: <p>pamplonajimp@gmail.com</p>,
    link: "mailto:pamplonajimp@gmail.com",
  },
];
