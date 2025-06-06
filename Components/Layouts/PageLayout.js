"use client";
import { useContext, useEffect, useState } from "react";
import NavigationBar from "../Headers/NavigationBar";
import Drawer from "../Mobile/Drawer";
import { MenuContext } from "../Context/MenuContext";
import Footer from "../Footer/Footer";
import LeftSocial from "../Home/Hero/LeftSocial";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { CvButton } from "../Common";

const PageLayout = ({ children }) => {
  const { isMenu } = useContext(MenuContext);
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showButton = scrollY > 1000; // Adjust the scroll position threshold as needed

    setIsVisible(showButton);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };
  return (
    <div className="overflow-hidden relative w-full">
      <LeftSocial />

      {/* got to top button  */}
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="bg-[#C7D9DD] text-white animate-bounce  text-2xl cursor-pointer p-2 sm:p-3 fixed z-[999] right-8 bottom-8"
        >
        <IoIosArrowDown/>
        </div>
      )}

      {isMenu && <Drawer />}
      <div className="w-full fixed top-0 left-0 z-[999] ">
        <NavigationBar />
      </div>
      <div className="bg-[#fff0]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
