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
import ProductCreate from "@/pages/product/ProductCreate.jsx";
import ProductEdit from "@/pages/product/ProductEdit.jsx";
import PrefetchProducts from "@/components/product/PrefetchProducts.jsx";
import ProductDetail from "@/pages/product/ProductDetail.jsx";
import AuthRequired from "@/components/auth/AuthRequired.jsx";
import AuthPersist from "@/components/auth/AuthPersist.jsx";
import UserDetail from "@/pages/user/UserDetail.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<AuthPersist />}>
      <Route path="/" element={<BaseLayout />}>
        <Route element={<PrefetchProducts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user/:userId" element={<UserDetail />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<ProductDetail />} />
            <Route element={<AuthRequired />}>
              <Route path="create" element={<ProductCreate />} />
              <Route path="edit/:productId" element={<ProductEdit />} />
            </Route>
          </Route>
          <Route element={<AuthRequired />}>
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Route>
  </>,
));

export default router;