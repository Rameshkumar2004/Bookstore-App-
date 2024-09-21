import React from "react";
import { IoIosSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {

    

  return (
    <>
      <div className="flex-col w-full bg-white text-black  flex">
        <div className="flex flex-col md:flex-row items-center justify-evenly text-center m-5 md:m-16  md:py-5">
          {/* Contact Info Section */}
          <div className="text-black p-3 w-full md:w-[50%] items-center justify-center text-center flex-col flex">
            <h3 className="p-3 font-bold text-3xl">Contact</h3>
            <div className="mt-5">
              <div className="flex items-center gap-3 md:gap-5 justify-center text-center text-lg md:text-3xl">
                <MdEmail /> rameshcse918@gmail.com
              </div>
              <div className="flex items-center gap-3 md:gap-5 mt-2 text-lg md:text-3xl">
                <IoCall /> + 7368-828-984
              </div>
              <div className="flex items-center gap-5 md:gap-5 mt-2 text-lg md:text-3xl">
                <a href=""><LuInstagram /></a> 
                <a href=""><FaTwitter /> </a>
                <a href=" https://github.com/Rameshkumar2004"><FaGithub /></a>
                <a href="Linkedin.com/in/ramesh-kumar-7147a8226/"><FaLinkedin /></a>
              </div>
              <div className="p-1 w-[120px] md:w-[150px] text-white bg-blue-600 hover:bg-pink-500 items-center flex justify-center rounded-xl mt-5 gap-2">
                <FaStreetView size={20} />
                <a href="">Follow me</a>
              </div>
            </div>
          </div>

          {/* Email Form Section */}
          <div className="w-full md:w-[50%] items-center justify-center text-center flex-col flex mt-10 md:mt-0">
            <h3 className="text-black font-bold text-3xl mb-5">
              Email <span className="text-yellow-400">Me</span> ✈️
            </h3>
            <input
              type="text"
              placeholder="Email"
              className="border-1  border-black p-3 bg-slate-500 rounded-lg w-[90%] md:w-[70%] mb-3"
            />
            <input
              type="text"
              placeholder="Name"
              className="border-1 border-black p-3 bg-slate-500 rounded-lg w-[90%] md:w-[70%] mb-3"
            />
            <textarea
              placeholder="Message"
              className="border-1 border-black bg-slate-500 p-3 rounded-lg w-[90%] md:w-[70%] h-28 mb-3"
            />
            <div className="flex bg-blue-500 hover:bg-pink-500 p-3 text-center rounded-lg justify-center items-center mb-2 w-[50%] md:w-[30%] text-white">
              <IoIosSend size={25} />
              <button className="ml-2">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
