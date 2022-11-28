import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import face from "../photos/face.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center   text-white">
      {/* LeftSide */}
      <div className="flex items-center gap-4">
        <div className="">
          <p className="text-[#eb3b75]">Series</p>
          <div className="w-full h-[2px] bg-[#eb3b75]"></div>
        </div>
        <div className="group relative">
          <p className=" ">Movie</p>
          <div className=" hover:flex   absolute hidden group-hover:inline-flex w-full h-[2px] bg-[#eb3b75]   "></div>
        </div>
        <div className="relative group">
          <p className=" ">Anime</p>
          <div className="absolute hidden group-hover:inline-flex w-full h-[2px] bg-[#eb3b75]"></div>
        </div>
      </div>
      {/* MiddleSide */}
      <div className="hidden md:flex relative    items-center">
        <input
          type="text"
          className="bg-white rounded-full py-[3.5px] placeholder:text-[14px]  outline-0 pl-8"
          placeholder="Search"
        />
        <div className="absolute left-2">
          <RiSearchLine />
        </div>
      </div>
      {/* RightSide */}
      <div className="flex items-center  gap-4  ">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="">
            <p className="text-[14px]">Premium Member</p>
          </div>
        </div>
        <div className="  relative">
          <div className="absolute right-[0.1rem] top-[0.1rem] w-2 h-2 rounded-full bg-red-600"></div>
          <FaRegBell className="text-[22px]" />
        </div>
        <div className="relative">
          <div className="flex w-10 h-10 rounded-full">
            <img src={face} alt="" className="object-cover rounded-full" />
          </div>
          <div className="absolute right-0 bottom-1 h-2 w-2  rounded-full  bg-green-500 p-1 border"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
