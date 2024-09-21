import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { IoIosHeartDislike } from "react-icons/io";
import './App.css'
import  Home from "./Home/Home"
import Navebar from './Component/Navebar';
import Main from './Component/Main';
import Course from './Component/Course';
import Courses from './Courses/Courses';
import Signup from './Component/Signup';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navebar/> */}
    {/* <Signup/> */}
     <Main/>
    {/* <Courses/> */}
    </>
  )
}

export default App
