// import axios from 'axios';

// export const registerPatient = async (formDataToSend) => {
//   try {
//     // Change the URL to your backend API URL
//     const response = await axios.post(
//       'http://localhost:5000/api/patient/register', // Modify URL if necessary
//       formDataToSend,
//       { timeout: 5000 } // Set timeout for 5 seconds
//     );
//     return response.data; // Assuming the server returns the QR code or patient data
//   } catch (error) {
//     if (error.response) {
//       // Server responded with a non-2xx status code
//       console.error('Error Response:', error.response.data);
//       throw new Error(error.response.data.message || 'Server error');
//     } else if (error.request) {
//       // No response received from the server
//       console.error('Error Request:', error.request);
//       throw new Error('No response received from server');
//     } else {
//       // Error setting up the request
//       console.error('Error Message:', error.message);
//       throw new Error(error.message);
//     }
//   }
// };
