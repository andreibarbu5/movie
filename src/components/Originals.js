import React from "react";
import img1 from "../photos/img1.jpg";
import img2 from "../photos/img2.jpg";
import img3 from "../photos/img3.jpg";
import Original from "./Original";

const Originals = () => {
  const imgs = [img1, img2, img3];
  return (
    <div>
      <p className="pt-8 text-white font-bold text-[20px]">Originals</p>
      <div className="grid grid-cols-2  sm:grid-cols-3  items-center justify-between pt-4 gap-4">
        {imgs.map((img) => (
          <Original img={img} />
        ))}
      </div>
    </div>
  );
};

export default Originals;
