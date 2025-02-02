import React from "react";
import { Link } from "react-router-dom";
function NavbarA() {
  return (
    <div className="nav-bar grid grid-cols-10 grid-rows-1   ">
      <div className="col-start-2 col-end-3 text-2xl ">logo</div>
      <div className="col-start-3 col-end-7 flex justify-center items-center flex-row gap-7 sm:gap-5">
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </div>
      <div className="col-start-7 col-end-9 grid grid-cols-2 grid-rows-1 ">
        <button>Sign up</button>
        <button>Log in </button>
      </div>
    </div>
  );
}

export default NavbarA;
