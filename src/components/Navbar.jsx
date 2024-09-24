import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import logoR from "../assets/img/logoR.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" fixed w-full z-10 text-white ">
      <div>
        <div className=" flex flex-initial justify-between p-5 md:px-32 px-5 bg-teal-900 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row ">
          <img src={logoR} alt="logo" className="place-items-start h-10 w-10" />

          <div className="mx-6 flex  flex-row items-center cursor-pointer">
           
              <div className="flex flex-col">
                <Link
                    to="/"
                    className=" flex lg:text-lg text-xs font-semibold hover:text-hoverColor"
                >
                    Samarth Child Development & Occupational Therapy Center
                </Link>
                
              </div>
            
          </div>
          </div>
          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/"
           
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Home
            </Link>
            {/* 
            <Link
              to="about"
             
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About Us
            </Link>
  */}
            <Link
              to="/services"
              
           
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
          </nav>

          <div className=" hidden lg:flex">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-teal-900 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
           
           
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          {/* 
          <Link
            to="about"
         
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
        </Link>*/}
          <Link
            to="/services"
            
            
         
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>

          <div className=" lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
