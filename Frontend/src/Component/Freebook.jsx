import React from "react";
import list from "../../public/list.json";
import Card from "./Card";

function Freebook() {
  const filterData = list.filter((data) => data.category === "free");
  console.log(filterData);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mb-6">
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat
            culpa perferendis quod, tempora non quasi doloribus vitae laboriosam
            officiis deserunt adipisci in optio omnis sit harum voluptatem vero
            aspernatur.
          </p>
        </div>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Freebook;
