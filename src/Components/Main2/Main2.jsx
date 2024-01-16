import React from "react";
import img2 from '../../assets/main2.png'
const Main2 = () => {
  return (
    <div className="flex md:flex-row flex-col m-[5rem] gap-[10%]">
      <div className="md:basis-1/2 flex flex-col justify-center gap-5">
        <h1 className="text-sm text-[#c19a6b]">Furns</h1>
        <h1 className="text-2xl md:w-[35%] font-semibold">FULL-FLEDGED FURNITURE STORE & INTERIOR DESIGN</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, elit
          purus aliquam varius fusce. Proin viverra pharetra, iaculis id morbi
          tempus ut. Vel nibh vitae rutrum lorem eu turpis tempor.
        </p>
        <button className="bg-[#c19a6b] text-white py-1 px-4 rounded-md w-[7rem]">Get Started</button>
      </div>
      <div className="md:basis-1/2 md:mt-0 mt-10">
        <img src={img2} alt="" className="rounded" />
      </div>
    </div>
  );
};

export default Main2;
