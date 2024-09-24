import React, { useState } from "react";
import ServiceComponent from "./ServiceComponent";
import NeurodevelopmentalTheapy from "../assets/img/NeurodevelopmentalTheapy.jpg";
import OccupationTherapyHelpsInDeveloping from "../assets/img/OccupationTherapyHelpsInDeveloping.jpg";
import PlayTherapy from "../assets/img/PlayTherapy.jpg"
import SchoolBasedOT from "../assets/img/SchoolBasedOT.jpg"
import SensoryIntegrationTherapy from "../assets/img/SensoryIntegrationTherapy.jpg"
import SpeechTherapy from "../assets/img/SpeechTherapy.jpg"
import GroupTherapy from "../assets/img/GroupTherapy.jpg"
import FeedingTherapy from "../assets/img/FeedingTherapy.jpg"


function ServicesData() {
  let services = [
    {
      serviceName: "Speech Therapy",
      serviceImage: SpeechTherapy,
      serviceDescription: [
        "Oromotor skill development",
        "Feeding skill",
        "Speech and language developmental milestone",
        "Speech Fluency",
        "Articulation",
        "Expressive and receptive language",
      ],
      brdeColor: "border-[#f8b50e]",
    },
    {
      serviceName: "Feeding Therapy",
      serviceImage: FeedingTherapy,
      serviceDescription: [
        "Food aversion",
        "Food refusal",
        "Picky eater",
        "Avoidance of certain food texture",
        "Gagging and vomiting",
        "Oral Motor / Chewing difficulties",
      ],
      brdeColor: "border-[#a79edf]",
    },
    {
      serviceName: "Group Therapy",
      serviceImage: GroupTherapy,
      serviceDescription: [
        "Social interaction And Communication ",
        "Sharing skills",
        "Imitation skill and Enhance coping skill",
        "Participation and engagement in functional activities",
        "Play skills",
      ],
      brdeColor: "border-[#b5e45b]",
    },
    {
      serviceName: "Neurodevelopmental Therapy",
      serviceImage: NeurodevelopmentalTheapy,
      serviceDescription: [
        "Developmental Motor Milestone",
        "Postural control and positioning",
        "Balance, co-ordination and Motor planning and execution",
        "Maintaining of strength",
        "Muscle tone and ROM",
        "Functional training",
        "Walking and Mobility",
      ],
      brdeColor: "border-[#9fb4b6]",
    },
    {
      serviceName: "School Based OT",
      serviceImage: SchoolBasedOT,
      serviceDescription: [
        "Attention skill and organization",
        "Visual perception skill",
        "Fine motor skill",
        "Handwriting intervention",
        "Reading and writing skill",
        "Adaptive equipiments and techniques",
        "Adaptation of activities and environment ",
        "Communication skill",
        "Remedial Teaching",
      ],
      brdeColor: "border-[#d11b8c]",
    },
    {
      serviceName: "Play Therapy for Special Needed Children",
      serviceImage: PlayTherapy,
      serviceDescription: [
        "For building better Communication, socialization, vocabulary and language",
        "Gross motor & Fine motor skill",
        "Executive Functioning",
        "Self confidence and self esteem",
        "Sensory Processing",
        "impulse control and emotional regulation",
        "Cognitive development",
        "Encourage problem solving",
      ],
      brdeColor: "border-[#db301b]",
    },
    {
      serviceName: "Occupational Therapy helps in Developing",
      serviceImage: OccupationTherapyHelpsInDeveloping,
      serviceDescription: [
        "Gross motor skill",
        "Sensory processing skill",
        "Fine motor skill",
        "Balance, co-ordination, strength & endurance",
        "Handwriting skills",
        "Visual motor skills",
        "Visual perception skills",
        "Play and social skills",
        "Feeding and oromotor skills",
        "Self care skills/ Daily living skills",
        "Academic and cognitive skills",
        "Behaviourial skills",
      ],
      brdeColor: "border-[#ca9250]",
    },
    {
      serviceName: "Sensory Integration Therapy",
      serviceImage: SensoryIntegrationTherapy,
      serviceDescription: [
        "Autism and ADHD",
        "Sensory Processing Disorder",
        "Poor attention and Concentration",
        "Poor self-regulation",
        "Sensory Meltdown and Tantrums",
        "Poor registration of environmental stimuli",
        "Poor tolerance of sensory stimuli from the environment",
        "Poor Body Awareness",
        "Aggression, Frustration, Avoidance or seeking behaviour",
        "Behaviour and Social difficulties",
        "Poor motor coordination and Motor planning",
      ],
      brdeColor: "border-[#46cabd]",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-16  px-5 ">
      {services.map((ele, index) => {
        return (
          <ServiceComponent
            index={index}
            serviceName={ele.serviceName}
            serviceImage={ele.serviceImage}
            serviceDescription={ele.serviceDescription}
            brdeColor={ele.brdeColor}
          />
        );
      })}
    </div>
  );
}

export default ServicesData;



/*
import React, { useState } from "react";
import ServiceComponent from "./ServiceComponent";

function ServicesData(){

    let services = [
        {serviceName: "Speech Therapy" , serviceImage: "/images/SpeechTherapy.jpg" , serviceDescription: ["Oromotor skill development", "Feeding skill", 
                      "Speech & language developmental milestone","Speech Fluency","Expressive and receptive language Articulation"], brdeColor:"border-[#f8b50e]"},
        {serviceName: "Feeding Therapy" , serviceImage: "/images/FeedingTherapy.jpg" , serviceDescription: ["Food aversion",
                      "Food refusal","Picky eater","Avoidance of certain food texture","Gagging and vomiting","Oral Motor / Chewing difficulties"], brdeColor:"border-[#a79edf]"},
        {serviceName: "Group Therapy" , serviceImage: "/images/GroupTherapy.jpg" , serviceDescription: ["Social interaction And Communication Sharing skills", 
                      "Imitation skill and Enhance coping skill","Participation and engagement in functional activities","Play skills"], brdeColor:"border-[#b5e45b]"},
        {serviceName: "Neurodevelopmental Therapy" , serviceImage: "/images/NeurodevelopmentalTheapy.jpg" , serviceDescription: ["Developmental Motor Milestone",
                      "Postural control and positioning","Balance, co-ordination and Motor planning and execution","Maintaining of strength",
                      "Muscle tone and ROM","Functional training","Walking and Mobility"],brderColor:"border-[#4db3d8]"},
        {serviceName: "School Based OT" , serviceImage: "/images/SchoolBasedOT.jpg" , serviceDescription: ["Attention skill and organization", 
                      "Visual percoption skill","Fine motor shالأ Handwriting intervention","Reading and writing skill","Adaptive equipinents and techniques",
                      "Adaptation of activities and environment Communication skill", "Remedial Teaching","Communication skill"], brdeColor:"border-[#d11b8c]"},              
        {serviceName: "Play Therapy" , serviceImage: "/images/PlayTherapy.jpg" , serviceDescription: ["communication, socialization, vocabulary and language)",
                      "Gross motor & Fine motor skill Executive Functioning","Self confidence and self esteem","Sensory Processing","impulse control and emotional regulation",
                      "Cognitive development","Encourage problem solving"], brdeColor:"border-[#db301b]"},
        {serviceName: "Occupational Therapy helps in Developing" , serviceImage: "/images/OccupationTherapyHelpsInDeveloping.jpg" , serviceDescription: ["Gross motor skill", 
                      "Sensory processing skill", "Fine motor skill","Balance co-ordination, strength & endurance","Handwriting skills","Visual motor skills",
                      "Visual perception skills","Play and social skills","Feeding and oromotor skills","Self care skills/Daily living skills Academic and cognitive skills","Behaviourial skills"], brdeColor:"border-[#ca9250]"},        
                      {serviceName: "Sensory Integration Therapy" , serviceImage: "/images/SensoryIntegrationTherapy.jpg" , serviceDescription: ["Autism and ADHD",
                      "Sensory Processing Disorder","Poor attention and Concentration","Poor self-regulation","Sensory Meltdown and Tantrums","Poor registration of environmental stimuli",
                      "Poor tolerance of sensory stimuli from the environment","Poor Body Awareness","Aggression, Frustration, Avoidance or seeking behaviour"], brdeColor:"border-[#46cabd]"},
                    ]

    

    return(
        <div className="flex items-center justify-center gap-16 px-5 flex-wrap bg-emerald-50">
            {services.map((ele,index)=>{
                return <ServiceComponent key={index} index={index} serviceName={ele.serviceName} serviceImage={ele.serviceImage}
                                             serviceDescription={ele.serviceDescription} brdeColor={ele.brdeColor}/>
            })}
       </div>
    )
}

export default ServicesData;
*/