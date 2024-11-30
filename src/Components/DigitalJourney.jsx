import React from "react";
import globe from "../Assets/globe.png"

const DigitalJourney = () => {
  return (
    <div className="max-w-6xl bg-black text-white p-10 rounded-lg mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Section - Text */}
      <div className="flex-1">
        <h1 className="text-4xl font-semibold mb-4">"Empower Your Digital Journey"</h1>
        <p className="text-400 text-lg leading-relaxed w-full md:w-6/12">
          Discover how Boost Engine can help you thrive in today's competitive digital landscape. Start your transformation today!
        </p>
        <button className="bg-blue-500 border-solid border-2 border-black shadow-[rgba(59,_130,_246,_1)_4.4px_5.4px_1.2px] text-black px-6 mt-4 py-2 rounded-lg text-lg font-medium flex items-center space-x-2 hover:bg-blue-600">
          <span>Contact us</span>
          <span className="text-2xl">→</span>
        </button>
      </div>

      {/* Right Section - Image and Button */}
      <div className="flex flex-col items-center space-y-4 hidden md:flex">
        {/* Button */}
       

        {/* Globe Image */}
        <div className="relative">
          <img
            src={globe} // Replace this with your globe image URL
            alt="Globe"
            className="w-40 h-40 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalJourney;
