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

import "./style/App.scss";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="compare" element={<Comparing />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="forgot-password" element={<ForgotPass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
