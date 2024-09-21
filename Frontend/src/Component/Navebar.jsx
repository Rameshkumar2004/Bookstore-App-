import React, { useRef } from 'react';
import { FaRegMoon } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Login from '../Component/Login';

function Navebar() {
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <div className='bg-gray-800 text-white w-full h-[65px] max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0'>
      <div className='grid grid-flow-col items-center justify-between p-2'>
        <div className='items-center'>
          <h3 className='font-bold text-[30px]'>Book <span className='text-yellow-400'>Store</span></h3>
        </div>
        <div className='flex items-center'>
          <ul className='flex gap-10 font-bold'>
            <li className='hover:border-b-2 border-solid border-red-500'>
              <a href="/">Home</a>
            </li>
            <li className='hover:border-b-2 border-solid border-red-500'>
              <a href="/course">Course</a>
            </li>
            <li className='hover:border-b-2 border-solid border-red-500'>Contact</li>
            <li className='hover:border-b-2 border-solid border-red-500'>About</li>
          </ul>
          <div className='flex gap-5 ml-5 items-center'>
            <input type="text" placeholder='Search here' className='w-72 rounded-lg p-1 px-2 text-black' />
            <FaRegMoon size={20} className='' />
            <button 
              className='bg-blue-600 p-1 px-2 rounded-lg font-bold hover:bg-pink-500'
              onClick={openDialog}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {/* Include the Login component and pass the ref */}
      <Login dialogRef={dialogRef} />
    </div>
  );
}

export default Navebar;
