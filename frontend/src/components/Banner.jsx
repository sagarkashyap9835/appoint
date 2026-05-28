import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-6 sm:mx-12 my-12 bg-gradient-to-r from-blue-500 to-indigo-600 px-8 sm:px-16 py-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row justify-between items-center gap-10">
      
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6 text-left">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug tracking-tight">
            Book Appointment
            <br />
            <span className="text-blue-100 font-extrabold">With 100+ Trusted Doctors</span>
          </h2>
          <p className="text-blue-50/80 mt-2 text-sm sm:text-base leading-relaxed">
            Take control of your health today. Join our platform, discover medical experts, and manage all your healthcare bookings in one centralized dashboard.
          </p>
        </div>

        <button
          onClick={() => {
            navigate('/login');
            window.scrollTo(0, 0);
          }}
          className="bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 active:scale-95 shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base w-fit"
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center transform hover:scale-[1.03] transition-transform duration-500">
        <img
          src={assets.appointment_img}
          alt="Appointment"
          className="w-full max-w-sm sm:max-w-md drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
