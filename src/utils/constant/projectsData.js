import RemedialImg from "../../assets/remedial.png";
import NfImage from "../../assets/nf.png";
import AnimalImg from "../../assets/animals.png";
import SiwikodeImg from "../../assets/siwikod.png";
import { link } from "framer-motion/client";

const projectsData = [
  {
    id: 1,
    title: "Remedial.id",
    category: "Web Seni",
    desc: "A website application built using react technology, which generates knowledge & approaches about art and literacy.This remedial program involves several activities that include an understanding of art, discussion on millennium art, and practice in graphic printing",
    img: RemedialImg,
    link: "https://github.com/TA-FEBE-REMEDIAL/FE-REMEDIAL",
    additionals: [
      {
        show: false,
      },
    ],
    tag: [
      "React.js Vite",
      "React Redux",
      "MySQL",
      "JavaScript",
      "Git & Github",
      "Figma",
      "Postman",
    ],
  },
  {
    id: 2,
    title: "NFlix",
    category: "Streaming Film",
    desc: "A streaming platform with a high-quality collection of the latest movies and series updated daily. Enjoy unlimited viewing on any internet-connected device. Integrated CRUD features, responsive design based on Laravel and Bootstrap.",
    img: NfImage,
    link: "https://nflix.kajicode.my.id/",
    additionals: [
      {
        show: true,
        link: "https://github.com/chikaauli/streamingfilm.git",
        icon: "fa-brands fa-github",
        text: "Github",
      },
    ],
    tag: ["Laravel", "PHP", "Bootstrap", "MySQL"],
  },
  {
    id: 3,
    title: "Animals Life",
    category: "Web Animals",
    desc: "A website that aims to raise awareness and knowledge about various animal species",
    img: AnimalImg,
    link: "https://animals-life.netlify.app/",
    additionals: [
      {
        show: true,
        link: "https://github.com/chikaauli/JAVASCRIPT_MSIB3.git",
        icon: "fa-brands fa-github",
        text: "Github",
      },
    ],
    tag: ["HTML", "CSS", "JavaScript", "Jquery"],
  },
  {
    id: 4,
    title: "SIWIKODE",
    category: "Web",
    desc: " a website",
    img: SiwikodeImg,
    link: "https://siwikode.netlify.app/",
    additionals: [
      {
        show: false,
      },
    ],
    tag: ["CodeIgniter", "PHP", "Bootstrap", "MySQL", "JavaScript"],
  },
];

export default projectsData;
