import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Layout from "./components/layout/Layout";
import Blog from "./pages/blog/Blog.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Shop from "./pages/shop/Shop.jsx";
import "./style/App.scss";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
