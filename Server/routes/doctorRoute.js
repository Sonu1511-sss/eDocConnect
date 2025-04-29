const express = require('express');
const { registerDoctor, loginDoctor } = require('../controllers/doctorController.js');

const router = express.Router();

// POST request for Doctor Registration
router.post('/register', registerDoctor);

// POST request for Doctor Login
router.post('/login', loginDoctor);

module.exports = router;
