import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Form from "./Form";


function Contact() {
  return (
    <div >
      <Navbar />
      <div className="antialiased bg-slate-300">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col space-y-6  bg-cyan-700 w-full  p-8  shadow-lg text-white ">
            <div className="flex flex-col space-y-3 justify-between ">
              <div>
                <h1 className="tracking-wide text-4xl font-bold mt-16">Contact Us</h1>
                <p className="pt-2 text-cyan-100 text-sm">
                  Fill up the form below to send us a message.
                </p>
              </div>
              <Form/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
