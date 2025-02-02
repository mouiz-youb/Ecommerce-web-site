import React from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { useClick } from "../Store/UseClick";
import { Link } from "react-router-dom";
function NavbarM() {
  const click = useClick((state) => state.click);
  const setClick = useClick((state) => state.setClick);
  return (
    <div className="nav-bar md:grid md:grid-cols-10 md:grid-rows-1  ">
      <div className="logo flex justify-center items-center text-2xl md:flex md:justify-center md:items-center md:col-start-1 md:col-end-2   ">
        logo
      </div>
      <div className="icon flex justify-center items-center text-2xl ">
        <TfiAlignJustify
          className="z-10"
          onClick={() => setClick((prev) => !prev)}
        />
        {click ? (
          <div className="  w-screen h-screen absolute top-0 left-0 bg-blue-400 grid grid-cols-1 grid-rows-10 ">
            <div className=" row-start-1 row-end-8   flex justify-center items-center flex-col gap-6">
              <Link to="/">Home</Link>
              <Link to="/">Home</Link>
              <Link to="/">Home</Link>
              <Link to="/">Home</Link>
              <Link to="/">Home</Link>
            </div>
            <div className="auth-btn row-start-8 row-end-10   grid gap-5 pl-5 pr-5 pt-10 pb-10  grid-cols-2 grid-rows-1 items-center justify-center">
              <Link
                to="/login"
                className="flex justify-center items-center   h-full rounded-2xl bg-amber-200 "
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="flex justify-center items-center   h-full rounded-2xl bg-amber-200 "
              >
                Signup
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NavbarM;
