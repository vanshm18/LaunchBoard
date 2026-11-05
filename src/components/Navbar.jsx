import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

import logo from "../assets/logo.png"
import { useState } from "react";

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="w-full h-14 sm:h-14 md:h-16 bg-white flex justify-between">

      <div className="w-1/2 sm:w-1/4 flex items-center px-4 sm:px-10">
        <img 
          src={logo}
          className="w-full h-full object-contain object-left"
          alt="Logo">
        </img>
      </div>

      <div className="hidden w-2/4 sm:flex justify-center items-center sm:gap-8 md:gap-12 text-xs md:text-base">
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#pricing" className="hover:text-blue-600">Pricing</a>
        <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        <a href="#faq" className="hover:text-blue-600">FAQ</a>
      </div>

      <div className="w-1/2 sm:w-1/4 flex justify-end gap-4 sm:gap-0 sm:justify-evenly items-center">
        <button className="hidden h-8 md:h-9 sm:flex items-center text-xs md:text-sm px-4 py-2 font-medium rounded-lg bg-blue-500 text-white sm:bg-white sm:text-black hover:bg-blue-500 hover:text-white cursor-pointer">Sign In</button>
        <button className="hidden h-8 md:h-9 sm:flex items-center text-xs md:text-sm px-4 py-2 text-white font-medium rounded-lg border bg-blue-500 hover:bg-blue-600 cursor-pointer">Try Demo</button>
        <FaBars 
          className="flex sm:hidden mr-6 text-xl"
          onClick={() => {
            setSidebar(true);
          }}
        />
      </div>

      <aside
        className={`fixed top-0 right-0 h-screen w-7/8 bg-white text-black z-50
          transform transition-transform duration-300
          ${sidebar ? "translate-x-0" : "translate-x-full"}
          sm:hidden`}
        >
        <div className="flex flex-col gap-6 text-lg">
          <div className="flex justify-between m-4 mb-0">
            <img 
              src={logo}
              className="w-1/2 object-contain object-left" ></img>
            <button onClick={() => setSidebar(false)} className="">
              <IoClose className="text-2xl" />
            </button>
          </div>

          <hr className="text-gray-400 mx-4"></hr>

          <div className="flex justify-center m-4 ">
            <button className="w-full h-10 rounded-3xl bg-blue-500 text-xl text-gray-100">Sign In</button>
          </div>

          <div className="flex flex-col ml-6 gap-6 font-semibold">
            <a href="#features" onClick={() => setSidebar(false)}>Features</a>
            <a href="#pricing" onClick={() => setSidebar(false)}>Pricing</a>
            <a href="#testimonials" onClick={() => setSidebar(false)}>Testimonials</a>
            <a href="#faq" onClick={() => setSidebar(false)}>FAQ</a>
          </div>
        </div>
      </aside>

      {sidebar && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
          onClick={() => setSidebar(false)}
        />
      )}
    </nav>
  )
}

export default Navbar