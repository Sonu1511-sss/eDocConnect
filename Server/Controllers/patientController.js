const Patient = require('../models/Patient.js');
const QRCode = require('qrcode');

// Register a new patient
const registerPatient = async (req, res) => {
  try {
    const {
      name,
      address,
      email,
      phone,
      age,
      bloodGroup,
      addharCard,
      doctorName,
      doctorContact,
      speciality,
      treatmentDate,
      treatmentTime,
      MedicalTreatment,
    } = req.body;

    const existing = await Patient.findOne({ $or: [{ addharCard }, { email }] });
    if (existing) return res.status(400).json({ message: 'Patient already exists' });

    const qrCodeData = `
      Name: ${name}
      Address: ${address}
      Email: ${email}
      Phone: ${phone}
      Age: ${age}
      Blood Group: ${bloodGroup}
      Aadhar: ${addharCard}
      Doctor: ${doctorName}
      Doctor Contact: ${doctorContact}
      Speciality: ${speciality}
      Treatment Date: ${treatmentDate}
      Treatment Time: ${treatmentTime}
      MedicalTreatment: ${MedicalTreatment}
    `;
    const qrCodeUrl = await QRCode.toDataURL(qrCodeData);

    const newPatient = new Patient({
      name,
      address,
      email,
      phone,
      age,
      bloodGroup,
      addharCard,
      doctorName,
      doctorContact,
      speciality,
      treatmentDate,
      treatmentTime,
      MedicalTreatment,
      qrCode: qrCodeUrl,
    });

    await newPatient.save();
    res.status(201).json({
      message: 'Patient registered',
      patient: newPatient,
      qrCode: qrCodeUrl, // Ensure the QR code URL is included in the response
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get patient by Aadhar Card
const getPatientByAadhar = async (req, res) => {
  try {
    const { aadharCard } = req.params;
    const patient = await Patient.findOne({ addharCard: aadharCard });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerPatient, getPatientByAadhar };
