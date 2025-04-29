import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorProfileHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterPatients = (e) => {
    setSearchTerm(e.target.value);
    // You can implement the filtering logic here or pass the state up via props
  };

  return (
    <>
      {/* Doctor Profile Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">BGT Hospital</h1>
            <p className="text-gray-600">Cardiologist | Mp Nagar Bhopal</p>
          </div>
          <img
            src="https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=is&k=20&c=15TsJBPquZtgf8ciMtV6wlEAccnI5RJoNcqzFY9qe80="
            alt="Doctor"
            className="rounded-full w-16 h-16 border-2 border-blue-500"
          />
        </div>
      </div>

      {/* Create Button */}
      <div className="max-w-5xl mx-auto mb-4 flex justify-center gap-4">
        <Link to="/Doctor/signup">
          <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-xl shadow hover:bg-blue-100 transition">
            ➕ Create Doctor
          </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto mb-4">
        <input
          type="text"
          placeholder="Search patients by name..."
          value={searchTerm}
          onChange={filterPatients}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
};

export default DoctorProfileHeader;
