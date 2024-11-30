import React from "react";
import bg from "../Assets/bg.png"

const Subscription = () => {
    return (
      <div className="max-w-6xl bg-[rgba(59,_130,_246,_1)] flex items-center h-[300px] text-white w-[88%] rounded-lg py-12 px-6 relative my-10 md:my-24 bg-cover bg-center w-10/12"   style={{ backgroundImage: `url(${bg})` }}>
        {/* Content */}
        <div className="max-w-4xl mx-auto text-left flex items-center flex-col">
          <h2 className="text-lg w-[80%] md:text-2xl font-medium mb-6">
            Subscribe to our newsletter for new product releases, critical updates, and special offers.
          </h2>
          {/* Input and Button */}
          <form className="flex w-full flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-[60%] px-4 py-2 text-gray-800 bg-white rounded-md shadow focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-black w-full md:w-auto text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Subscription;
  
  