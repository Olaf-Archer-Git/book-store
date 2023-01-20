import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Layout from "./components/layout/Layout";
import Blog from "./pages/blog/Blog.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Comparing from "./pages/comparing/Comparing.jsx";
import Favorite from "./pages/favorite/Favorite.jsx";
import Login from "./pages/login/Login.jsx";
import ForgotPass from "./pages/forgotPass/ForgotPass.jsx";
import Registration from "./pages/registration/Registration.jsx";
import ResetPass from "./pages/resetPass/ResetPass.jsx";
import SingleBlog from "./pages/singleBlog/SingleBlog.jsx";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy.jsx";
import RefundPolicy from "./pages/refundPolicy/RefundPolicy.jsx";
import Shopping from "./pages/shopping/Shopping.jsx";
import MainProduct from "./pages/mainProduct/MainProduct.jsx";
import Cart from "./pages/cart/Cart.jsx";
import CheckOut from "./pages/checkout/CheckOut.jsx";

import "./style/App.scss";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<MainProduct />} />
          <Route path="compare" element={<Comparing />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="forgot-password" element={<ForgotPass />} />
          <Route path="reset-password" element={<ResetPass />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
