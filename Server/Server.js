const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');

const hospitalRoutes = require("./routes/hospitalRoutes.js");
const doctorRoute = require('./routes/doctorRoute.js');
const patientRoutes = require('./routes/patientRoutes');


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));



app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use("/api/hospitals", hospitalRoutes);
app.use('/api/doctors', doctorRoute);
app.use('/uploads', express.static('uploads'));
// app.use('/api/patient', patientRoutes);
app.use("/api/patient", patientRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('DB connection error:', error.message);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
