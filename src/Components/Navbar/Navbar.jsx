import React, { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <header>
      <div className="flex md:flex-row md:mx-[5rem] md:my-0 m-3 md:gap-[35rem] md:justify-center justify-between py-1 md:items-center bg-white">
        <div>
          <h1 className="text-[#c19a6b] text-3xl font-roboto">Furns</h1>
        </div>
        <nav className={`flex flex-row justify-center gap-[5rem] md:py-3 items-center pb-12 md:static bg-black md:bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-2 pt-2 transition-all duration-500 ease-in absolute ${showMenu ? 'top-[9%]' : 'top-[-490px]'}`}>
          
          <div>
            <ul className="md:flex flex-row gap-5 w-full">
              <li className="text-white md:text-black">Home</li>
              <li className="text-[#c19a6b]">About</li>
              <li className="text-[#c19a6b]">Shop</li>
              <li className="text-[#c19a6b]">Cart</li>
              <li className="text-[#c19a6b]">Contact</li>
            </ul>
          </div>
          <div className="flex md:flex-row flex-col gap-3 md:w-auto h-8 justify-center">
            <button className="bg-[#c19a6b] text-white py-1 px-4 rounded-md text-center">
              Log In
            </button>
            <button className="text-[#c19a6b] py-1 px-4 rounded-md text-center">Sign Up</button>
          </div>
        <button className="md:hidden block">
        </button>
        </nav>
        <button className="md:hidden block" onClick={toggleMenu}>
            
            
            {showMenu ? <FaTimes/> :<FaBars/> }
        </button>
      </div>
    </header>
  );
};

export default Navbar;
