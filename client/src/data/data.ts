// Importing icons from various libraries
import { BsDatabase } from "react-icons/bs";
import { CiMobile1, CiServer } from "react-icons/ci";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { IoBugOutline, IoCodeSlashOutline } from "react-icons/io5";
import { PiFigmaLogoLight } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiMui,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

// Importing images
import duLogo from "/images/dhaka-university.webp";
import dicLogo from "/images/dhaka-imperial-college.png";
import academindLogo from "/images/academind.jpg";
import programmingHeroLogo from "/images/p-hero.png";
import udemyLogo from "/images/udemy.webp";
import reactJonasCertificate from "/images/react-jonas.jpg";
import completeWebDevMaxCertificate from "/images/complete-web-dev-max.jpg";
import lifecloudImg from "/images/lifecloud.png";
import usenodeImg from "/images/usenode.png";
import cleanCodeImg from "/images/clean-code.png";
import omnifoodImg from "/images/omnifood.png";
import blackWaterImg from "/images/black-water.png";
import passionFruitImg from "/images/passion-fruit.png";
import redOnionImg from "/images/red-onion.png";
import theWildOasisImg from "/images/the-wild-oasis.png";
import phoneShopImg from "/images/phone-shop.png";
import cleanCodeIcon from "/images/clean-code-icon.png";
import useNodeIcon from "/images/usenode-icon.png";
import fiverrIcon from "/images/fiverr-icon.png";
import lifecloudIcon from "/images/lifecloud-icon.png";

// Course details
export const courses = [
  {
    title: "The Ultimate React Course: React, Next.js, Redux & More",
    provider: "Jonas Schmedtmann",
    duration: "Jun 2023 - Aug 2023",
    certificate: reactJonasCertificate,
    img: udemyLogo,
  },
  {
    title: "100 Days Of Code - Web Development Bootcamp",
    provider: "Academind",
    duration: "Dec 2021 - Feb 2022",
    certificate: completeWebDevMaxCertificate,
    img: academindLogo,
  },
  {
    title: "Complete Web Development Course With Jhankar Mahbub",
    provider: "Programming Hero",
    duration: "Jul 2021 - Nov 2021",
    img: programmingHeroLogo,
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    provider: "Jonas Schmedtmann",
    duration: "Aug 2021 - Oct 2021",
    img: udemyLogo,
  },
  {
    title: "The Complete JavaScript Course 2022: From Zero to Expert!",
    provider: "Jonas Schmedtmann",
    duration: "May 2021 - Aug 2021",
    img: udemyLogo,
  },
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    provider: "Jonas Schmedtmann",
    duration: "Mar 2021 - May 2021",
    img: udemyLogo,
  },
];

// Education details
export const education = [
  {
    title: "Bachelor of Science in Physics",
    img: duLogo,
    provider: "Dhaka University",
    duration: "2024-present",
  },
  {
    title: "Higher Secondary School Certificate",
    img: dicLogo,
    provider: "Dhaka Imperial College",
    duration: "2022 - 2023",
  },
  {
    title: "Secondary School Certificate",
    provider: "Sher-E-Bangla School & College",
    duration: "2019 - 2021",
  },
];

// Skill details
export const skills = [
  { name: "HTML", percentage: 90, icon: FaHtml5 },
  { name: "CSS", percentage: 90, icon: FaCss3Alt },
  { name: "JavaScript", percentage: 90, icon: RiJavascriptFill },
  { name: "Bootstrap", percentage: 90, icon: FaBootstrap },
  { name: "Tailwind CSS", percentage: 90, icon: SiTailwindcss },
  { name: "Material UI", percentage: 90, icon: SiMui },
  { name: "React.js", percentage: 90, icon: FaReact },
  { name: "Next.js", percentage: 90, icon: SiNextdotjs },
  { name: "Node.js", percentage: 90, icon: FaNodeJs },
  { name: "Express.js", percentage: 90, icon: SiExpress },
  { name: "MongoDB", percentage: 90, icon: SiMongodb },
  { name: "PostgreSQL", percentage: 90, icon: SiPostgresql },
];

