const Hospital = require("../models/Hospital");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerHospital = async (req, res) => {
  try {
    const { Hname, email, password } = req.body;
    const exist = await Hospital.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already exists" });

    const hash = await bcrypt.hash(password, 10);
    const hospital = await Hospital.create({ Hname, email, password: hash });

    res.status(201).json({ message: "Hospital registered successfully", hospital });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.loginHospital = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hospital = await Hospital.findOne({ email });
    if (!hospital) return res.status(400).json({ message: "Invalid email" });

    const match = await bcrypt.compare(password, hospital.password);
    if (!match) return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign({ id: hospital._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ message: "Login successful", token, hospital });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
