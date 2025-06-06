"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroImage = () => {
  return (
    <div className=" h-full flex-all-center flex-col">
      <img
        src="../Assets/heroImage.svg"
        alt="heroImage"
        className="w-full sm:w-auto sm:h-[27rem]"
      />

      {/* current project  */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.2 },
          offscreen: {
            y: 40,
          },
        }}
        className="p-[0.5rem] border border-gray flex flex-row items-center gap-[1rem] -mt-5 sm:mt-[-8rem] lg:-mt-5 bg-dark w-[90%] lg:w-[82%]"
      >
        <div className="h-[1rem] w-[1rem] bg-primary" />

        <span className="description">
          Currently working on{" "}
          <Link
            href="https://construction-bazaar.vercel.app/en"
            target="_blank"
            className="text-white font-[600]"
          >
            SG Web App Kirti Nagor Delhi
          </Link>{" "}
        </span>
      </motion.div>
    </div>
  );
};

export default HeroImage;
