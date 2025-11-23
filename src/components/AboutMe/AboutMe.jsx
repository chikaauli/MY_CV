import React from "react";
import NavTitle from "../Navigation/NavTitle";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section id="about-me">
      <NavTitle title={"About-Me"} />
      <div className="font-normal text-md">
        <p className="mb-4">
          Back in 2020, driven by my love for technology and creativity, I began
          exploring the world of web development. Since then, I’ve honed my
          skills in HTML, CSS, JavaScript, and frameworks like Laravel and React
          JS. What started as a simple curiosity soon grew into a passion for
          creating digital experiences that are not only functional but also
          visually engaging.
        </p>
        <p className="mb-4">
          As my journey continued, I expanded beyond front-end development and
          entered the world of system integration. This led me to work
          professionally as a Middleware Engineer, where I design and implement
          SOA solutions, monitor system performance, and collaborate with
          development and infrastructure teams. This experience strengthened my
          problem-solving skills and deepened my understanding of how systems
          communicate behind the scenes—knowledge that complements my front-end
          expertise perfectly.
        </p>
        <p className="mb-4">
          In my portfolio, you will find a selection of my favorite projects
          showcasing my skills in UI/UX design, front-end development, and
          application integration. I enjoy collaborating with others, turning
          ideas into intuitive and user-friendly digital products—whether it's
          for clients, teams, or personal projects.
        </p>
        <p className="mb-4">
          Fun fact about me: I’m a matcha fan 🍵 and truly believe that great
          ideas often come from a good drink. When I’m not coding, you’ll
          probably find me watching movies, reading, or painting. I’m always
          learning—whether it’s a new framework, a design trend, or a backend
          integration concept. Growth keeps the journey exciting ^^
        </p>
      </div>

      {/* Next time... */}
      {/* <div className="font-bold text-lg text-slate-400">
        const <span className="text-amber-200">AboutMe</span> ={" "}
        <span className="text-amber-500">{"{ "}</span>`
        <br />
        <p className="ml-4 font-normal text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          corporis dolore nihil voluptatem quas cupiditate dolorum sit numquam
          labore? Blanditiis libero hic soluta nobis. Itaque in officia
          repudiandae illo aliquam?
        </p>
        `<span className="text-amber-500">{"}"}</span>;
      </div> */}
    </section>
  );
};

export default AboutMe;
