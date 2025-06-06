"use client";
import React, { useContext } from "react";
import { Logo } from "../Common";
import { navigationTab } from "@/db";
import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MenuContext } from "../Context/MenuContext";

const NavigationBar = () => {
  const { handleMenuToggle } = useContext(MenuContext);
  return (
    <div className="bg-[#4DA8DA] roboto-condensed sm:bg-[#fff0] backdrop-blur-sm pt-[1.5rem] px-[1rem] sm:px-0 sm:pt-[2rem] pb-[1rem] flex flex-row justify-between container">
      <Link href="/">
        <Logo />
      </Link>
      <div className="text-[1rem] hidden sm:flex flex-row sm:gap-[1.5rem] lg:gap-[2rem]">
        {navigationTab?.map((values, index) => {
          const { tab, path } = values;
          return (
            <Link
              href={path}
              key={index}
              className={`flex flex-row items-center text-gray font-[400]`}
            >
              <span className="text-primary md:hidden">#</span>
              <span>{tab}</span>
            </Link>
          );
        })}
      </div>

      <div className="sm:hidden">
        <span onClick={() => handleMenuToggle()} className="text-white"> 
       <HiMiniBars3BottomRight/>
        </span>
      </div>
    </div>
  );
};

export default NavigationBar;
