import Project1 from "../assets/projects/Project1.jpg";
import Project2 from "../assets/projects/Project2.png";
import Project3 from "../assets/projects/Project3.png";
import Project4 from "../assets/projects/Project4.png";

export const HERO_CONTENT = `I am a systems developer fascinated by the creative freedom and innovation that technology provides. I am currently focused on enhancing my skills in both back-end and front-end development, exploring technologies such as TypeScript, Node.js, Java Spring Boot, ReactJS, React Native, and TailwindCSS.`;

export const ABOUT_TEXT = `I hold a degree in Technology in Systems Analysis and Development from Universidade de Mogi das Cruzes and am currently pursuing a postgraduate degree in Full Stack Development at FIAP in partnership with Alura. During this postgraduate program, I am deepening my knowledge in back-end, front-end, database, and cloud computing.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Full Stack Developer",
    company: "Movida Aluguel de Carros",
    description: `At Movida renting vehicles, I work developing within the company's financial systems, correcting bugs, creating new functionalities, always seeking to optimize and make the entire process within these systems more fluid.
Making the system, as already mentioned, more fluid, aiming to make the use of the employees simpler, faster and more consistent, offering a better experience for the customer who is not aware of this whole process but who needs the proper functioning of this process to use of the product offered by the company without headaches.`,
    technologies: ["Javascript", "Php", "Laravel", "MySql", "Docker", "linux", "Git", "NodeJs"],
  },
];

export const PROJECTS = [
  {
    title: "DuckDuckGo website clone",
    image: Project1,
    description:
      "A clone of the DuckDuckGo website, designed to replicate the look and feel of the original site.",
    technologies: ["NextJs", "TailwindCSS", "Typescript"],
    github: "https://github.com/thegaab/DuckDuckGo-Landingpage",
  },
  {
    title: "NWL Expert Notes",
    image: Project2,
    description:
      "A website for creating and managing notes, supporting both text and audio formats. Users can create, edit, and delete notes, as well as record and play audio notes.",
    technologies: ["ViteJS", "Tailwind CSS", "Sooner", "lucide-react"],
    github: "https://github.com/thegaab/nlw-expert-notes",
  },
  {
    title: "Twitter UI Clone",
    image: Project3,
    description:
      "Clone of the twitter interface using technologies like typescript, reactJs and some tools like vite which served as a development environment, Phosphor icons which provided us with a library of icons for the interface and finally react-router-dom which allowed us a client-side routing.",
    technologies: ["Typescript", "Phosphor icons", "React-router-dom", "ReactJs"],
    github: "https://github.com/thegaab/Twitter-UI",
  },
  {
    title: "Pet Tech",
    image: Project4,
    description:
      "A back-end website for pet lovers, where they can find products and services for their pets.",
    technologies: ["NodeJS", "MongoDB", "NestJS", "Docker"],
    github: "https://github.com/thegaab/posts_techposts",
  },
];

export const CONTACT = {
  address: "Mogi das Cruzes, São Paulo, Brazil",
  phoneNo: "+55 11 9 9999-9999",
  email: "me@example.com",
};
