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
import Iosappdevelopment from "./Component/Iosappdevelopment";
import Androidappdevelopment from "./Component/Androidappdevelopment";
import Hybridappdevelopment from "./Component/Hybridappdevelopment";
import Progressivewebappdevelopment from "./Component/Progressivewebappdevelopment";
import Flutterappdevelopment from "./Component/Flutterappdevelopment";
import Ionic from "./Component/Ionicappdevelopment"; 
import Kotlinappdevelopment from "./Component/Kotlinappdevelopment";
import Casestudy from "./Component/Casestudy";  
import Careers from "./Component/Careers";
import Detailblog from "./Component/blog-detail-page/Detailblog";
import Careerdetail from "./Component/career-detail-page/Careerdetail";
import Casestudydetail from "./Component/casestudy-detail-page/Casestudydetail";
import Reactnativemobileappdevelopment from "./Component/Reactnativemobileappdevelopment";
import { ScrollToTop } from "./Component/ScrollTop";
import FooterContactform from "./Component/FooterContactform";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="services" element={<Service />} />
        <Route path="Ios-app-development" element={<Iosappdevelopment />} />
        <Route
          path="android-app-development"
          element={<Androidappdevelopment />}
        />
        <Route
          path="flutter-app-development"
          element={<Flutterappdevelopment />}
        />
        <Route path="ionic-app-development" element={<Ionic />} />\
        <Route
          path="kotlin-app-development"
          element={<Kotlinappdevelopment />}
        />
        <Route
          path="hybrid-app-development"
          element={<Hybridappdevelopment />}
        />
        <Route
          path="progressive-web-app-development"
          element={<Progressivewebappdevelopment />}
        />
        <Route path="case-study" element={<Casestudy />} />
        <Route path="careers" element={<Careers />} />
        <Route path="detail-blog" element={<Detailblog />} />
        <Route path="career-detail" element={<Careerdetail />} />
        <Route path="case-study-detail" element={<Casestudydetail />} />
        <Route
          path="react-native-mobile-app-development"
          element={<Reactnativemobileappdevelopment />}
        />
        <Route path="Footer-Contact-form" element={<FooterContactform />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
