import React, { useState } from "react";
import { Code, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState('Home');
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)


  const handleClick = (section) => {
    setIsSelected(section);
    const element = document.querySelector(`.${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>
    <div className="flex sm:justify-around justify-between p-4 items-center sticky top-0 backdrop-blur-lg bg-[#f2f0ef9d]  shadow-md z-20">

      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Code style={{color:'var(--secondary-color)'}} />
        <div className=" md:text-2xl  flex flex-col font-semibold">
          <h1 className="text-gray-700 md:text-2xl">Rupesh Saha</h1>
          <h2 className="text-xs text-secondary">Web Developer</h2>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="sm:flex hidden gap-4 text-lg rounded-full border-secondary border-2 p-2 px-4">
        {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
          <a
            key={item}
            onClick={() => handleClick(item)}
            className={` duration-300 cursor-pointer ${
              isSelected === item ? 'text-secondary font-semibold' : 'text-gray-700'
            } hover:text-secondary`}
          >
            {item}
          </a>
        ))}
      </div>
      <div 
      onClick={() =>{setIsMenuBarOpen(true)}}
      className="sm:hidden block">
        <Menu/>
      </div>
      {/* Navigation Links for mobile devices  */}

   
    </div>
    {
        isMenuBarOpen && (  
           <div className="flex flex-col sm:hidden gap-4 text-2xl items-center justify-center   border-secondary border-2 p-8 px-6 w-1/2 h-1/2 rounded-md fixed top-0 right-0 bg-primary  shadow-md z-40">
            <button 
            onClick={()=>{setIsMenuBarOpen(false)}}
            className="fixed right-2 top-2"><X size={28}/></button>
        {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
          <a
            key={item}
            onClick={() => handleClick(item)}
            className={` ${
              isSelected === item ? 'text-secondary font-semibold' : 'text-gray-700'
            } hover:text-secondary`}
          >
            {item}
          </a>
        ))}
      </div>)
      }
    </>
    
  );
};

export default Navbar;
