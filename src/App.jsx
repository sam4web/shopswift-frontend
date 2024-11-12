import { RouterProvider } from "react-router-dom";
import router from "@/routes/router.jsx";
import useTheme from "@/hooks/useTheme.js";

const App = () => {
  useTheme();
  return <RouterProvider router={router} />;
};

export default App;