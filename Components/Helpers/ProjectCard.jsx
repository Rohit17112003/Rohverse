import { PrimaryButton } from "../Common";
import Link from "next/link";

const ProjectCard = ({ name, des, thumbnail, liveURL, github, tech }) => {
  return (
    <div className="w-full border border-gray ">
      <div className="w-full h-[12.5625rem]">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-row flex-wrap gap-x-[0.5rem] p-[0.5rem] border-t border-b border-gray">
        {tech?.map((technology, index) => {
          return (
            <span
              key={index}
              className="capitalize text-[1rem] font-[400] text-gray"
            >
              {technology}
            </span>
          );
        })}
      </div>
      <div className="w-full p-[1rem] flex flex-col gap-[1rem]">
        <h2 className="text-[1.5rem] font-[500] text-white capitalize">
          {name}
        </h2>
        <span className="text-[1rem] font-[400] text-gray">{des}</span>
        <div className="2xl:w-[85%] grid grid-cols-2 gap-[1rem]">
          <Link href={liveURL} className="w-full" target="_blank">
            <PrimaryButton
              text="Demo <~>"
              childClass="w-full border-primary text-white hover:bg-light_primary"
            />
          </Link>
          {github && (
            <Link href={github} className="w-full" target="_blank">
              <PrimaryButton
                text="</>"
                childClass="border-gray hover:border-primary text-gray hover:bg-light_primary"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
