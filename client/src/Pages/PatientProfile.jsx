import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { MdQrCode2 } from 'react-icons/md';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    age: '',
    bloodGroup: '',
    addharCard: '',
    doctorName: '',
    doctorContact: '',
    speciality: '',
    treatmentDate: '',
    treatmentTime: '',
    MedicalTreatment: '',
  });

  const [qrCode, setQrCode] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/patient/register', formData);
      toast.success('Patient Registered Successfully!');
      setQrCode(response.data.qrCode);

      setFormData({
        name: '',
        address: '',
        email: '',
        phone: '',
        age: '',
        bloodGroup: '',
        addharCard: '',
        doctorName: '',
        doctorContact: '',
        speciality: '',
        treatmentDate: '',
        treatmentTime: '',
        MedicalTreatment: '',
      });

    } catch (err) {
      toast.error('Registration Failed. Try again.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-2xl pt-[5rem] p-10">
      <h2 className="text-4xl font-extrabold text-indigo-600 mb-10 text-center drop-shadow">
        🏥 Register New Patient
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[ 
            { label: 'Full Name', name: 'name' },
            { label: 'Address', name: 'address' },
            { label: 'Email Address', name: 'email', type: 'email' },
            { label: 'Phone Number', name: 'phone', type: 'tel' },
            { label: 'Age', name: 'age', type: 'number' },
            { label: 'Blood Group (e.g. B+)', name: 'bloodGroup' },
            { label: 'Aadhar Card No.', name: 'addharCard' },
            { label: 'Doctor Name', name: 'doctorName' },
            { label: 'Doctor Contact No.', name: 'doctorContact', type: 'tel' },
            { label: 'Speciality', name: 'speciality' },
            { label: 'Treatment Date', name: 'treatmentDate', type: 'date' },
            { label: 'Treatment Time', name: 'treatmentTime', type: 'time' },
          ].map(({ label, name, type = 'text' }) => (
            <div key={name} className="relative group">
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer p-4 bg-white border border-gray-300 rounded-xl w-full shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm bg-white px-1">
                {label}
              </label>
            </div>
          ))}

          {/* Message Textarea - Spans full width */}
          <div className="col-span-1 md:col-span-2 relative group">
            <textarea
              name="MedicalTreatment"
              value={formData.MedicalTreatment}
              onChange={handleChange}
              rows="3"
              placeholder=" "
              required
              className="peer p-4 bg-white border border-gray-300 rounded-xl w-full shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm bg-white px-1">
              Medical reports
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-10 py-4 rounded-xl hover:bg-indigo-700 transition font-bold shadow-md text-lg"
          >
            Submit All Details
          </button>

          {qrCode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <img src={qrCode} alt="QR Code" className="w-32 h-32 mb-2 shadow-md rounded-md" />
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MdQrCode2 className="text-xl text-indigo-600" /> Scan for Patient Info
              </p>
            </motion.div>
          )}
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default PatientRegistration;
