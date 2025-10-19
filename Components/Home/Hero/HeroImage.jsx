"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroImage = () => {
  return (
    <div className="h-full flex-all-center flex-col">
      <Image
        src="/Assets/hero.png"
        alt="heroImage"
        width={300}
        height={0}
        className="-mt-16 md:-mt-12 lg:-mt-10"
      />

      {/* current project */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
        className="p-[0.5rem] border border-gray flex flex-row items-center gap-[1rem] -mt-4 bg-dark w-[100%] lg:w-[82%]"
      >
        <div className="h-[1rem] w-[1rem] bg-primary" />

        {/* Animated text excluding link */}
        <span className="description">
          <motion.span
            animate={{ color: ["#ffffff", "#ff0000", "#00ff00", "#0000ff", "#ffffff"] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          >
            Currently working on{" "}
          </motion.span>
          <Link
            href="https://www.sgwebapp.com/"
            target="_blank"
            className="text-white font-[600]"
          >
            sgwebapp.com
          </Link>{" "}
          <motion.span
            animate={{ color: ["#ffffff", "#ff0000", "#00ff00", "#0000ff", "#ffffff"] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          >
            {" "}Delhi Kirti Nagor
          </motion.span>
        </span>
      </motion.div>
    </div>
  );
};

export default HeroImage;
