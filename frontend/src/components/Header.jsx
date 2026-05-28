import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="mx-6 sm:mx-12 my-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 sm:px-16 py-12 md:py-20 gap-10">
        
        {/* Left Side */}
        <div className="flex flex-col items-start md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Book Appointment <br /> With <span className="text-blue-100 underline decoration-indigo-300 decoration-wavy underline-offset-4">Trusted Doctors</span>
          </h1>

          <div className="flex gap-4 items-start bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-md">
            <img src={assets.group_profiles} alt="Group" className="w-12 sm:w-14 md:w-16 h-auto mt-1" />
            <p className="text-sm leading-relaxed text-blue-50/90">
              Simply browse through our extensive list of trusted doctors, and schedule your appointment completely for free.
            </p>
          </div>

          {/* Book Button */}
          <a
            href="#speciality"
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-6 py-3.5 rounded-full hover:bg-blue-50 active:scale-95 shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base group"
          >
            Book Appointment
            <img 
              src={assets.arrow_icon} 
              alt="Arrow" 
              className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" 
            />
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full flex justify-center transform hover:scale-[1.02] transition-transform duration-500">
          <img
            src={assets.header_img}
            alt="Header"
            className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
