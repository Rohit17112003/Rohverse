"use client";
import HeroImage from "./HeroImage";
import LeftContent from "./LeftContent";
import Quotes from "./Quotes";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="container flex flex-col pt-[5rem]  lg:pt-[9rem] pb-[5rem] ">
          <div className="w-full  grid sm:grid-cols-2 sm:gap-[2rem] lg:gap-4">
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.25 },
                offscreen: {
                  y: 40,
                },
              }}
            >
              <LeftContent />
            </motion.div>
            <motion.div
              className="h-full mt-5 sm:mt-0"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
                offscreen: {
                  y: 180,
                },
              }}
            >
              <HeroImage />
            </motion.div>
          </div>

          <div className="w-full pt-10 lg:pt-[8.2rem]">
            <Quotes />
          </div>
        </div>
        {/* bottom design  */}
        <div className="h-[5.6875rem] w-[5.6875rem] border border-gray  hidden lg:block absolute -right-3 bottom-[10%]"></div>
      </div>
    </>
  );
};

export default HeroSection;
