import React from 'react'

function Header() {
  return (
    <header
      className="relative pt-24 h-[35rem] pb-16 text-white text-center px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=is&k=20&c=15TsJBPquZtgf8ciMtV6wlEAccnI5RJoNcqzFY9qe80=')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-700/70 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <h1 className="pt-[7rem] text-4xl md:text-5xl font-bold mb-4 animate-pulse tracking-wide drop-shadow-lg">
          Welcome to <span className="text-yellow-300">eDocConnect</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 font-light drop-shadow">
          Your trusted health companion
        </p>
        <div  className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:text-black transition duration-300 hover:scale-105">
<a href="/WelcomeLogin">          Get Started</a>
        </div>
      </div>
    </header>
  )
}

export default Header