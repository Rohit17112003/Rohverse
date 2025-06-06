"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "../Common";
import ProjectCard from "../Helpers/ProjectCard";
import { projects, smallProjects } from "@/db";
import SmallProjectCard from "../Helpers/SmallProjectCard";

const SmallProjects = () => {
  return (
    <>
      <div className="flex flex-col gap-[2rem]">
        <SectionHeading isLine={false} heading="small-projects" icon="#" />

        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-[1rem] overflow-hidden">
          {smallProjects?.map((values, index) => {
            const { name, des, liveURL, github, tech } = values;
            return (
              <div key={index} className="w-full">
                <SmallProjectCard
                  name={name}
                  des={des}
                  liveURL={liveURL}
                  github={github}
                  tech={tech}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SmallProjects;
