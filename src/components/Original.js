import React from "react";

const Original = ({ img }) => {
  return (
    <div className="flex h-40  md:h-60 w-full  mx-auto">
      <img src={img} alt="" className="object-cover w-full " />
    </div>
  );
};

export default Original;
