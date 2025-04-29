import React, { useState } from "react";
import axios from "axios";

const HospitalProfile = () => {
  const [search, setSearch] = useState("");
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/patient/${search}`);
      setPatient(res.data);
      setError("");
    } catch (err) {
      setPatient(null);
      setError("Patient not found or server error.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen pt-24 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">BGT Hospital</h1>
            <p className="text-gray-600">Cardiologist | Mp Nagar Bhopal</p>
          </div>
          <img
            src="/src/assets/hospital.png"
            alt="Hospital"
            className="rounded-full w-16 h-16 border-2 border-blue-500"
          />
        </div>
      </div>

      {/* Button */}
      <div className="max-w-5xl mx-auto mb-4 flex justify-center gap-4">
        <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-xl shadow hover:bg-blue-100 transition">
          <a href="/DoctorLogin">➕ Create Patient</a>
        </button>
      </div>

      {/* Search */}
      <div className="max-w-5xl mx-auto mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search patients Aadhar Id ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-white px-4 rounded-xl hover:bg-blue-100 transition text-blue-700 font-semibold"
        >
          Search
        </button>
      </div>

      {/* Patient Detail */}
      {error && (
        <div className="max-w-5xl mx-auto bg-red-100 text-red-700 p-4 rounded-xl">{error}</div>
      )}

      {patient && (
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Patient Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Email:</strong> {patient.email}</p>
            <p><strong>Phone:</strong> {patient.phone}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
            <p><strong>Aadhar:</strong> {patient.addharCard}</p>
            <p><strong>Doctor:</strong> {patient.doctorName} ({patient.doctorContact})</p>
            <p><strong>Speciality:</strong> {patient.speciality}</p>
            <p><strong>Treatment Date:</strong> {new Date(patient.treatmentDate).toLocaleDateString()}</p>
            <p><strong>Treatment Time:</strong> {patient.treatmentTime}</p>
            <p><strong>Medical Report:</strong> {patient.MedicalTreatment}</p>
          </div>

          {/* QR Code */}
          {patient.qrCode && (
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Patient QR Code</h3>
              <img
                src={patient.qrCode}
                alt="QR Code"
                className="inline-block border p-2 rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HospitalProfile;
