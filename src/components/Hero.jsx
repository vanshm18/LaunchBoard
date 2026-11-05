import { IoPlayCircleOutline } from "react-icons/io5";

import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="w-full p-4 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-6">
      <div className="flex flex-col w-full md:w-1/2 gap-3 shrink-0">
        <button className="bg-gray-100 text-blue-500 text-xs font-bold rounded-4xl w-fit px-2.5 py-0.5">Grow Faster • Sell Smarter</button>

        <h1 className="text-[32px] sm:text-4xl md:text-5xl font-bold leading-tight">Track Leads, Manage Customers,
          <span className="text-blue-500"> Grow Your Business</span>
        </h1>

        <p className="text-gray-500 ml-1 font-medium">LaunchBoard helps small businesses track leads, manage customers and increase sales - all in one simple platform</p>

        <div className="flex flex-col sm:flex-row mt-6">
          <button className="md:ml-2 sm:mr-4 h-10 md:h-11 w-full md:w-30 flex justify-center items-center px-4 py-2 text-sm text-white font-medium rounded-xl bg-blue-500 hover:bg-blue-600">Try Demo</button>
          <button className="group mt-2 sm:mt-0 sm:mx-2 h-10 md:h-11 w-full md:w-40 flex justify-center items-center px-4 py-2 font-medium rounded-xl bg-white border border-gray-300 text-black hover:bg-blue-500 hover:text-white">Watch Video
            <IoPlayCircleOutline className="ml-2 mt-0.5 text-xl text-blue-500 group-hover:text-white"/>
          </button>
        </div>
      </div> 

      <div className="w-full md:w-1/2 overflow-hidden shrink-0">
        <img 
          src={hero}
          className="w-full h-auto object-contain object-top rounded-2xl shrink-0"
        ></img>
      </div>
    </div>
  )
}

export default Hero