import { RouterProvider } from "react-router-dom";
import router from "@/routes/router.jsx";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;