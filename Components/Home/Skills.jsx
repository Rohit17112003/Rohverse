import React from "react";
import { SectionHeading } from "../Common";
import { skills } from "@/db";

const Skills = ({ icon, isLine, isDesign, parentLayout, childLayout }) => {
  return (
    <>
      <div className="container flex flex-col gap-[1.5rem] py-[1.5rem] lg:py-[3rem] overflow-x-hidden">
        <div className="sm:w-[50%]">
          <SectionHeading heading="skills" isLine={isLine} icon={icon} />
        </div>

        <div className={`w-full ${parentLayout} gap-10`}>
          {isDesign && (
            <div className="hidden sm:block col-span-1">
              <img src="../Assets/skilldesign.svg" alt="design" />
            </div>
          )}

          <div className=" col-span-2">
            <div className={`w-full ${childLayout}`}>
              {skills?.map((values, index) => {
                const { name, tech } = values;
                return (
                  <>
                    <div className="w-full" key={index}>
                      <div className="w-full border border-gray">
                        <div className="w-full border-b border-gray p-[0.5rem]">
                          <span className="capitalize font-[600] text-[1rem] text-white">
                            {name}
                          </span>
                        </div>

                        <div className="w-fill p-[0.5rem] flex flex-wrap flex-row gap-[0.5rem]">
                          {tech?.map((technology, index) => {
                            return (
                              <span
                                key={index}
                                className="capitalize text-gray text-[1rem] font-[400]"
                              >
                                {technology}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
