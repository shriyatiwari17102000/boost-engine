// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FiUser, FiMenu, FiX } from "react-icons/fi";
// import logo from "../Assets/logo.png"; // Replace with your logo path

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <nav className="w-full flex flex-wrap items-center justify-between px-6 md:p-6 md:px-16 bg-black">
//       {/* Logo and Hamburger */}
//       <div className="flex items-center justify-between w-full md:w-auto">
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Boost Engine Logo"
//           className="h-12 w-[100px] h-[50px] md:h-24 md:w-32"
//         />
//         {/* Hamburger Menu Icon */}
//         <button
//           className="text-white text-3xl md:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } w-full md:flex md:w-auto md:items-center md:py-0 py-4 bg-[#0e1725] md:bg-transparent rounded-md md:rounded-none z-10 md:z-auto`}
//       >
//         <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg px-4 md:px-0">
//           {[
//             { name: "Home", path: "/home" },
//             { name: "About us", path: "/about" },
//             { name: "What We Do", path: "/" },
//             { name: "Pricing", path: "/pricing" },
//             { name: "Project", path: "/project" },
//             { name: "Blogs", path: "/blogs" },
//             { name: "Gallery", path: "/gallery" },
//             { name: "Career", path: "/career" },
//           ].map((link) => (
//             <li key={link.name} className="md:text-sm">
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-400 font-semibold"
//                     : "text-white hover:text-gray-400"
//                 }
//                 onClick={() => setIsMenuOpen(false)} // Close the menu on link click
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Contact Us Button (Small Screens) */}
//         <div className="flex flex-col items-center mt-4 md:hidden">
//           <button
//             className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 text-base"
//             onClick={() => {
//               navigate("/contact");
//               setIsMenuOpen(false); // Close menu after navigating
//             }}
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>

//       {/* Contact Button and User Icon (Desktop Only) */}
//       <div className="hidden md:flex items-center space-x-4">
//         <button
//           className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 text-base"
//           onClick={() => navigate("/contact")}
//         >
//           Contact Us
//         </button>
//         <span className="text-2xl text-white">
//           <FiUser />
//         </span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import logo from "../Assets/logo.png"; // Replace with your logo path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full flex flex-wrap items-center justify-between px-6 md:p-6 lg:px-16 bg-black">
      {/* Logo and Hamburger */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        {/* Logo */}
        <img
          src={logo}
          alt="Boost Engine Logo"
          className="h-12 w-[100px] h-[70px] md:h-24 md:w-32"
        />
        {/* Hamburger Menu Icon */}
        <button
          className="text-white text-3xl lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:flex lg:w-auto lg:items-center lg:py-0 py-4 bg-[#0e1725] lg:bg-transparent rounded-md lg:rounded-none z-10 lg:z-auto`}
      >
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-lg px-4 lg:px-0">
          {[
            { name: "Home", path: "/home" },
            { name: "About us", path: "/about" },
            { name: "What We Do", path: "/" },
            { name: "Pricing", path: "/pricing" },
            { name: "Project", path: "/project" },
            { name: "Blogs", path: "/blogs" },
            { name: "Gallery", path: "/gallery" },
            { name: "Career", path: "/career" },
          ].map((link) => (
            <li key={link.name} className="md:text-sm lg:text-base">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-white hover:text-gray-400"
                }
                onClick={() => setIsMenuOpen(false)} // Close the menu on link click
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Us Button (Small Screens) */}
        <div className="flex flex-col items-center mt-4 lg:hidden items-baseline mx-3">
          <button
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 text-base"
            onClick={() => {
              navigate("/contact");
              setIsMenuOpen(false); // Close menu after navigating
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Contact Button and User Icon (Desktop Only) */}
      <div className="hidden lg:flex items-center space-x-4">
        <button
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 text-base"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
        <span className="text-2xl text-white">
          <FiUser />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
