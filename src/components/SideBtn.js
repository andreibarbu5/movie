import React from "react";

const SideBtn = ({ name, logo }) => {
  return (
    <div className="flex items-center  gap-4 text-white">
      <div className="text-white text-[33px]  ">{logo}</div>
      <p className="text-[20px]">{name}</p>
    </div>
  );
};

export default SideBtn;
