import React from "react";
import { PrimaryButton, SectionHeading } from "../Common";
import TopContent from "./TopContent";
import Skills from "../Home/Skills";
import FunFacts from "../FunFact";

const About = () => {
  return (
    <>
      <TopContent
        isLine={false}
        icon="/"
        gap="gap-[1.5rem] sm:gap-[2rem]"
        des="Who am i?"
      />
      <div className="w-full py-[2rem]">
        <Skills
          isLine={false}
          icon="#"
          isDesign={false}
          childLayout="grid sm:grid-cols-3 lg:grid-cols-5 gap-4"
        />
      </div>
      <div className="w-full sm:pt-[3rem] lg:pb-[7rem]">
        <FunFacts />
      </div>
    </>
  );
};

export default About;
