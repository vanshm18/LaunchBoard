import logo from "../assets/logo.png"
import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-8 pb-12">
    
      <div className="flex justify-between">
        <div className="w-1/2 sm:w-1/4 flex items-center px-4 sm:px-10">
            <img 
                src={logo}
                className="w-full h-full object-contain object-left"
                alt="Logo">
            </img>
        </div>

        <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 text-xs md:text-base mr-4 sm:mr-12">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#faq" className="hover:text-blue-600">FAQ</a>
        </div>
      </div>

      <div className="flex justify-between text-xs px-4 sm:px-12">
        <h4 className="text-gray-500 font-medium">© 2026 LaunchBoard. All rights reserved</h4>
        <div className="flex gap-4 sm:gap-8">
          <a href="https://github.com/vanshm18" target="_blank" rel="noopener noreferrer">
            <VscGithub className="text-xl sm:text-2xl" />
          </a>

          <a href="https://linkedin.com/in/vanshmehta18" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin className="text-xl sm:text-2xl" />
          </a>

          <a href="https://leetcode.com/u/vanshm18" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-xl sm:text-2xl" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Footer
