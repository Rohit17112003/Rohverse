"use client";
import { SectionHeading } from "../Common";
import { motion } from "framer-motion";
import ProjectCard from "../Helpers/ProjectCard";
import { projects } from "@/db";
import BigProjects from "./BigProjects";
import SmallProjects from "./SmallProjects";

const AllProject = () => {
  return (
    <>
      <div className="w-full ">
        <div className="container flex flex-col gap-[4rem]">
          <SectionHeading
            isLine={false}
            heading="projects"
            des="List of my projects"
            icon="/"
          />

          <div className="w-full flex flex-col gap-[3rem]">
            <BigProjects />
            <SmallProjects />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProject;
