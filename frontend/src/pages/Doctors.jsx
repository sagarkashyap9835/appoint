import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from './Appcontext';

const Doctors = () => {
  const { speciality } = useParams();
  const decodedSpeciality = speciality ? decodeURIComponent(speciality) : null;
  const { doctors = [] } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (decodedSpeciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === decodedSpeciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, decodedSpeciality]);

  const specialties = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "Gastroenterologist"
  ];

  return (
    <div className="px-6 sm:px-12 py-10 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Browse Through <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Specialist Doctors</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Select a speciality from the list to filter, or browse through all verified healthcare practitioners.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-full lg:w-1/4">
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm sticky top-6">
              <h3 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b border-gray-50">Filter by Speciality</h3>
              <div className="space-y-2.5">
                {specialties.map(spec => (
                  <button
                    key={spec}
                    onClick={() => {
                      navigate(
                        decodedSpeciality === spec ? "/doctors" : `/doctors/${encodeURIComponent(spec)}`
                      );
                      scrollTo(0,0);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-semibold flex items-center justify-between border ${
                      decodedSpeciality === spec
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                        : 'bg-white text-gray-600 border-gray-100 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <span>{spec}</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${decodedSpeciality === spec ? 'text-white translate-x-1' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filters as grid */}
          <div className="lg:hidden w-full mb-4">
            <h3 className="text-base font-bold mb-3 text-gray-700">Filter by Speciality</h3>
            <div className="grid grid-cols-2 gap-3">
              {specialties.map(spec => (
                <button
                  key={spec}
                  onClick={() => {
                    navigate(
                      decodedSpeciality === spec ? "/doctors" : `/doctors/${encodeURIComponent(spec)}`
                    );
                    scrollTo(0,0);
                  }}
                  className={`text-xs sm:text-sm p-3 rounded-xl border font-bold transition-all duration-300 text-center ${
                    decodedSpeciality === spec
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          {/* Doctor cards grid */}
          <div className="w-full lg:w-3/4">
            {filterDoc.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-2xl py-24 text-center text-gray-500 shadow-sm flex flex-col items-center justify-center">
                <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-lg font-bold text-gray-700">No Specialists Found</p>
                <p className="text-sm text-gray-400 mt-1">We couldn't find any doctors matching this speciality.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterDoc.map(item => (
                  <div
                    key={item._id}
                    onClick={() => {
                      navigate(`/appointment/${item._id}`);
                      scrollTo(0,0);
                    }}
                    role="button"
                    className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full text-left"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
