"use client";
import { PrimaryButton } from "@/Components/Common";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const LeftContent = () => {
  const router = useRouter();
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `Rohit is a <span class="text-primary">React/Next.js developer</span> and <span class="text-primary">front-end designer</span>`,
        `Rohit is a <span class="text-primary">UI/UX enthusiast</span> and <span class="text-primary">creative coder</span>`,
        `Rohit is a <span class="text-primary">web developer</span> and <span class="text-primary">interface designer</span>`,
      ],

      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col gap-[1.5rem] lg:gap-[2rem] justify-center h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.2 },
        }}
      >
        <h1 className="text-white font-[600] text-[1.4rem] sm:text-[1.5rem] lg:text-[2.1rem] mt-10 md:mt-0">
          <span ref={el}></span>
        </h1>
      </motion.div>

      <span className="description">
        Building modern web solutions where UI/UX meets React and Next.js magic.
      </span>

      <Link href="/?action=contact">
        <PrimaryButton
          childClass="border-primary text-white hidden sm:block w-[11rem]"
          text="Hire me!!"
        />
      </Link>
    </div>
  );
};

export default LeftContent;
