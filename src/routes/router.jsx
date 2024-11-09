import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout.jsx";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import NotFound from "@/pages/NotFound.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path={"/"} element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </>,
));

export default router;