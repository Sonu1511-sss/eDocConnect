const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  bloodGroup: { type: String, required: true },
  addharCard: { type: String, required: true, unique: true },
  doctorName: { type: String, required: true },
  doctorContact: { type: String, required: true },
  speciality: { type: String, required: true },
  treatmentDate: { type: Date, required: true },
  treatmentTime: { type: String, required: true },
  MedicalTreatment: { type: String, required: true },
  qrCode: { type: String },
});

module.exports = mongoose.model('Patient', patientSchema);
