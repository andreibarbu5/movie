import React from "react";
import logo from "../photos/sidelogo.png";
import { AiFillAppstore } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillAwardFill } from "react-icons/bs";
import SideBtn from "./SideBtn";

const LeftSide = () => {
  const sideBtns = [
    { name: "Home", logo: <AiFillAppstore /> },
    { name: "Browse", logo: <MdOutlineExplore /> },
    { name: "Awards", logo: <BsFillAwardFill /> },
  ];
  const side2Btns = [
    { name: "History", logo: <AiFillAppstore /> },
    { name: "Favorite", logo: <MdOutlineExplore /> },
    { name: "Downloaded", logo: <BsFillAwardFill /> },
  ];
  return (
    <div className="text-white pt-8  px-6 w-[15vw] border-r border-gray-600 ">
      {/* Logo */}
      <div className="w-20 h-20">
        <img src={logo} alt="" />
      </div>

      {/* Menu */}
      <div className="">
        <p>MENU</p>
        <ul className="pt-4 space-y-6">
          {sideBtns.map((sideBtn) => (
            <SideBtn name={sideBtn.name} logo={sideBtn.logo} />
          ))}
        </ul>
      </div>
      {/* Menu */}
      <div className="pt-6">
        <p>Library</p>
        <ul className="pt-4 space-y-6">
          {side2Btns.map((sideBtn) => (
            <SideBtn name={sideBtn.name} logo={sideBtn.logo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
