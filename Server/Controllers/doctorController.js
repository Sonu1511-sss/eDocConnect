const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor.js');

// Register a new doctor
exports.registerDoctor = async (req, res) => {
  const { dname, email, password } = req.body;

  try {
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor already exists!' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newDoctor = new Doctor({
      dname,
      email,
      password: hashedPassword
    });

    await newDoctor.save();
    const token = jwt.sign({ doctorId: newDoctor._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(201).json({ message: 'Doctor registered successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login a doctor
exports.loginDoctor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(400).json({ message: 'Doctor not found!' });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials!' });
    }

    const token = jwt.sign({ doctorId: doctor._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
