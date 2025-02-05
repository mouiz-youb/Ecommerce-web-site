import React from "react";
import "./Caroucel.jsx";
import Caroucel from "./Caroucel.jsx";
import Section2Desc from "./Section2Desc.jsx";
import "../index.css";
function Section2() {
  return (
    <div className=" section2 relative flex flex-col items-center justify-center md:grid md:grid-cols-10 md:grid-rows-1 md:gap-4 md:items-center md:justify-center">
      <Section2Desc />
      <Caroucel />
    </div>
  );
}

export default Section2;
{
  /* <div className="bg-blue-800 relative flex justify-center items-center h-screen flex-col  md:cols-start-4 md:cols-end-10 md:row-start-1 md:row-end-1"> */
}
{
  /* {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          className={`rounded-[12px] w-[200px] h-[150px]`}
          initial="center"
          animate={positions[positionIndex[index]]}
          variants={imagevariants2}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", width: "40%" }}
        />
      ))}
      <button
        className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 z-50 absolute top-[400px]"
        onClick={handeleNext}
      >
        Next
      </button> */
}
{
  /* </div> */
}
