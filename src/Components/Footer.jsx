import React from "react";
import logo from "../Assets/logo.png"
import { BsDot } from "react-icons/bs";
const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-5 md:ps-[70px]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
           <img src={logo} alt="" className="mb-5" />
            <p className="text-white">
            The Story Of Boost Engine is one of the innovation and determination.
            </p>
          </div>
  
          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold my-4 flex items-center"><BsDot />
             Home</h3>
            <ul className="space-y-2 ps-4">
              <li><a href="#" className="text-white hover:text-white">Home</a></li>
              <li><a href="#" className="text-white hover:text-white">About us</a></li>
              <li><a href="#" className="text-white hover:text-white">What we do</a></li>
              <li><a href="#" className="text-white hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold my-4 flex items-center"> <BsDot /> More</h3>
            <ul className="space-y-2 ps-4">
              <li><a href="#" className="text-white hover:text-white">Projects</a></li>
              <li><a href="#" className="text-white hover:text-white">Events</a></li>
              <li><a href="#" className="text-white hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-white hover:text-white">Blog</a></li>
            </ul>
          </div>
  
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold my-4 flex items-center"><BsDot /> Connect</h3>
            <ul className="space-y-2 ps-4">
              <li><a href="#" className="text-white hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-white hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-white hover:text-white">LinkendIn</a></li>
            </ul>
          </div>
        </div>
  
       
      </footer>
    );
  };
  
  export default Footer;
  