import { ToastContainer } from "react-toastify";
import useTheme from "@/hooks/useTheme.js";

const Toast = () => {
  const { theme } = useTheme();
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      limit={3}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition: Bounce
    />
  );
};

export default Toast;