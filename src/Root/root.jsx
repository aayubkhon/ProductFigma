import React from 'react'
import Home from '../Components/Home'
import AboutCourse from '../Components/Home 2'
import FindCourse from '../Components/Home 3'
import AboutPrice from '../Components/Home 4'
import Navbar from '../Components/Navbar/nav'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
      <AboutCourse/>
      <FindCourse/>
      <AboutPrice/>
    </div>
  )
}

export default Root