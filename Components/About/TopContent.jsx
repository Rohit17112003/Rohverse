"use client";
import { PrimaryButton, SectionHeading } from "../Common";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const TopContent = ({ isButton, gap, isLine, icon, des }) => {
  return (
    <>
      <div className="w-full overflow-hidden relative">
        {/* top Box design  */}
        <div className="h-[9.6875rem] w-[5.6875rem] border border-gray  hidden lg:block absolute -left-7 top-[25%]" />

        {/* contents  */}
        <div className={`container  flex flex-col ${gap} `}>
          <SectionHeading
            isLine={isLine}
            heading="about-me"
            des={des ? des : null}
            icon={icon}
          />
          <div className="w-full grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-[5rem]">
            <div className={`w-full`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.25 },
                  offscreen: {
                    y: 50,
                  },
                }}
                className="w-full h-full justify-center flex flex-col gap-5 sm:gap-[2rem]"
              >
                <span className="description">Hello, I’m Rohit!</span>
                <span className="description">
                  A React.js developer passionate about turning ideas into
                  engaging digital experiences. From sleek designs to seamless
                  functionality, I craft interfaces that bring your vision to
                  life. Let’s create something extraordinary together.
                </span>

                {isButton && (
                  <Link href="/about-me">
                    <PrimaryButton
                      text="Read more ->"
                      childClass="border border-primary text-white w-[11rem]"
                    />
                  </Link>
                )}
              </motion.div>
            </div>
            {/* image  */}
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
                offscreen: {
                  y: 150,
                },
              }}
              className="hidden lg:flex lg:justify-end w-full sm:w-auto sm:h-[30rem] items-start"
            >
              <Image
                width={0}
                height={0}
                src="/Assets/about.svg"
                alt="about-image"
                className="h-full w-full sm:w-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* bottom dots design  */}
        <div className="h-[9.6875rem] w-[5.6875rem] hidden lg:block absolute -right-7 bottom-[15%]">
          <Image
            width={0}
            height={0}
            src="/Assets/Dots.png"
            alt="dot design"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default TopContent;
