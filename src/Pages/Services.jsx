import React from 'react'
import CardComponent from '../Components/CardComponent'
import img1 from "../Assets/img1.png"
import img2 from "../Assets/img2.png"
import img3 from "../Assets/img3.png"
import img4 from "../Assets/img4.png"
import img5 from "../Assets/img5.png"
import img6 from "../Assets/img6.png"
import globe from "../Assets/globe.png"
import DigitalJourney from '../Components/DigitalJourney'
import Faq from '../Components/Faq'
import Subscription from '../Components/Subscription'

const Services = () => {

  const cardData = [
    {
      img: img1,
      heading: "Custom Software Development",
      para: "Tailoring software solutions to meet the unique needs of your business.",
    },
    {
      img: img2,
      heading: "Web Development",
      para: "Creating responsive and dynamic websites to grow your online presence.",
    },
    {
      img: img3 ,
      heading: "Mobile App Development",
      para: "Building user-friendly and feature-rich mobile applications.",
    },
    {
      img: img4 ,
      heading: "UI/UX Design",
      para: "Designing intuitive interfaces for seamless user experiences.",
    },
    {
      img: img5,
      heading: "Digital Marketing",
      para: "Promoting your brand through effective online marketing strategies.",
    },
    {
      img: img6 ,
      heading: "Cloud Solutions",
      para: "Implementing scalable and secure cloud infrastructure.",
    },
  
  ];
  return (
    <>
    <div className="bg-black text-white flex flex-col items-center">   

    {/* Content */}
    <div className="flex flex-col items-center px-5 py-20 md:p-20 gap-5 max-w-6xl">
      <button className="bg-white text-black px-6 py-2 rounded-full mb-6 ">What we do</button>
      <h1 className="text-4xl font-semibold mb-6 text-center md:text-left">The Genesis of Boost Engine</h1>
      <p className="text-start text-lg w-full  leading-relaxed">
        Boost Engine Was Founded With A Clear Vision Of Driving Business Success Through Cutting-Edge Technology
        And Innovative Solutions. Established By A Team Of Passionate Developers And Entrepreneurs, Boost Engine
        Was Created To Empower Businesses In The Digital Age, Providing Them With The Tools And Expertise Needed To
        Thrive In A Competitive Landscape. Since Its Inception, Boost Engine Has Been Dedicated To Delivering High-Quality
        Software Solutions That Not Only Meet But Exceed Client Expectations.
      </p>
    </div>
  </div>
   <div className="flex flex-col items-center p-5 md:p-20">
   <button className="bg-white text-black px-6 py-2 border-solid border-2 border-black rounded-full mb-6">What we Offer</button>
   <h1 className="text-4xl font-semibold mb-6 w-auto lg:w-2/5 md:w-full text-center" >Key Services We Offer at Boost Engine</h1>
   <p className="text-center text-lg  max-w-4xl leading-relaxed">
   At Boost Engine, our vision is to empower businesses with the technology and innovation they need to thrive in a competitive landscape. Our mission is to deliver comprehensive solutions that drive growth, enhance efficiency, and foster innovation. We are committed to:
   </p>
 </div>
 <div className="min-h-screen flex items-center justify-center p-5 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        {/* Render cards dynamically */}
        {cardData.map((card, index) => (
          <CardComponent
            key={index}  
            img={card.img}
            heading={card.heading}
            para={card.para}
          />
        ))}
      </div>
    </div>
    <div className=" flex items-center justify-center px-5 md:px-16 py-10 md:py-22">
      <DigitalJourney/>
     
    </div>
    <div className="flex items-center justify-center  px-5 md:px-5 ">
 
      <Faq/>
    </div>
    <div className="flex items-center justify-center">
 
      <Subscription/>
    </div>
    

  </>
    
  )
}

export default Services