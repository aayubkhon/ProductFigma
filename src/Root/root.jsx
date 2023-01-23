import React from "react";
import ContactUs from "../Components/ContactUs";
import Home from "../Components/Home";
import AboutPrice from "../Components/Home 4";
import AboutTeachers from "../Components/Home 6";
import Navbar from "../Components/Navbar/nav";
import LatestPost from "../Components/Our Course";
import { Route,Routes, } from "react-router-dom";
const Root = () => {
  return (
  <div>
      <Routes>
      <Route element={<Navbar/>}>
        <Route exact path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<AboutPrice/>}/>
        <Route path={'/blog'} element={<AboutTeachers/>}/>
        <Route path={'/contact'} element={<ContactUs/>}/>
        <Route path={'/courses'} element={<LatestPost/>}/>
      </Route>
      </Routes>
  </div>
  );
};

export default Root;
