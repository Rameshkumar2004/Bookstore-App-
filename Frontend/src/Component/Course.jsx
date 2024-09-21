import React from "react";
import list from "../../public/list.json"
import Card from "./Card";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-center items-center text-2xl font-semibold md:text-4xl">
            We`re delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12 text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ad
            modi officia laborum, quas quam? Ratione quasi veritatis iusto,
            voluptas similique delectus sit nisi, quo doloribus obcaecati vel
            dolor vitae. Doloribus quos dolores minus quam possimus facilis
            voluptatem assumenda in error, tempora dolor impedit unde,
            repellendus nam sunt optio pariatur, vel saepe minima. Nemo, eum
            pariatur exercitationem repellendus eius facilis?
          </p>
          
          <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 text-white mt-6">Back</button>
          {/* <link to className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 text-white mt-6">Back</link>  */}
          
        </div>
        <div className="mt-12 grid grid-cols-3">
            {list.map((item)=>(
                <Card key={item.id} item={item}/>
            ))}
        </div>
      </div>
    </>
  );
}

export default Course;
