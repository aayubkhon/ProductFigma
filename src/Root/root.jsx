import React from "react";
import ContactUs from "../Components/ContactUs";
// import Footer from "../Components/Footer";
import Home from "../Components/Home";
import AboutCourse from "../Components/Home 2";
import FindCourse from "../Components/Home 3";
// import AboutPrice from "../Components/Home 4";
// import AboutJoin from "../Components/Home 5";
import AboutTeachers from "../Components/Home 6";
import Navbar from "../Components/Navbar/nav";
// import LatestPost from "../Components/Our Course";
// import Testimonials from "../Components/Testimonials";
import { Route,Routes } from 'react-router-dom';

const Root = () => {
  return (
  <div>
      <Routes>
      <Route element={<Navbar/>}>
        <Route exact path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<AboutCourse/>}/>
        <Route path={"/blog"} element={<FindCourse/>}/>
        <Route path={"/contact"} element={<ContactUs/>}/>
        <Route path={"/courses"} element={<AboutTeachers/>}/>
      </Route>
      </Routes>
  </div>
  );
};

export default Root;
