import React from "react";
import Bannerimg from "../assets/Bannerimg.jpg"

function Banner() {
  return (
    <div className="   flex  text-black max-w-screen-2xl container mx-auto md:px-20 px-4 mb-3  mt-20">
      <div className="w-1/2   mt-10">
        <div className="space-y-12">
          <h1 className=" font-bold text-4xl">
            Hello, welcomes here to learn somting{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, animi.
            Dolorem voluptatum adipisci ipsum quia? Fugit neque, iure eligendi
            dolor totam et corporis cumque ipsam laboriosam modi eaque, sed a!
          </p>
          <input type="text"  placeholder="Enter your email to login" className=" p-1 px-2 w-[500px] rounded-lg border" />  
        
        </div>
        <button className="bg-pink-500 p-2 rounded-lg font-bold w-32 mt-6">Secondary</button>
        
      </div>
      <div className="w-1/2 p-2 px-5  mt-5  flex items-center justify-center">
      <img src={Bannerimg} alt="Img Error"  className="w-96 h-96"/>
      </div>
    </div>
  );
}

export default Banner;
