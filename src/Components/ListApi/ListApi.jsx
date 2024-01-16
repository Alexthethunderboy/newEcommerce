import React from "react";
import  Img1  from "../../assets/Rectangle-7.png";
import  Img2  from "../../assets/Rectangle-8.png";
import  Img3  from "../../assets/Rectangle-9.png";
import  Img4  from "../../assets/Rectangle-10.png";

const ListApi = () => {
  return (
    <div className="m-[5rem] ">
      <div className="text-center">
        <h3 className="text-[#c19a6b] text-sm">OUR CREATIVE FORCE</h3>
        <h1 className="text-2xl font-bold">MEET OUR TEAM</h1>
      </div>

      <div className="md:flex gap-10 my-5">
        <div className="mb-20 md:mb-0">
          <img src={Img1} alt="" />
          <h1 className="mt-5 font-bold">ANNA ADRON</h1>
          <h1>STORE MANAGER</h1>
        </div>
        <div className="mb-20 md:mb-0">
          <img src={Img2} alt="" />
          <h1 className="mt-5 font-bold">ANNA ADRON</h1>
          <h1>STORE MANAGER</h1>
        </div>
        <div className="mb-20 md:mb-0">
          <img src={Img3} alt="" />
          <h1 className="mt-5 font-bold">ANNA ADRON</h1>
          <h1>STORE MANAGER</h1>
        </div>
        <div className="mb-20 md:mb-0">
          <img src={Img4} alt="" />
          <h1 className="mt-5 font-bold">ANNA ADRON</h1>
          <h1>STORE MANAGER</h1>
        </div>
      </div>
    </div>
  );
};

export default ListApi;
