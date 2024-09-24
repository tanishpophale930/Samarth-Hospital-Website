import React from "react";
import Button from "../layouts/Button"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {motion} from "framer-motion"
import WebsiteTopCoverImage from "../assets/img/WebsiteTopCoverImage.png";

const Home = () => {
  return (
    /*
    <motion.div className=" flex flex-col justify-center  lg:px-5 text-white" 
       initial={{x:'-100vw'}}
       animate={{x:0}}
       transition={{type:'spring'}}
    >
    <div className="opacity-100 antialiased lg:mt-20 bg-[url('assets/img/WebsiteTopCoverImage.png')]  bg-cover  h-full  w-full bg-center relative"></div>
        
    </motion.div>
    */

    <motion.div className=" w-full"
      initial={{x:'-100vw'}}
      animate={{x:1}}
      transition={{type:'spring'}}
    >
      <img className="w-full rounded-sm object-cover pt-20" src={WebsiteTopCoverImage} alt="img" />
    </motion.div>
    
  );
};

export default Home;
