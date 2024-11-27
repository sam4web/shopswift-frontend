import { RouterProvider } from "react-router-dom";
import router from "@/routes/router.jsx";
import useTheme from "@/hooks/useTheme.js";
import Toast from "@/components/common/Toast.jsx";

const App = () => {
  useTheme();
  return (
    <>
      <Toast />
      <RouterProvider router={router} />
    </>
  );
};

export default App;