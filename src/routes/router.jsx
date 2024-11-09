import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout.jsx";
import Home from "@/pages/Home.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path={"/"} element={<BaseLayout />}>
      <Route index element={<Home />} />
    </Route>
  </>,
));

export default router;