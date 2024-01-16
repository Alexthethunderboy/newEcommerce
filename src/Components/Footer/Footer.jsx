import React from "react";
import { FaArrowRight, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1D1D18] text-white">
      <div className="md:p-[5rem] p-5 md:pb-[2rem]">
        <div className=" flex md:flex-row flex-col gap-5 md:gap-0 md:justify-between">
        
        <div>
          <h1 className="text-[#c19a6b] font-bold text-4xl">Furns</h1>
        </div>
        <div>
          <ul>
            <li className="font-semibold">Shop</li>
            <li>Furniture Store</li>
            <li>Interior Design</li>
            <li>Ceramics</li>
            <li>Decoration</li>
          </ul>
        </div>
        <div className="mb-[2rem] md:mb-0">
          <ul>
            <li className="font-semibold">About us</li>
            <li className="font-semibold">Contact</li>
            <li className="font-semibold">Cart</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-center">Subscribe to our newsletter</h4>
          <div className="flex justify-center items-center">
            <input
              type="email"
              id=""
              placeholder="Email address"
              className="p-2"
            />
            <div className="p-2 bg-white">
              <button className="bg-[#c19a6b] text-white px-2 flex items-center justify-center gap-1 ">
                <span>Subscribe</span>
                <FaArrowRight />
                <span></span>
              </button>
            </div>
          </div>
        </div>
          </div>
      <div className="bg-white h-[1px] w-[100%] mt-[5rem] mb-[1rem]"></div>
      <div className="flex justify-end items-center gap-5">
        <p>Terms and Policy</p>
        <div className="flex gap-2"><span><FaTwitter/></span><span><FaFacebook/></span><span><FaLinkedin/></span></div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
