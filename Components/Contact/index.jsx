import React from "react";
import { SectionHeading } from "../Common";
import Support from "./Support";
import ContactForm from "./ContactForm";
import Message from "./Message";

const Contact = () => {
  return (
    <>
      <div className="w-full ">
        <div className="container flex flex-col gap-[2rem]">
          <SectionHeading isLine={true} icon="#" heading="contact" />

          <div className="w-full grid lg:grid-cols-2 gap-5">
            <div className=" flex flex-col gap-[1rem]">
              <span className="description">
                I am interested in freelance opportunities. However, if you have
                other request or question, do not hesitate to contact me
              </span>
              <div className="w-full flex flex-col gap-2">
                <Message />
                {/* <Support /> */}
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-col gap-4 border border-gray p-3 lg:p-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
