import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
   <>
    <Image width={100} height={0} src="/Assets/logo.png" alt="logo" className="w-16 md:w-18 lg:w-24"/>
   </>
  );
};
const PrimaryButton = (props) => {
  return (
    <button
      {...props}
      className={`${props.childClass} py-[0.5rem] px-[1rem] border font-[500]`}
    >
      <span className="leading-normal">{props.text}</span>
    </button>
  );
};

const SectionHeading = ({ isLine, heading, des, icon }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-row items-center gap-[1rem]">
        <h3 className="text-[1.7rem] sm:text-[2rem] text-white font-[500]">
          <span className="text-primary">{icon}</span>
          {heading}
        </h3>
        {isLine && (
          <div className="w-[50%] sm:w-[50%] h-[0.0625rem] bg-primary" />
        )}
      </div>
      {des && <span className="text-[1rem] font-[400] text-gray">{des}</span>}
    </div>
  );
};

const ErrorMessage = ({ message }) => {
  return (
    <span className="text-[0.82rem] text-[#ff672b] font-400">{message}</span>
  );
};

const CvButton = () => {
  return (
    <Link
      href="../Assets/Rohit Kumar (React Js Developer).pdf"
      target="_blank"
    >
      <div className=" relative backdrop-blur-sm bg-light_primary border  border-primary text-white px-7 py-3 flex flex-row gap-2 items-center mx-auto ">
        <span className="text-3xl text-primary">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
        </span>
        <span className="text-[1rem]">Download CV</span>
      </div>
    </Link>
  );
};

export { Logo, PrimaryButton, SectionHeading, ErrorMessage, CvButton };
