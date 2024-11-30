import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-gradient 
">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white">404</h1>
        <p className="text-2xl md:text-3xl text-white font-light mt-4">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <p className="text-white mt-2">
          It might have been moved or deleted.
        </p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