// Feature details
export const features = [
  {
    title: "Web Design",
    icon: PiFigmaLogoLight,
    description:
      "Crafting visually appealing and user-centric web designs using Figma and other tools. I focus on creating intuitive and engaging user experiences.",
  },
  {
    title: "Web Development",
    icon: IoCodeSlashOutline,
    description:
      "Developing responsive, dynamic websites using Next.js, React.js, and modern technologies. I ensure each website is meticulously optimized for both performance and usability.",
  },
  {
    title: "Backend Development",
    icon: CiServer,
    description:
      "Building robust server-side applications and APIs with Node.js and Express. I focus on creating scalable and efficient backend systems.",
  },
  {
    title: "Responsive Design",
    icon: CiMobile1,
    description:
      "Ensuring websites are fully responsive and provide an optimal viewing experience on all devices, from desktops to smartphones.",
  },
  {
    title: "Bug Fixing",
    icon: IoBugOutline,
    description:
      "Identifying and resolving bugs to enhance the functionality and performance of web applications, ensuring a seamless user experience.",
  },
  {
    title: "Rest API & Database",
    icon: BsDatabase,
    description:
      "Designing and implementing RESTful APIs and managing databases using SQL and NoSQL technologies to ensure efficient data handling and storage.",
  },
];

// Portfolio details
export const portfolio = [
  {
    img: lifecloudImg,
    title: "LifeCloud | A New Home for the Afterlife",
    description:
      "LifeCloud is a modern memorial platform where users can create and share profiles for deceased loved ones, add multimedia content, and host events. I led full-stack development, implementing secure user authentication, real-time databases, and a payment gateway.",
    mainTech: "MERN",
    techStack: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Bootstrap",
      "Redux Toolkit",
    ],
    liveLink: "https://www.lifecloud-qr.com",
    highlights: [
      "Secure user authentication",
      "Real-time database",
      "Integrated payment gateway",
      "Profile creation and content sharing",
      "Event management",
      "Organization profiles",
    ],
    tag: "development",
  },
  {
    img: cleanCodeImg,
    title: "Clean Code | Coding Practice with AI Feedback",
    description:
      "Clean Code offers coding exercises with live AI feedback. Users can practice coding, take quizzes for certificates, and track their progress. Admins manage users, courses, and exercises. I developed both the backend and frontend.",
    mainTech: "MERN",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
    ],
    liveLink: "https://clean-code.io",
    highlights: [
      "AI-driven feedback",
      "User and admin dashboards",
      "Quiz system with certification",
      "Progress tracking",
      "Course and exercise creation",
    ],
    tag: "development",
  },
  {
    img: theWildOasisImg,
    title: "The Wild Oasis | A Boutique Hotel",
    description:
      "The Wild Oasis is a hotel management app for a boutique hotel with 8 wooden cabins. It offers an intuitive interface for managing bookings, cabins, and guests, along with a customer-facing website for online reservations. I developed it during an 84-hour React course on Udemy.",
    mainTech: "Next.js",
    techStack: [
      "React",
      "React Query",
      "Tailwind CSS",
      "Supabase",
      "Styled Components",
      "React Router Dom",
      "App Router",
      "Server Actions",
    ],
    githubLink: "https://github.com/Rupok-Koiry/the-wild-oasis",
    liveLink: "https://the-wild-oasis-beta-wine.vercel.app",
    highlights: [
      "Employee authentication and role management",
      "Comprehensive cabin and booking management",
      "Payment confirmation and check-in/check-out processes",
      "Guest profile management",
      "Dashboard with key metrics and dark mode",
      "Customer-facing website for reservations",
      "Seamless integration using the same API and database",
    ],
    tag: "development",
  },

  {
    img: blackWaterImg,
    title: "Black Water | Mine the Future of Money",
    description:
      "Black Water is a crypto mining website concept, designed for ease of navigation. Built with Next.js, Tailwind CSS, and React animation libraries, it features multiple pages, 3D animations, and is fully responsive.",
    mainTech: "Next.js",
    techStack: ["Next.js", "Tailwind CSS", "React Animation Libraries"],
    githubLink: "https://github.com/Rupok-Koiry/blackwater",
    liveLink: "https://black-water.netlify.app",
    highlights: [
      "3D animations",
      "Multiple pages",
      "Fully responsive design",
      "User-friendly navigation",
    ],
    tag: "design",
  },
  {
    img: passionFruitImg,
    title: "Passion Fruit | Best Mobile App",
    description:
      "Passion Fruit is a mobile app design concept focused on user-friendliness and smooth navigation. I developed it using Bootstrap, HTML, CSS, and jQuery, this single-page app features smooth scrolling and animations, and is fully responsive.",
    mainTech: "Bootstrap",
    techStack: ["HTML", "CSS", "Bootstrap", "jQuery"],
    githubLink: "https://github.com/Rupok-Koiry/passion-fruit",
    liveLink: "https://passion-fruit.netlify.app",
    highlights: [
      "Smooth scroll and animations",
      "Single-page design",
      "Fully responsive",
      "User-friendly interface",
    ],
    tag: "design",
  },
  {
    img: omnifoodImg,
    title: "Omni Food | Healthy Meals Delivered",
    description:
      "Omni Food is a food delivery website design concept, developed during an advanced CSS course. Built with pure HTML, CSS, and JavaScript, it features smooth scrolling, animations, and is fully responsive.",
    mainTech: "HTML, CSS",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Rupok-Koiry/omnifood",
    liveLink: "https://omnifood-rupok.netlify.app",
    highlights: [
      "Smooth scroll and animations",
      "Single-page design",
      "Fully responsive",
      "User-friendly interface",
    ],
    tag: "design",
  },
  {
    img: redOnionImg,
    title: "Red Onion Foods & Restaurant",
    description:
      "Red Onion Foods & Restaurant is a user-friendly website built with create-react-app. It allows users to filter food by category, add items to the cart, and checkout. Users can register or log in via email, password, or Google sign-in, and view order history.",
    mainTech: "React",
    techStack: ["Firebase", "React", "Tailwind CSS"],
    githubLink: "https://github.com/Rupok-Koiry/red-onion-foods-restaurant",
    liveLink: "https://red-onion-foods-rupok.web.app",
    highlights: [
      "Email, password, and Google sign-in",
      "Food filtering by category",
      "Cart and checkout functionality",
      "Order history for registered users",
    ],
    tag: "development",
  },
  {
    img: usenodeImg,
    title: "Use Node | Simplified Business Management",
    description:
      "Use Node centralizes business operations from project management to invoicing. It automates tasks, syncs data in real-time, and provides strategic support. I developed the intuitive interface and backend.",
    mainTech: "Next.js",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    liveLink: "https://usenode.com",
    highlights: [
      "Centralized operations management",
      "Automated tasks and real-time syncing",
      "User-friendly interface",
      "Strategic support and tailored solutions",
      "Enhanced visibility",
    ],
    tag: "development",
  },

  {
    img: phoneShopImg,
    title: "Phone Shop - Best Smartphone Solution",
    description:
      "Phone Shop is an e-commerce platform for purchasing smartphones. Users can register, manage orders, and leave product reviews. The admin panel allows for order and user management, including promoting users to admins. Built with the MERN stack, the site is fully responsive.",
    mainTech: "MERN",
    techStack: ["Firebase", "React", "Bootstrap", "Node", "Express", "MongoDB"],
    githubLink: "https://github.com/Rupok-Koiry/phone-shop-client",
    liveLink: "https://phone-shop-cb821.web.app",
    highlights: [
      "User registration and order management",
      "Product reviews by registered users",
      "Admin panel for order and user management",
      "Review moderation and user promotion",
      "Responsive design",
    ],
    tag: "development",
  },
];
export const experiences = [
  {
    title: "Full Stack Developer",
    img: cleanCodeIcon,
    provider: "Clean Code",
    duration: "Jun 2023 - Present",
    description:
      "Developed Clean Code, an interactive platform for coding exercises with AI feedback. Implemented features such as coding quizzes, leaderboards, and an admin dashboard, ensuring robust user and course management.",
  },
  {
    title: "MERN Developer",
    img: lifecloudIcon,
    provider: "Lifelcoud Qr",
    duration: "Jul 2022 - May 2023",
    description:
      "Led the full-stack development of LifeCloud, a modern memorial platform. Implemented user authentication, real-time database management, and a secure payment gateway, providing a seamless and secure user experience.",
  },
  {
    title: "Backend Developer",
    img: useNodeIcon,
    provider: "Use Node",
    duration: "Mar 2022 - Jul 2022",
    description:
      "Developed a comprehensive business management platform, focusing on backend development. Implemented RESTful APIs, managed databases, and ensured seamless integration of various business operations.",
  },
  {
    title: "Level 1 Seller",
    img: fiverrIcon,
    provider: "Fiverr",
    duration: "Jan 2022 - Mar 2022",
    description:
      "Achieved Level 1 Seller status by delivering high-quality freelance projects. Specialized in web development services, consistently receiving positive feedback for efficiency and client satisfaction.",
  },
];
