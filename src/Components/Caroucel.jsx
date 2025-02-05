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
    imageSlider3,
    imageSlider1,
    imageSlider2,
  ];
  const positions = ["center", "left1", "left", "right", "right1"];
  const imagevariants = {
    center: {
      x: "0",
      scale: 1,
      zIndex: 5,
    },
    left1: {
      x: "-50%",
      scale: 0.7,
      zIndex: 2,
    },
    left: {
      zIndex: 1,
      scale: 0.5,
      x: "-90%",
    },
    right: {
      zIndex: 1,
      scale: 0.5,
      x: "90%",
    },
    right1: {
      zIndex: 2,
      scale: 0.7,
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
    <div className=" carooucel  p-5 relative flex justify-center items-center flex-col gap-5  ">
      {/* <img
        src={imageSlider1}
        alt=""
        className=" w-[150px] h-[150px] absolute bottom-[80%] left-[90%] "
      /> */}
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          className={`rounded-[12px] w-[250px] h-[200px] `}
          initial="center"
          animate={positions[positionIndex[index]]}
          variants={imagevariants}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute" }}
        />
      ))}
      <button
        className="block text-red-900 z-[100] absolute top-[130px] "
        onClick={handeleNext}
      >
        next
      </button>
    </div>
  );
}

export default Caroucel;
