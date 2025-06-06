import { socialLink } from "@/db";
import Link from "next/link";
import { motion } from "framer-motion";

const LeftSocial = () => {
  return (
    <div className="hidden fixed z-[999] top-0 left-10 lg:flex flex-col items-center gap-[0.7rem] bg-dark ">
      <div className="h-[11.9375rem] w-[0.0625rem] bg-gray" />

      {socialLink?.map((values, index) => {
        const { icon, url } = values;
        return (
          <Link key={index} href={url} target="_blank">
            <motion.div
              initial={{ opacity: 0, y: 20 * index }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
                offscreen: {
                  y: 50,
                },
              }}
              className="text-gray hover:text-primary transition-all text-[1.3rem]"
            >
              {icon}
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default LeftSocial;
