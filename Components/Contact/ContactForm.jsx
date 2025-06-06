"use client";
import InputControl from "./InputControl";
import { ErrorMessage, PrimaryButton } from "../Common";
import { app } from "../../app/firebase";
import { getDatabase, set, ref } from "firebase/database";
import { useState } from "react";
import { contactValidationSchema } from "../utils/schema";
import { errorToast, successToast } from "../utils/message";
import { Toaster } from "react-hot-toast";
const ContactForm = () => {
  // details state
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const database = getDatabase(app);

  // Function to store the input field data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await contactValidationSchema?.validate(data, {
        abortEarly: false,
      });
      set(ref(database, "messages/" + `${data.name} - ${data.message}`), data);
      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      successToast("Message sent");
    } catch (error) {
      const validationErrors = {};
      error?.inner?.forEach((error) => {
        validationErrors[error?.path] = error.message;
      });
      // Setting Errors
      setErrors(validationErrors);

      !error?.inner && errorToast("Something went wrong");
    }
  };

  return (
    <form onSubmit={sendMessage} className="w-full  flex flex-col gap-2">
      <Toaster />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="w-full flex flex-col gap-1">
          <InputControl
            value={data.name}
            name="name"
            placeholder="name"
            type="text"
            onChange={handleChange}
          />
          {errors?.name && <ErrorMessage message={errors?.name} />}
        </div>

        <div className="w-full flex flex-col gap-1">
          <InputControl
            value={data.email}
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          {errors?.email && <ErrorMessage message={errors?.email} />}
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <InputControl
          value={data.subject}
          name="subject"
          placeholder="subject"
          type="text"
          onChange={handleChange}
        />
        {errors?.subject && <ErrorMessage message={errors?.subject} />}
      </div>

      <div className="w-full flex flex-col gap-1">
        <textarea
          value={data.message}
          id="inputField"
          name="message"
          rows="5"
          placeholder="Message"
          className="border w-full border-gray p-[0.7rem] text-gray text-[1rem] outline-none bg-[#fff0] overflow-visible"
          onChange={handleChange}
        />
        {errors?.message && <ErrorMessage message={errors?.message} />}
      </div>

      <PrimaryButton
        type="submit"
        childClass="w-full text-white bg-light_primary border border-gray hover:border-primary"
        text="Send"
      />
    </form>
  );
};

export default ContactForm;
