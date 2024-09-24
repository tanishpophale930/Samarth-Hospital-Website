import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ServicesData from "./ServicesData";


function Services(){
    return (
        <div className="h-full bg-emerald-50">
            <Navbar/>
            <ServicesData/>
            <Footer/>
        </div>
    )
}

export default Services;