import React, { useState } from 'react';

const WelocomToLogin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
     <header className="bg-gradient-to-br from-white via-blue-100 to-cyan-200 min-h-screen flex items-center justify-center">
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 w-full px-4">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-3xl p-8 bg-white rounded-2xl shadow-2xl mt-[5rem] flex flex-col items-center space-y-10">
          
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3771/3771391.png"
              alt="Chikitsha Logo"
              className="h-24 w-24 rounded-full shadow-lg border-4 border-cyan-500"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-indigo-700 text-center">
            Welcome to <span className="text-yellow-300">eDocConnect</span>
          </h1>

          {/* Hospital Card */}
          <a
            href="/HospitalLogin"
            className="bg-white w-64 h-72 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img src="src\assets\hospital.png" alt="" />
            <h3 className="text-xl font-semibold text-indigo-600 text-center">Hospital</h3>
            <p className="text-sm text-gray-500 text-center">Click here to hospitals</p>
          </a>
        </div>
      </div>
    </header>
    </>
  );
};

export default WelocomToLogin;
