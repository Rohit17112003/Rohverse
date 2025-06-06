"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DropDownButton = () => {
  const [isOn, setIsOn] = useState(false);
  const [selectedItem, setSelectedItem] = useState("all");
  const items = ["all", "Completed", "Development"];
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOn(false);
    }
  };
  const handleSelect = (newItem) => {
    setSelectedItem(newItem);
    setIsOn(false);
  };

  useEffect(() => {
    // Attach the event listener on component mount
    document.addEventListener("mousedown", handleClickOutside);

    // Detach the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="relative w-full sm:w-[10rem]">
        <div
          onClick={() => setIsOn(!isOn)}
          className="cursor-pointer w-full capitalize border border-primary bg-light_primary py-2 px-3 text-white flex flex-row gap-2 items-center justify-between"
        >
          <span>{selectedItem}</span>
          <span className="text-primary">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1.4em"
              width="1.4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M472 168H40a24 24 0 010-48h432a24 24 0 010 48zm-80 112H120a24 24 0 010-48h272a24 24 0 010 48zm-96 112h-80a24 24 0 010-48h80a24 24 0 010 48z"></path>
            </svg>
          </span>
        </div>
        {isOn && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.1 },
              offscreen: {
                y: 50,
              },
            }}
            viewport={{ once: false }}
            className="absolute bg-gray p-1 w-full left-0 "
          >
            {items?.map((item, index) => {
              return (
                <div
                  onClick={() => handleSelect(item)}
                  key={index}
                  className="capitalize text-white font-[400] hover:bg-primary py-[5px] px-[5px] cursor-pointer"
                >
                  <span>{item}</span>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default DropDownButton;
