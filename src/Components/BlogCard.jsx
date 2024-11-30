import React from "react";
import blog_img1 from "../Assets/blog_img1.png"
import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const BusinessGrowthCard = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={blog_img1} // Replace with your image URL
          alt="Business Growth"
          className="w-full md:w-96 sm:h-64 sm:h-full rounded-lg truncate"
        />
        
      </div>

      {/* Text Section */}
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-black">
          How to Drive Business Growth in the Digital Era
        </h3>
        {/* Arrow Icon */}
        <GoArrowUpRight className="text-3xl" />

      </div>
    </div>
  );
};

const BlogCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl grid grid-cols-1 px-5 md:px-0  md:grid-cols-3 gap-16  py-10 md:py-24">
        {/* Render 6 cards */}
        {Array.from({ length: 6 }).map((_, index) => (
          <BusinessGrowthCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
