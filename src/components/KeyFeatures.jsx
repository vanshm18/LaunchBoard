import { FaClipboardList } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { ImMobile } from "react-icons/im";

import Feature from "./Feature"

const KeyFeatures = () => {
  return (
    <section id="features">
      <div className="w-full p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center gap-3 bg-blue-50">
        <h3 className="text-blue-500 font-bold">Key Features</h3>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">Everything you need to succeed</h1>
        <p className="mt-2 text-center text-gray-400 font-medium text-xs sm:text-sm md:text-base">Powerful features designed to help you manage leads, close more deals and grow your business</p>
      
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 w-full gap-4 md:gap-6">
          <Feature 
            image={<FaClipboardList className="h-full w-full"/>} 
            heading="Lead Management" 
            desc="Capture, track and organize leads from multiple channels in one place"
          />

          <Feature 
            image={<FaRegChartBar className="h-full w-full"/>} 
            heading="Sales Analytics" 
            desc="Get insights into your performance with easy-to-read reports and charts"
          />

          <Feature 
            image={<FaUsersGear className="h-full w-full"/>} 
            heading="Customer Management" 
            desc="Build stronger relationships with your customers and keep everything organised"
          />

          <Feature 
            image={<FaUsers className="h-full w-full"/>} 
            heading="Team Collaboration" 
            desc="Work together, share updates and close deals faster"
          />

          <Feature 
            image={<ImMobile className="h-full w-full"/>} 
            heading="Mobile Friendly" 
            desc="Access your data anytime, anywhere, on any device"
          />
          
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
