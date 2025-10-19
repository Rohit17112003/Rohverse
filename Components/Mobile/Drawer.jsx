"use client";
import React, { useContext } from "react";
import { Logo } from "../Common";
import { MenuContext } from "../Context/MenuContext";
import { navigationTab, socialLink } from "@/db";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Drawer = () => {
  const { handleMenuToggle } = useContext(MenuContext);

  return (
    <div
      className={`h-screen w-full fixed z-[99999] top-0 left-0 sm:hidden overflow-x-hidden`}
    >
      <div className="relative bg-dark h-full w-full px-[1rem] flex flex-col gap-[2.5rem]">
        <div className="w-full pt-[1rem] pb-[0.5rem] flex flex-row justify-between">
          <Logo />
          <span onClick={() => handleMenuToggle()}>
            <X size={32} className="text-white cursor-pointer" />
          </span>
        </div>

        <div className="w-full flex flex-col gap-[2rem] text-[2rem]">
          {navigationTab?.map((values, index) => {
            const { tab, path } = values;
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 * index }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35 },
                  offscreen: {
                    y: 100,
                  },
                }}
                viewport={{ once: false }}
                className="w-full"
                key={index}
              >
                <Link
                  href={path}
                  className={`flex flex-row items-center text-gray font-[400] text-[1rem]`}
                >
                  <span className="text-primary pr-1">#</span>
                  <span>{tab}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* social links  */}
        <div className="w-full absolute left-0 bottom-[2.5rem] flex flex-row justify-center gap-[0.5rem]">
          {socialLink.map((values, index) => {
            const { icon, url } = values;
            return (
              <Link
                className="text-gray text-[2rem]"
                href={url}
                target="_blank"
                key={index}
              >
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
