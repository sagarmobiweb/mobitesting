import React, { useEffect } from "react";
import "../node_modules/aos/dist/aos.css";
import Aos from "aos";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Contactus from "./Component/Contactus";
import Service from "./Component/Service";
import Blog from "./Component/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="MW/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="" element={<Blog />} />
        <Route path="" element={<Contactus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;




