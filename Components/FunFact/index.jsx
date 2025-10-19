import React from "react";
import { SectionHeading } from "../Common";
import { funFacts } from "@/db";
import Image from "next/image";

const FunFacts = () => {
  return (
    <div className="w-full">
      <div className="container flex flex-col gap-[2rem]">
        <SectionHeading heading="my-fun-facts" isLine={false} icon="#" />
        <div className="w-full sm:grid grid-cols-4 lg:grid-cols-3 gap-5 relative z-[99999]">
          {/* fun - facts  */}
          <div className="sm:col-span-3 lg:col-span-2  relative z-[99]">
            <div className="w-full flex flex-wrap flex-row gap-[1rem]">
              {funFacts?.map((fact, index) => {
                return (
                  <div
                    key={index}
                    className="bg-dark border border-gray p-[0.5rem]"
                  >
                    <span className="description">{fact}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* design  */}
          <div className="hidden sm:block col-span-1 flex-all-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-end">
              <Image
                width={0}
                height={0}
                src="/Assets//funFactDesign.svg"
                alt="funFactDesign"
                className="h-[10.5625rem] object-contain hidden sm:block"
              />
            </div>
          </div>

          {/* bottom - design - mobile  */}
          <Image
            width={0}
            height={0}
            src="/Assets/funFactDesign.svg"
            alt="funFactDesign"
            className="h-[10.5625rem] sm:hidden absolute -right-10 bottom-0 object-contain opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
