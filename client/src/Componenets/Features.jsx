import React from 'react';

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">24/7 Consultation</h3>
            <p className="text-gray-700">Access healthcare professionals anytime, anywhere.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Health Records</h3>
            <p className="text-gray-700">Securely store and manage your medical history online.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Vaccination Updates</h3>
            <p className="text-gray-700">Get notified about COVID-19 and routine vaccination drives.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
