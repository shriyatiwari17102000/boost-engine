import React from 'react'
import Faq from '../Components/Faq'
import Subscription from '../Components/Subscription'
import ai from "../Assets/ai.png"
import DigitalJourney from '../Components/DigitalJourney'
import BlogCard from '../Components/BlogCard'

const Blogs = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col items-center">

        {/* Content */}
        <div className="flex flex-col items-center px-5 pt-20 pb-0 md:p-20 gap-5">
          <button className="bg-white text-black px-6 py-2 rounded-full mb-6">Our Blogs</button>
          <h1 className="text-4xl font-semibold mb-6 text-center md:text-left">Our latest insight & update</h1>

        </div>

        <div className="max-w-6xl flex flex-col md:flex-row  gap-10 mb-20 px-5 sm:px-16 items-end">
          {/* Text Section */}
          <div className="md:w-3/5 text-white order-2 md-order-1">
            <p className="text-lg leading-relaxed">
              Artificial Intelligence (AI) is transforming businesses by enhancing decision-making, automating repetitive
              tasks, and improving customer experiences. AI-driven analytics provide valuable insights, helping leaders
              make informed choices, while automation tools streamline operations, reducing costs and increasing
              efficiency. Personalized interactions powered by AI can boost customer satisfaction and loyalty, giving
              businesses a competitive edge.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full order-1 md:order-2 md:w-2/5 flex justify-center">
            <img
              src={ai} // Replace with your image URL
              alt="AI Transforming Business"
              className="rounded-lg shadow-lg h-[350px]"
            />
          </div>
        </div>

      </div>

      <div className="flex items-center justify-center">
        <BlogCard />
      </div>
      <div className="flex items-center justify-center px-5 sm:px-16 md:px-24 py-10 md:py-24 ">
        <DigitalJourney />

      </div>

      <div className="flex items-center justify-center mt-10 md:mt-[100px] px-5 sm:px-16 md:px-5">

        <Faq />
      </div>
      <div className="flex items-center justify-center">

        <Subscription />
      </div>
    </>
  )
}

export default Blogs