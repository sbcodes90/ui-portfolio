import React from "react";
import reactlogo from "../images/reactlogo.png";
import javascriptLogo from "../images/js.png";
import html5 from "../images/html5.png";
import figma from "../images/figma.png";
import css from "../images/css.png";
import mongodb from "../images/Mongodb.png";
import bootstrapcss from "../images/bootstrap.png";
import materialUi from "../images/materialuilogo.png";
import nodejs from "../images/nodejs.png";
import reactRemix from "../images/remix.png";
import reactRouter from "../images/reactrouter.png";
import nextJs from "../images/nextjs.png";
import aws from "../images/aws.png";
import java from "../images/java.png";
import springboot from "../images/springboot.png";
import adobe from "../images/adobe.png";
export default function TechStack() {
  return (
    <div className="w-full h-full pb-20 bg-black ">
      <p className=" text-xl lg:text-4xl text-white font-bold text-center pt-20">
        Tech Stack
      </p>
      <section className="h-screen  grid  grid-cols-3 lg:grid-cols-5 gap-4 place-items-center px-20 pt-20 pb-50 ">
        <img src={reactlogo} alt="react" className=" md:w-16 md:h-16 lg:w-20 lg:h-20" />
        <img src={javascriptLogo} alt="javascript" className=" md:w-16 md:h-16 lg:w-20 lg:h-20" />
        <img src={html5} alt="html5" className="md:w-16 md:h-16 lg:w-20 lg:h-20" />
        <img src={figma} alt="figma" className="md:w-16 md:h-16 w-40 h-20" />
        <img src={css} alt="css" className="md:w-16 md:h-16 lg:w-20 lg:h-20" />
        <img src={materialUi} alt="material-ui" className="md:w-16 md:h-16 lg:w-30 lg:h-20" />
        <img src={nodejs} alt="node-js" className=" md:w-16 md:h-16 lg:w-40 lg:h-40" />
        <img src={bootstrapcss} alt="bootstrap-css" className="md:w-16 md:h-16 lg:w-30 lg:h-20" />
        <img src={reactRemix} alt="react-remix" className="md:w-16 md:h-16 lg:w-30 lg:h-20" />
        <img src={mongodb} alt="mongodb" className="md:w-16 md:h-16 lg:w-30 lg:h-20" />
        <img src={reactRouter} alt="react-router" className="md:w-16 md:h-16 l:w-40 lg:h-40" />
        <img src={nextJs} alt="nextjs" className="md:w-16 md:h-16 lg:w-20 lg:h-20" />
        <img src={java} alt="java" className="md:w-16 md:h-16 lg:w-20 lg:h-20" />
        <img src={springboot} alt="springboot" className="md:w-16 md:h-16 lg:w-40 lg:h-10" />
        <img src={adobe} alt="adobe-creative-suite" className="md:w-16 md:h-16 lg:w-40 lg:h-40" />
      </section>
    </div>
  );
}
