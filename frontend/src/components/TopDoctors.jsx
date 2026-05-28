import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../pages/Appcontext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="px-6 sm:px-12 py-16 bg-gradient-to-b from-white to-blue-50/30">
      {/* Heading */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Top <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Doctors to Book</span>
        </h1>
        <p className="text-gray-500 mt-3 text-base sm:text-lg">
          Browse through our vetted list of trusted medical specialists and schedule an appointment instantly.
        </p>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full"
          >
            {/* Image container */}
            <div className="relative w-full h-56 bg-gradient-to-tr from-blue-50 to-indigo-50/50 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-top transition-transform duration-750 ease-out group-hover:scale-110"
              />
              
              {/* Availability Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-gray-100/50">
                <span className={`w-2.5 h-2.5 rounded-full ${item.available ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`}></span>
                <span className={`text-[10px] font-extrabold tracking-wider uppercase ${item.available ? 'text-green-600' : 'text-red-500'}`}>
                  {item.available ? 'Available' : 'Unavailable'}
                </span>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">{item.speciality}</p>
                <h3 className="text-lg font-bold text-gray-800 mt-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                  {item.name}
                </h3>
              </div>

              {/* Card CTA Footer */}
              <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                  Book Appointment
                </span>
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => {
            navigate('/doctors');
            scrollTo(0, 0);
          }}
          className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg shadow-blue-200"
        >
          View More Specialists
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
