import React from "react";

function Scwer(props) {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div className="shadow-lg text-2xl w-[50px] h-[50px] flex justify-center items-center rounded-[10px] ">
        {props.nbr}
      </div>
      <p className="text-3xl">{props.text}</p>
    </div>
  );
}

export default Scwer;
