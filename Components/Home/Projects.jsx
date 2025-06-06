"use client";

import { PrimaryButton, SectionHeading } from "../Common";
import Link from "next/link";
import ProjectCard from "../Helpers/ProjectCard";
import { projects } from "@/db";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="container flex flex-col gap-[2rem] py-[3rem] overflow-x-hidden">
          {/* Header  */}
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-[80%]">
              <SectionHeading heading="projects" isLine={true} icon="#" />
            </div>
            <Link
              href="/my-works"
              className="hidden sm:flex flex-row items-center gap-3 text-[1rem] font-[400] text-white"
            >
              <span>View all</span>
              <span>{`~~>`}</span>
            </Link>
          </div>

          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-[1rem] overflow-hidden">
            {projects?.slice(0, 3)?.map((values, index) => {
              const { name, des, thumbnail, liveURL, github, tech } = values;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 * index + 70 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3 },
                    offscreen: {
                      y: 50,
                    },
                  }}
                  viewport={{ once: false }}
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
          <Link href="/my-works" className="w-full sm:hidden">
            <PrimaryButton
              text="View all ~~>"
              childClass="w-full h-[3.5rem] border-primary text-white hover:bg-light_primary"
            />
          </Link>
        </div>
        {/* bottom design  */}
        <div className="h-[9.6875rem] w-[5.6875rem] border border-gray  hidden lg:block absolute -right-5 bottom-[40%]"></div>
      </div>
    </>
  );
};

export default Projects;
