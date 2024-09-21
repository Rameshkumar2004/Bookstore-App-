import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import Home from "../Home/Home";
import Courses from '../Courses/Courses';
import Signup from './Signup';
import Navebar from './Navebar';
import Contact from './Contact';
// import Course from "./Course"

function Main() {
  return (
    <BrowserRouter>
    <Navebar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Contact' element={<Contact/>}/>


        

    </Routes>
    </BrowserRouter>
  )
}

export default Main
