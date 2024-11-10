import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout.jsx";
import Home from "@/pages/site/Home.jsx";
import About from "@/pages/site/About.jsx";
import NotFound from "@/pages/site/NotFound.jsx";
import Login from "@/pages/auth/Login.jsx";
import AuthLayout from "@/layouts/AuthLayout.jsx";
import Register from "@/pages/auth/Register.jsx";
import ProductList from "@/pages/product/ProductList.jsx";
import Cart from "@/pages/site/Cart.jsx";
import Checkout from "@/pages/site/Checkout.jsx";
import Orders from "@/pages/site/Orders.jsx";
import Profile from "@/pages/auth/Profile.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<ProductList />} />
      <Route path="cart" element={<Cart />} />
      <Route path="orders" element={<Orders />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>

  </>,
));

export default router;