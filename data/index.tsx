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
  SiFigma,
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
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

export const heroData = {
  description:
    "Hello, I’m a first-gen student from Guam who creates software to connect people, spark opportunity, and explore the unknown.",
};

export const aboutMe = [
  {
    id: 1,
    content:
      "Hello! My name is Jim and I’ve come a long way from where I began.",
  },
  {
    id: 2,
    content:
      "I was nine months old when my dad, older brother, and I boarded a plane from the Philippines to Guam in search of a better life. For years, my mom had to stay behind due to paperwork, so our only connection was through nightly Skype calls where she sang us lullabies through a pixelated screen. When she finally joined us ten years later, we lived in a small, fragile room on my grandfather’s lot until my dad began building our house with his own two hands while my mom provided care for us each day. Together my parents showed me that resilience means not only surviving hardship, but lifting others along the way, whether it was my dad sending money back to extended family in the Philippines or my mom helping families with their paperwork to move to Guam. Their perseverance, compassion, and faith became the foundation of how I approached life and everything that comes with it.",
  },
  {
    id: 3,
    content:
      "Creativity became my way of reflecting on these experiences. Photography helped me frame moments, graphic design helped me communicate without words, and videography taught me to tell stories people could feel. Over time, I realized I wanted to create not just for myself, but for others. That desire to design with empathy drew me to software engineering, a field where creativity meets functionality and where I could build tools that carry meaning, connection, and care.",
  },
  {
    id: 4,
    content:
      "Looking back, I see how all of these moments connected. A plane that carried us to Guam. A screen that carried my mom’s voice across oceans. Parents who not only provided for us, but also supported extended family and guided others toward better opportunities. Creativity that taught me to design with empathy. And faith that reminded us, even in our hardest moments, that there is always reason to hope. Together, they shaped my realization: aerospace and technology are not just tools, they are bridges of exploration. For me, software engineering became the way to bring it all together: a path where I can honor my resilience and faith while building solutions that help people today and open doors to what lies beyond the horizon.",
  },

];

export const quote = [
  "To me, software engineering is the art of turning resilience and creativity into tools that connect people, create opportunity, and explore the unknown.",
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
    title: "SkyTwin",
    des: "Developed in a requirements engineering course, SkyTwin models real-time air traffic operations to support controller decision-making. The project emphasized SDLC practices such as requirements elicitation, system specification, V&V planning, and UI prototyping. Final deliverables included formal documentation and a Figma-based dashboard with AI-powered trajectory predictions and conflict alerts.",
    img: "/skytwin.png",
    iconLists: [ 
    ],
    figma: "https://www.figma.com/design/VGi6jTfYpHKawiE8fTetr6/SkyTwin?node-id=29-345&t=DXqDkQzPKBYwVftd-1",
    link: "https://www.figma.com/proto/VGi6jTfYpHKawiE8fTetr6/SkyTwin?page-id=0%3A1&node-id=1-4&starting-point-node-id=1%3A4&t=0f6FxxLn1Mj5BWY1-1",
    linktype: "Figma Prototype",
  },

  {
    id: 2,
    title: "ZARA: Reimagined",
    des: "A usability-driven redesign of the ZARA website focused on improving navigation, accessibility, and user satisfaction. Conducted heuristic evaluations, user testing, and persona development to identify pain points and guide design decisions. Delivered a responsive Figma prototype that modernized the site’s interface while preserving brand identity and enhancing the online shopping experience.",
    img: "/zara.png",
    iconLists: [

    ],
    figma: "https://www.figma.com/design/fUxeOsddfuRMlwrYTzYih5/ZARA--reimagined?node-id=0-1&t=WOKalhmD9kJTfkPS-1",
    link: "https://www.figma.com/proto/fUxeOsddfuRMlwrYTzYih5/ZARA--reimagined?page-id=0%3A1&node-id=4044-1184&p=f&viewport=759%2C1%2C0.19&t=RIPHNONERHJKpmGk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4044%3A1183",
    linktype: "Figma Prototype",
  },
  {
    id: 3,
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
    id: 4,
    title: "Portfolio v1",
    subtitle: "My first portfolio website",
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
    id: 5,
    title: "Visionary",
    subtitle: "A Photography Portfolio",
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
    id: 6,
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
    id: 7,
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
  {
    title: "Figma",
    icon: <SiFigma />,
    link: "https://help.figma.com/hc/en-us",
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
