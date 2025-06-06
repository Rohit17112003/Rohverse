import toast from "react-hot-toast";

const successToast = (message) => {
  toast.success(message, {
    style: {
      background: "#C778DD",
      color: "#FFFFFF",
      borderRadius: "2px",
      boxShadow: "none",
    },
  });
};

const errorToast = (message) => {
  toast.error(message, {
    style: {
      background: "#C778DD",
      color: "#FFFFFF",
      borderRadius: "2px",
      boxShadow: "none",
    },
  });
};
export { successToast, errorToast };
