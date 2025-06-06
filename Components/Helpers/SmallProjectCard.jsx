import React from "react";
import { PrimaryButton } from "../Common";
import Link from "next/link";

const SmallProjectCard = ({ name, des, thumbnail, liveURL, github, tech }) => {
  return (
    <div className="w-full">
      <div className="w-full border border-gray">
        <div className="w-full border-b border-gray p-[0.5rem] flex flex-row items-center flex-wrap gap-x-[0.5rem]">
          {tech?.map((technology, index) => {
            return (
              <span key={index} className="capitalize description ">
                {technology}
              </span>
            );
          })}
        </div>

        <div className="w-fill p-[1rem] flex flex-col gap-[1rem]">
          <span className="text-white font-[500] capitalize text-[1.5rem]">
            {name}
          </span>
          <span className="capitalize description ">{des}</span>
          <div className="flex flex-row w-full items-center gap-3">
            <Link target="_blank" href={liveURL}>
              <PrimaryButton
                text="Demo <~>"
                childClass=" border-primary text-white hover:bg-light_primary"
              />
            </Link>

            {github && (
              <Link target="_blank" href={github}>
                <PrimaryButton
                  text="</>"
                  childClass="border-gray hover:border-primary text-gray hover:bg-light_primary"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProjectCard;
