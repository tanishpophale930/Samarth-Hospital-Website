import React from "react";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
 
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ssuxg69', 'template_aof1y1w', form.current, {
        publicKey: 'omG4NgvlDlWz779cs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form ref={form}  onSubmit={sendEmail} className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            LEAVE US A MESSAGE
          </h1>
          <div className=" flex flex-col">
            <input
            required
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="from_name"
              id="userName"
              placeholder="Name"
               
            />
          </div>
         
          <div className=" flex flex-col">
            <input
            required
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="user_email"
              id="userEmail"
              placeholder="Your Email"
              
            />
          </div>
          <div className=" flex flex-col">
            <input
            required
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="phone"
              id="userNumber"
              placeholder="Phone No."
              
            />

          </div>
          <div className=" flex flex-col">
            <textarea
            required
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="message"
              id="userMessage"
              placeholder="Message"
              
            />
          </div>
          <div className=" flex gap-5 ">
            <Button title="Submit " />
            <button
              className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;




/*
/* eslint-disable react/prop-types 
import React from "react";

import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
 
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form  className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            LEAVE US A MESSAGE
          </h1>
          <div className=" flex flex-col">
            <input
            required
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userName"
              id="userName"
              placeholder="Name"
               
            />
          </div>
         
          <div className=" flex flex-col">
            <input
            required
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              
            />
          </div>
          <div className=" flex flex-col">
            <input
            required
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
              
            />

          </div>
          <div className=" flex flex-col">
            <textarea
            required
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userMessage"
              id="userMessage"
              placeholder="Message"
              
            />
          </div>
          <div className=" flex gap-5 ">
            <Button  title="Submit " />
            <button
              className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
*/