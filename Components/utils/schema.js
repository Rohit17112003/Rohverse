import * as Yup from "yup";

const contactValidationSchema = Yup.object({
  name: Yup.string()
    .min(4, "Name must contain at least 4 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(/^\S*$/, "Email cannot contain leading or trailing white spaces"),
  subject: Yup.string()
    .min(5, "Subject must contain at least 5 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must contain at least 10 characters")
    .required("Message is required"),
});

export { contactValidationSchema };
