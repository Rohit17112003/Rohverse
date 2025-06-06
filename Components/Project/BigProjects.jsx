"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "../Common";
import ProjectCard from "../Helpers/ProjectCard";
import { projects } from "@/db";
import DropDownButton from "../Helpers/DropDownButton";

const BigProjects = () => {
  return (
    <>
      <div className="flex flex-col gap-[2rem]">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between">
          <SectionHeading isLine={false} heading="complete-apps" icon="#" />

          {/* <DropDownButton /> */}
        </div>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-[1rem] ">
          {projects?.map((values, index) => {
            const { name, des, thumbnail, liveURL, github, tech } = values;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 * index + 2 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.2 },
                  offscreen: {
                    y: 20,
                  },
                }}
                viewport={{ once: true }}
                key={index}
                className="w-full"
              >
                <ProjectCard
                  name={name}
                  des={des}
                  liveURL={liveURL}
                  github={github}
                  thumbnail={thumbnail}
                  tech={tech}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BigProjects;
