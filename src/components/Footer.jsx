import React from "react";
import { Link } from "react-router-dom";
import logoR from "../assets/img/logoR.png";

const Footer = () => {
  return (
    <div className=" bg-teal-900 text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col gap-5 md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <Link to="/"><h1 className=" font-semibold tracking-wider text-2xl pb-4 uppercase hover:text-hoverColor">Samarth Child Development and Occupational Therapy Center</h1></Link>
          <img src={logoR} alt="samarth hospital Logo" className="h-20 w-20"/>
        </div>
        
        
        <div className=" w-full md:w-1/4 ">
          <nav>
            <Link to="/"  
              className=" hover:text-hoverColor transition-all cursor-pointer" > 
              <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Home</h1>
            </Link>

            <Link to="/services"
              className=" hover:text-hoverColor transition-all cursor-pointer" > 
              <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
            </Link>

            <Link to="/services"
              className=" hover:text-hoverColor transition-all cursor-pointer" > 
              <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Find Us</h1>
            </Link>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.238204827106!2d79.08412997393764!3d21.14291658385048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0956489984f%3A0x234cb8f3a18e555b!2sSamarth%20Child%20Development%20And%20Occupational%20Therapy!5e0!3m2!1sen!2sin!4v1726742895786!5m2!1sen!2sin" className="w-full h-full rounded-md" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
          </nav>
    
        </div>
      </div>
      <div>
        <p className=" text-center pt-4 pb-1">
          &#9426; <span className="text-hoverColor font-medium">Samarth-Clinic</span>  | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;



