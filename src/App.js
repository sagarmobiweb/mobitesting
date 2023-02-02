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

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="service" element={<Service />} />
        <Route path="ios" element={<Ios />} />
           <Route path="android" element={<Android />} />
        <Route path="flutter" element={<Flutter />} />
         <Route path="ionic" element={<Ionic />} />
            <Route path="kotline" element={<Kotline />} />
        <Route path="hybrid" element={<Hybrid />} />
        <Route path="progressiveweb" element={<Progressiveweb />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
