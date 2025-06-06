import React from "react";

const InputControl = (props) => {
  return (
    <div className="w-full relative">
      <input
        {...props}
        className="border w-full border-gray p-[0.7rem] text-gray text-[1rem] outline-none bg-[#fff0] overflow-visible"
        id="inputField"
      />
    </div>
  );
};

export default InputControl;
