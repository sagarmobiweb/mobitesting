import React, { useEffect } from "react";
import "../node_modules/aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Contactus from "./Component/Contactus";
import Service from "./Component/Service";
import Blog from "./Component/Blog";
import Ios_solutions from "./Component/Ios_solutions";
import Android from "./Component/Android";
import Hybrid from "./Component/Hybrid";
import Progressiveweb from "./Component/Progressiveweb";
import Flutter from "./Component/Flutter";
import Ionic from "./Component/Ionic";
import Kotline from "./Component/Kotline";
import Casestudy from "./Component/Casestudy";
import Careers from "./Component/Careers";
import Detailblog from "./Component/blog-detail-page/Detailblog";
import Careerdetail from "./Component/career-detail-page/Careerdetail";
import Casestudydetail from "./Component/casestudy-detail-page/Casestudydetail";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="service" element={<Service />} />
        <Route path="ios_solutions" element={<Ios_solutions />} />
        <Route path="android" element={<Android />} />
        <Route path="flutter" element={<Flutter />} />
        <Route path="ionic" element={<Ionic />} />
        <Route path="kotline" element={<Kotline />} />
        <Route path="hybrid" element={<Hybrid />} />
        <Route path="progressiveweb" element={<Progressiveweb />} />
        <Route path="casestudy" element={<Casestudy />} />
        <Route path="careers" element={<Careers />} />
        <Route path="detailblog" element={<Detailblog />} />
        <Route path="careerdetail" element={<Careerdetail />} />
        <Route path="casestudydetail" element={<Casestudydetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
