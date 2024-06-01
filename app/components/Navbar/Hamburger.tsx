'use client'
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="relative z-50 flex md:hidden">
      <button onClick={toggleMenu}>
        {isOpen ? <IoCloseSharp size='25' /> : <GiHamburgerMenu size='25' />}
      </button>
      <div className={`transition-transform duration-300 ease-in-out fixed top-0 right-0 h-full w-[300px] bg-gray-300 px-4 py-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end">
          <button onClick={toggleMenu}>
            <IoCloseSharp size='25' />
          </button>
        </div>
        {/* Menü içeriği buraya gelecek */}
      </div>
    </div>
  );
};

export default Hamburger;
