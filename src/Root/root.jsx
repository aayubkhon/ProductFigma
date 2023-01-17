import React from "react";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import AboutCourse from "../Components/Home 2";
import FindCourse from "../Components/Home 3";
import AboutPrice from "../Components/Home 4";
import AboutJoin from "../Components/Home 5";
import AboutTeachers from "../Components/Home 6";
import Navbar from "../Components/Navbar/nav";
import LatestPost from "../Components/Our Course";
import Testimonials from "../Components/Testimonials";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutCourse />
      <FindCourse />
      <AboutPrice />
      <AboutJoin />
      <AboutTeachers />
      <Testimonials />
      <LatestPost/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Root;
