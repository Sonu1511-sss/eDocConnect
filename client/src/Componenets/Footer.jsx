import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-extrabold text-indigo-600">
            Chikitsha <span className="text-gray-100">Portal</span>
          </div>
          <p>Your trusted digital health assistant. Stay connected, stay safe.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Profile</a></li>
            <li><a href="#" className="hover:underline">Appointments</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Email: support@chikitsha.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Health Lane, New Delhi, India</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; 2025 Chikitsha Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
