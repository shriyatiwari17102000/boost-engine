import React from "react";

const CardComponent = ({heading, img, para}) => {
  
  return (
    <div className="bg-black text-white rounded-xl shadow-lg p-5 overflow-hidden flex items-center space-x-5">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={img}// Replace with your image URL
          alt="Custom Software Development"
          className="rounded-2xl object-cover w-32 h-52"
        />
      </div>
      {/* Text Section */}
      <div>
        <h3 className="text-xl font-semibold">{heading}</h3>
        <p className="text-sm text-gray-400 mt-2">
       {para}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
