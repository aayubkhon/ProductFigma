import React from 'react'
import Home from '../Components/Home'
import AboutCourse from '../Components/Home 2'
import FindCourse from '../Components/Home 3'
import Navbar from '../Components/Navbar/nav'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
      <AboutCourse/>
      <FindCourse/>
    </div>
  )
}

export default Root