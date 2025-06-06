import React from "react";
import { Logo } from "../Common";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { socialLink } from "@/db";

const Footer = () => {
  return (
    <>
      <div className="w-full py-[2rem] border-t border-gray px-[1rem] sm:px-0">
        <div className="container flex flex-col gap-[1rem] sm:gap-[3rem]">
          <div className="flex flex-col text-center sm:text-start sm:flex-row gap-5 sm:gap-0 justify-between">
            <div className="flex flex-col text-center sm:text-start gap-[0.5rem]">
              <div className="flex flex-col items-center sm:items-start sm:flex-row gap-[1rem]">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <span className="text-white font-[400] text-[1rem]">
                Web designer and front-end developer
              </span>
            </div>

            {/* socials  */}
            <div className="flex flex-row justify-center sm:justify-start gap-[0.5rem]">
              {socialLink?.map((values, index) => {
                const { icon, url } = values;
                return (
                  <Link key={index} href={url} target="_blank">
                    <span className="text-gray text-[1.5rem] hover:text-primary transition-all ">
                      {icon}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-1 justify-center">
          <span className="text-gray">  <FaRegCopyright/></span>
            <span className="text-gray font-[400] text-[1rem]">
             Copyright 2025. Made by Rohverse 
            </span>
            <span className=" text-[#fff]"><FaHeartbeat/></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
