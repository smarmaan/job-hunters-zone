import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="md:mx-24 md:flex gap-20 justify-between bg-slate-300 my-20 rounded-3xl ">
      <div
        className="mx-5 p-6
       md:ml-14 md:text-start my-12 lg:my-auto"
      >
        <div className=" text-5xl font-extrabold">
          One Step <br /> Closer To Your <br />
          <span className="background-gradient">Dream Job</span>
        </div>

        <div className="mt-10 text-xl font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </div>

        <Link to="/blog">
          {" "}
          <button className="btn mt-10">Get Started</button>
        </Link>
      </div>
      <div className=" mx-auto md:mx-0 w-[350px]  h-[400px] md:w-[1600px] md:h-[800px] flex items-center  justify-center ">
        <img className="w-full" src="All Images/P3OLGJ1 copy 1.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
