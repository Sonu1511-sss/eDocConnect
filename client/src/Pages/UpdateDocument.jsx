import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';

const UpdateDocument = () => {
  const [updatedFiles, setUpdatedFiles] = useState(null);

  const handleFileChange = (e) => {
    setUpdatedFiles(e.target.files);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    toast.success('Documents updated successfully!');
    setUpdatedFiles(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white p-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">📁 Update Patient Documents</h2>

        <form onSubmit={handleUpdate} className="space-y-8">
          <div>
            <label className="block mb-2 font-semibold text-indigo-700">Upload New Documents</label>
            <div className="flex items-center gap-3 border border-dashed rounded-xl p-4 bg-gray-50 shadow-inner">
              <AiOutlineCloudUpload className="text-3xl text-indigo-600" />
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                className="w-full outline-none text-gray-700"
              />
            </div>
            {updatedFiles && (
              <p className="text-sm text-green-600 mt-2">{updatedFiles.length} file(s) selected</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-10 py-3 rounded-xl hover:bg-indigo-700 transition font-bold shadow-md text-lg"
            >
              Update Documents
            </button>
          </div>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default UpdateDocument;
