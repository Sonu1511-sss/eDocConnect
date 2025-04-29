import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'; // Optional for feedback
import { useNavigate } from 'react-router-dom'; // Importing useNavigate

const UserLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    patientName: '',
    password: '',
    confirmPassword: '',
    number: '',
    email: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        // Login API
        const { data } = await axios.post('http://localhost:5000/api/users/login', {
          patientName: formData.patientName,
          password: formData.password,
        });
        toast.success('Login successful! Welcome back.');
        console.log('User logged in:', data.user);

        // Redirect to WelcomeLogin page after login
        navigate('/WelcomeLogin');
      } else {
        // Register API
        const { data } = await axios.post('http://localhost:5000/api/users/register', {
          patientName: formData.patientName,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          number: formData.number,
          email: formData.email,
        });
        toast.success('Registration successful! Please login now.');
        console.log('User registered:', data.user);
        setIsLogin(true); // Switch to login mode
      }
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      toast.error(err.response?.data?.message || 'Something went wrong, please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-cyan-500 to-indigo-600 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 md:flex w-full max-w-4xl">

        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img src="" alt="Doctor" className="w-72 h-72 object-contain" />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 px-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-700">
            Welcome to Chikitsha Portal
          </h3>

          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Enter Patient Name"
            className="w-full border-b-2 border-gray-500 bg-transparent p-2 outline-none"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="w-full border-b-2 border-gray-500 bg-transparent p-2 outline-none"
          />

          {!isLogin && (
            <>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full border-b-2 border-gray-500 bg-transparent p-2 outline-none"
              />
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="w-full border-b-2 border-gray-500 bg-transparent p-2 outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email ID"
                className="w-full border-b-2 border-gray-500 bg-transparent p-2 outline-none"
              />
            </>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-500 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          <p className="text-sm text-center text-gray-600">
            {isLogin ? (
              <>
                Don't have an account?
                <span
                  onClick={() => setIsLogin(false)}
                  className="ml-1 text-indigo-600 hover:underline font-medium cursor-pointer"
                >
                  Sign up here
                </span>
              </>
            ) : (
              <>
                Already have an account?
                <span
                  onClick={() => setIsLogin(true)}
                  className="ml-1 text-indigo-600 hover:underline font-medium cursor-pointer"
                >
                  Login here
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
