import React from "react";
import Landingpage from "../assets/img/Landingpage.jpg";
import FounderSectionImage from "../assets/img/FounderSectionImage.avif";

const About = () => {
  return (
    <div className="  flex flex-col gap-14">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:px-32 px-7 md:px-7 xl:px-32  lg:pt-16 lg:gap-20">
          <div className=" w-full lg:w-3/4 space-y-4">
            <h1 className=" text-5xl font-semibold text-center lg:text-start">
              About Us
            </h1>
            <p className=" text-justify lg:text-start pt-5 md:pt-5 lg:pt-0 xl:pt-0 ">
              We are a team of trained Paediatrics therapist located in Central
              Nagpur. We are dedicated to helping children and their families with a
              full scope of services including occupational therapy,
              Neurodevelopmental Therapy, sensory integration therapy, speech
              therapy, oromotor skill training, feeding therapy. handwriting
              intervention, self care skill + training, school based occupational
              therapy, group sessions and early intervention program for neonates to
              meet the needs of all children.
            </p>
            <p className="text-justify lg:text-start pt-1 md:pt-1 lg:pt-0 xl:pt-0">
              When you walk into clinic you will see climbing walls, suspension
              swings, trampolines, and areas where children's are achieving complex
              and interdisciplinary skill while having fun! Our mission to provide
              compassionate and high quality therapy services in an enriching and
              enjoyable environment where all children thrive.
            </p>
            <h2 className="text-justify lg:text-start text-2xl uppercase font-bold ">
              
              play, learn and grow
            </h2>
          </div>
          <div className=" w-full lg:w-3/4">
            <img className=" rounded-lg" src="https://img.freepik.com/free-photo/girl-reading-book-daycare_23-2147663339.jpg?t=st=1726912453~exp=1726916053~hmac=e726bb38d9a23e4557edc43b9db1d4a0ad72c90e0d61609daf9bcebee8625b9b&w=740" alt="img" />
          </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:px-32  px-7 md:px-7 xl:px-32 pt-14 lg:pt-2 pb-14 lg:gap-20">
                <div className=" w-full lg:w-3/4 space-y-4 ">
                        <h1 className=" text-5xl font-semibold text-center lg:text-start ">
                          Founder & Owner
                        </h1>
                        <h2 className=" text-2xl font-semibold text-center lg:text-start uppercase">
                          Dr. Sampada Chande(Labhe)
                        </h2>
                        <h4 className=" font-semibold text-center lg:text-start ">
                          B.O.Th. , M.O.Th, C/NDT
                        </h4>
                        <p className="text-justify lg:text-start">
                          Founder & clinical director of Samarth child development and
                          occupational therapy centre Nagpur. An Occupational Therapist,
                          carryning an extensive clinical experience of over 12+ years in the
                          pediatrice. She is a certified as neurodevelopmental Therapist(USA), also pursued certification in
                          Oral Placement Therapy (OPT - 1), Play Therapy for special needed children,
                          Feeding therapy for neonates, and various courses on Sensory
                          Integration Therapy ADL Training, Cognitive & visuo-perceptual development,
                          handwritting intervention, hand function, feeding skills,
                          oromotor development, early intervention for neonates and
                          school based intervention.
                        </p>
                </div>
                <div className=" w-full lg:w-3/4">
                  <img className=" rounded-lg" src={FounderSectionImage} alt="img" />
                </div>
      </div>
    </div>
  );
};

export default About;