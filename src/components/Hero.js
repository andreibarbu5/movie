import React from "react";
import vikings from "../photos/vikings.jpg";

const Hero = () => {
  return (
    <div className="flex w-full h-[15rem] sm:h-[20rem]  md:h-[27rem] xl:h-[35rem] pt-8 rounded-full">
      <img
        src={vikings}
        alt=""
        className="object-cover w-full rounded-[1rem]"
      />
    </div>
  );
};

export default Hero;
