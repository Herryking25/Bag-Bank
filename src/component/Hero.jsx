import React from 'react';
import backgroundImage from '../assets/image/backgroundImage.png'; // Ensure you have the correct path to your image
const Hero = () => {
    return (
      <section id="home" className="relative h-screen text-white flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-900 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        <img src={backgroundImage} alt="background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-100" />

        <div className="z-10 max-w-8xl px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4">
            IN TRADING, GET YOURSELF <br /> SECURED WITH BAG BANK
          </h1>
          <p className="text-lg sm:text-2xl font-medium mb-6">
            Trade safe and get Mentored for financial freedom
          </p>
          <button className="bg-[#003C07] inset-shadow-sm  inset-shadow-[#09EC1D] text-white text-xl font-semibold px-8 py-4 rounded-full shadow-md transition-all">
            Join Community
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  