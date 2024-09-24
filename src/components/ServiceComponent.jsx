/*
import React from "react";

function ServiceComponent({ index, serviceName, serviceImage, serviceDescription, brdeColor }) {
  const servicesBulletPoints = serviceDescription.map((bulletPoint) => (
    <li key={bulletPoint}>{bulletPoint}</li>
  ));

  return (
    <div
      className={`sm:h-fit md:h-fit w-80 ${index <= 2 ? "lg:h-[29rem]" : index >= 3 && index <= 5 ? "lg:h-[36rem]" : index >= 6 && index <= 7 ? "lg:h-[44rem]" : ""
        } mx-6 ${index === 0 ? "mt-32" : "mt-3"} md:mt-32 ${index <= 2 ? "lg:mt-32" : "lg:mt-10"} ${index >= 6 ? "lg:mb-20" : ""} rounded-lg border-2 border-slate-200 bg-zinc-50 px-4 pt-4 drop-shadow-2xl`}
    >

      <img
        src={serviceImage} loading="lazy"
        className={`w-full ${index <= 2 ? "h-2/5" : index >= 3 && index <= 5 ? "h-1/3" : index >= 6 && index <= 7 ? "h-[12rem]" : ""
          } rounded-lg border-2 ${brdeColor}`}
        alt={serviceName}
      />

      <div>
        <p className="font-semibold text-xl text-center my-4">{serviceName}</p>
        <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-base">
          {servicesBulletPoints}
        </ul>
      </div>

      <p>&nbsp; </p>
    </div>
  );
}

export default ServiceComponent;
*/


//Fully working with no animations
import React from "react";

function ServiceComponent({index, serviceName, serviceImage, serviceDescription, brdeColor }) {
  let servicesBulletPoints = serviceDescription.map((bulletPoint) => (
    <li key={bulletPoint}>{bulletPoint}</li>
  ));

  return (
    <div
      className={`sm:h-fit md:h-fit  w-80 ${index <= 2 ? "lg:h-[29rem]" : index >= 3 && index <= 5 ? "lg:h-[36rem]" : index >= 6 && index <= 7 ? "lg:h-[44rem]" : ""
        } mx-6 ${index==0 ? "mt-32": "mt-3"} md:mt-32 ${index <= 2 ? "lg:mt-32" : "lg:mt-10"} ${index >= 6 ? "lg:mb-20" : ""} rounded-lg border-2 border-slate-200 bg-zinc-50 px-4 pt-4 drop-shadow-2xl hover:scale-105`}
    >
      <img
        src={serviceImage}
        className={`w-full ${index <= 2 ? "h-2/5" : index >= 3 && index <= 5 ? "h-1/3" : index >= 6 && index <= 7 ? "h-[12rem]" : ""
          } rounded-lg border-2 ${brdeColor}`}
        alt={serviceName}
      />
      <div>
        <p className="font-semibold text-xl text-center my-4">{serviceName}</p>
        <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-base">
          {servicesBulletPoints}
        </ul>
      </div>
      <p>&nbsp; </p>
    </div>
  );
}

export default ServiceComponent;


