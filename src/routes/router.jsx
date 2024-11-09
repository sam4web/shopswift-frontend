import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout.jsx";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import NotFound from "@/pages/NotFound.jsx";
import Login from "@/pages/Login.jsx";
import AuthLayout from "@/layouts/AuthLayout.jsx";
import Register from "@/pages/Register.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>

  </>,
));

export default router;