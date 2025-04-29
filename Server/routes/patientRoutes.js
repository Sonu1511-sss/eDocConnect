const express = require('express');
const router = express.Router();
const { registerPatient, getPatientByAadhar } = require('../controllers/patientController.js');

router.post('/register', registerPatient);
router.get('/:aadharCard', getPatientByAadhar);

module.exports = router;
