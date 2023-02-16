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
import Ios from "./Component/Ios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Android from "./Component/Android";
import Hybrid from "./Component/Hybrid";
import Progressiveweb from "./Component/Progressiveweb";
import Flutter from "./Component/Flutter";
import Ionic from "./Component/Ionic";
import Kotline from "./Component/Kotline";
import Books from "./Component/Books";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="MWold/" element={<Home />} />
        <Route path="MWold/about" element={<About />} />
        <Route path="MWold/blog" element={<Blog />} />
        <Route path="MWold/contactus" element={<Contactus />} />
        <Route path="MWold/service" element={<Service />} />
        <Route path="MWold/ios" element={<Ios />} />
        <Route path="MWold/android" element={<Android />} />
        <Route path="MWold/flutter" element={<Flutter />} />
        <Route path="MWold/ionic" element={<Ionic />} />
        <Route path="MWold/kotline" element={<Kotline />} />
        <Route path="MWold/hybrid" element={<Hybrid />} />
        <Route path="MWold/progressiveweb" element={<Progressiveweb />} />
        <Route path="MWold/books" element={<Books />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
