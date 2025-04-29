import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook

const HospitalLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    Hname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Create the navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUp
      ? "http://localhost:5000/api/hospitals/register"
      : "http://localhost:5000/api/hospitals/login";

    try {
      const res = await axios.post(url, formData);
      toast.success(res.data.message);

      // Redirect after successful login or sign-up
      if (!isSignUp) {
        // Navigate to the DoctorProfile page after login
        navigate("/HospitalProfile");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="pt-17 flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 md:flex w-full max-w-4xl mt-[6rem]">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src="/src/assets/hospital.png"
            alt="hospital"
            className="w-72 h-72 object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 px-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-700">
            Welcome to <span className="text-indigo-600">eDoc</span>Connect
          </h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {isSignUp && (
              <input
                type="text"
                placeholder="Hospital Name"
                name="Hname"
                onChange={handleChange}
                value={formData.Hname}
                className="w-full border-b-2 border-gray-500 bg-transparent p-2 outline-none"
                required
              />
            )}

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full border-b-2 border-gray-500 bg-transparent p-2 outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="w-full border-b-2 border-gray-500 bg-transparent p-2 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="text-sm text-center text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-1 text-indigo-600 hover:underline font-medium"
            >
              {isSignUp ? "Login here" : "Sign up here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalLogin;
