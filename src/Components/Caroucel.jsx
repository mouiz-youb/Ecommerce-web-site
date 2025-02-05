import React, { useState } from "react";
import { motion } from "framer-motion";
import imageSlider1 from "../images/imageSlider1.svg";
import imageSlider2 from "../images/imageSlider2.svg";
import imageSlider3 from "../images/imageSlider3.svg";
function Caroucel() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
  const handeleNext = () => {
    setPositionIndex((prevIndex) => {
      const newPosition = prevIndex.map((prevIndex) => (prevIndex + 1) % 5);
      return newPosition;
    });
  };
  const images = [
    imageSlider1,
    imageSlider2,
    imageSlider1,
    imageSlider1,
    imageSlider2,
  ];
  const positions = ["center", "left1", "left", "right", "right1"];
  const imagevariants = {
    center: {
      x: "0",
      scale: 0.8,
      zIndex: 5,
    },
    left1: {
      x: "-50%",
      scale: 0.5,
      zIndex: 2,
    },
    left: {
      zIndex: 1,
      scale: 0.3,
      x: "-90%",
    },
    right: {
      zIndex: 1,
      scale: 0.3,
      x: "90%",
    },
    right1: {
      zIndex: 2,
      scale: 0.5,
      x: "50%",
    },
  };
  const imagevariants2 = {
    center: {
      zIndex: 5,
      width: "[200px]",
      height: "[250px]",
      opacity: 1,
      left: "-10%",
      margin: "0px 20px ",
    },
    left1: {
      zIndex: 4,
      width: "[150px]",
      height: "[150px]",
      bottom: "80%",
      opacity: 0.8,
      margin: "0px 20px ",
      left: "30%",
    },
    left: {
      zIndex: 3,
      width: "[150px]",
      height: "[150px]",
      bottom: "80%",
      opacity: 0.6,
      margin: "0px 20px ",
      left: "50%",
    },
    right: {
      zIndex: 1,
      width: "[150px]",
      height: "[150px]",
      bottom: "80%",
      opacity: 0.4,
      margin: "0px 20px ",
      left: "70%",
    },
    right1: {
      zIndex: 0,
      width: "[150px]",
      height: "[150px]",
      bottom: "80%",
      opacity: 0.2,
      margin: "0px 20px ",
      left: "90%",
    },
  };
  return (
    <div className="  text-white   relative flex justify-center items-center flex-col gap-5 col-start-1 col-end-1 row-start-4 row-end-10 md:col-start-5 md:col-end-10 md:row-start-1 md:row-end-1 ">
      <div className="flex justify-center items-center gap-5 flex-col  ">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            className={` absolute rounded-[12px] w-[40%] md:w-[20%] lg:w-[40%] `}
            initial="center"
            animate={positions[positionIndex[index]]}
            variants={imagevariants}
            transition={{ duration: 0.5 }}
            // style={{ position: "absolute" }}
          />
        ))}
      </div>
      <button
        className="flex  justify-center items-center text-2xl bg-black text-white rounded-[15px]   w-[80px] h-[30px] z-[100] md:left-[10%] absolute bottom-[10%] lg:bottom-[10%]  "
        onClick={handeleNext}
      >
        next
      </button>
    </div>
  );
}

export default Caroucel;
