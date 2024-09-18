import React from "react";
import NavTitle from "../Navigation/NavTitle";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section id="about-me">
      <NavTitle title={"About-Me"} />
      <div className="font-normal text-md">
        <p className="mb-4">
          Back in 2020, driven by my love for technology and creativity. Since
          then, I've honed my skills in HTML, CSS, JavaScript, and various
          frameworks like Laravel and React JS. My approach combines aesthetics
          with functionality, ensuring that every project I work on is visually
          appealing and user-friendly.
        </p>
        <p className="mb-4">
          In my portfolio, you will find a selection of my favorite projects
          that showcase my skills such as UI/UX design, front-end development,
          etc. I am passionate about collaboration and enjoy bringing ideas to
          life, both when working with clients and on personal projects.
        </p>
        <p className="mb-4">
          Fun Fact About Me, i'm a matcha fan🍵 and believe that great ideas
          often come from a good drink. When I'm not coding, you can find me
          watching movies, reading, or painting. I'm always learning! Whether
          it's a new framework or design trend, I love being on the cutting
          edge^^.
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
