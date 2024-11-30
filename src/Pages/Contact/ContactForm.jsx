import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { RiFacebookCircleFill } from 'react-icons/ri';

const ContactForm = () => {
  return (
    <div className="max-w-6xl flex items-center justify-center p-6 md:px-5 mb-5 md:mb-24 sm:px-16 sm:w-full">
      <div className="w-full bg-[rgba(205,218,246,1)] bg-white rounded-[20px] shadow-lg p-5 md:py-16 md:px-16 flex flex-col md:flex-row">
        {/* Contact Details */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-black mb-6">Connect with us</h2>
          <div className="text-black">
            <p className="mb-2">
              <p className='font-semibold font-base'>Head Office</p>
              <p className='text-sm'> 01, Street No. B, Bhanu Nagar, New Nagore Road, Jodhpur, Rajasthan</p>
            </p>
            <p className="mb-2">
              <p  className='font-semibold font-base'>Phone</p> 
              <p className='text-sm'><a href="tel:+917300054285" className="text-black hover:underline">+91-7300054285</a></p>
            </p>
            <p className="mb-4">
              <p  className='font-semibold font-base'> Email</p>
              <p className='text-sm'>
              <a href="mailto:boostengine001@gmail.com" className="text-black hover:underline">boostengine001@gmail.com</a>
              </p>
            </p>
            <div className='flex gap-3 mt-8'>
            <FaInstagram className='text-2xl'/>
            <RiFacebookCircleFill
 className='text-2xl' />
            <FaTwitter className='text-2xl'/>
            </div>
          </div>
       
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="md:px-6">
            <div className="mb-4">
              
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
           
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
             
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
