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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  // threejs,
  project1,
  logo1,
  propertMission,
  frontend,
  backendLogo,
  Canva,
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
    icon: frontend, 
  },
  // {
  //   title: "React Developer",
  //   icon: reactjs, 
  // },
  {
    title: "Backend Developer",
    icon: backendLogo, 
  },
  
  {
    title: "Canva Designer",
    icon: Canva, // Canva icon
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [

  {
    title: "Web Developer",
    company_name: "Code Biceps",
    icon: logo1,
    iconBg: "#383E56",
    date: "oct 2024 -Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
  name: "Call Center",
  description:
    "Web-based platform for managing call center operations efficiently. Agents can handle incoming and outgoing calls, track customer interactions, log issues, and monitor performance metrics. The system improves communication, enhances customer support, and ensures smooth workflow for call center teams.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "postgres", color: "green-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
  ],
  image: project1,
  source_code_link: "#",
},

{
  name: "Jewellery Store",
  description:
    "E-commerce web application for jewellery products, providing both user and admin functionalities. Users can browse and purchase products online, while the admin panel allows administrators to add products, upload banners, manage categories, and oversee orders. The system ensures smooth store management and a seamless shopping experience for customers.",
  tags: [
    { name: "next js", color: "blue-text-gradient" },
    { name: "restapi", color: "green-text-gradient" },
    { name: "scss", color: "pink-text-gradient" },
    { name: "postgres", color: "yellow-text-gradient" },
  ],
  // image: jobit, 
  source_code_link: "#",
},

{
  name: "Hardware Store",
  description:
    "E-commerce web application for hardware products, providing both user and admin functionalities. Users can browse and purchase products online, while the admin panel allows administrators to add products, upload banners, manage categories, and oversee orders. The platform ensures smooth store management and a seamless shopping experience for customers.",
  tags: [
    { name: "next js", color: "blue-text-gradient" },
    { name: "restapi", color: "green-text-gradient" },
    { name: "scss", color: "pink-text-gradient" },
    { name: "postgres", color: "yellow-text-gradient" },
  ],
  // image: hardwareStoreImage, 
  // source_code_link: "#",
},
{
  name: "PropertyMission24x7",
  description:
    "Real estate web application built with the MERN stack, Tailwind CSS, and Bootstrap. Users can explore property listings, submit enquiries, and manage accounts, while Google Sign-In authentication ensures seamless login. The application leverages AWS S3 for media storage and AWS EC2 for reliable hosting, providing a responsive and feature-rich user experience.",
  tags: [
    { name: "mern", color: "blue-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
    { name: "firebase", color: "yellow-text-gradient" },
    { name: "aws", color: "green-text-gradient" },
  ],
  image: propertMission,
  source_code_link: "#",
}




  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   // source_code_link: "https://github.com/",
  // },

];

export { services, technologies, experiences, testimonials, projects };
