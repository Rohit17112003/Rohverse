"use client";

import React, { useRef, useEffect } from "react";
import HeroSection from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "../About/TopContent";
import Contact from "../Contact";
import { useSearchParams } from "next/navigation";

const HomePage = () => {
  const param = useSearchParams();
  const action = param.get("action");
  const sectionRef = useRef();
  useEffect(() => {
    action === "contact" &&
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [action]);

  return (
    <div className="w-full relative px-[1rem] sm:px-0">
      <HeroSection />
      <Projects />
      <Skills
        isLine={true}
        icon="#"
        isDesign={true}
        parentLayout="grid sm:grid-cols-3"
        childLayout="grid sm:grid-cols-3 gap-4"
      />
      <div className="w-full py-[3rem] sm:py-[5rem]">
        <About
          gap="gap-7 sm:gap-[2.5rem]"
          isButton={true}
          isLine={true}
          icon="#"
        />
      </div>

      <div className="w-full pb-[3rem] lg:pb-[5rem]" ref={sectionRef}>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
