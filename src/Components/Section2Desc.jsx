import React from "react";
import Scwer from "./Scwer";
function Section2Desc() {
  return (
    <div className="  flex  gap-4 justify-center items-start p-2.5 flex-col col-start-1 col-end-1 row-start-1 row-end-4 md:col-start-2 md:col-end-5 md:row-start-1 md:row-end-1  md:p-5  ">
      <div>
        <h1 className="text-3xl text-black ">Deals Of The Month</h1>
      </div>
      <div>
        <p className="text-start text-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          provident, odit maxime excepturi expedita numquam natus eius omnis
          debitis error minus repudiandae reprehenderit pariatur dolorum aut
          tempore similique perferendis cumque!
        </p>
      </div>
      <div>
        <button className="bg-black text-white rounded-[10px] pb-1 pt-1 pl-2.5 pr-2.5 text-[10px] w-[100px]">
          Buy Now{" "}
        </button>
      </div>
      <div>
        <p className="">Hurry, Before It’s Too Late!</p>
      </div>
      <div className="flex justify-center items-center flex-row gap-6">
        <Scwer nbr="2" text="day" />
        <Scwer nbr="6" text="h" />
        <Scwer nbr="5" text="m" />
        <Scwer nbr="30" text="s" />
      </div>
    </div>
  );
}

export default Section2Desc;
