import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const success = toast.success;
const info = toast.info;
const error = toast.error;
const warning = toast.warning;

toast.success = (content, options) => {
  success(content, { ...options });
};

toast.info = (content, options) => {
  info(content, { ...options });
};

toast.error = (content, options) => {
  error(content, { ...options });
};

toast.warning = (content, options) => {
  warning(content, { ...options });
};

toast.onChange((payload) => {
  // eslint-disable-next-line default-case
  switch (payload.status) {
    case "added":
      // new toast added
      break;
    case "updated":
      // toast updated
      break;
    case "removed":
      // toast has been removed
      break;
  }
});

export { toast, ToastContainer };
