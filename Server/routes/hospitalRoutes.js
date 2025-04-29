const express = require("express");
const router = express.Router();
const { registerHospital, loginHospital } = require("../controllers/hospitalController.js");

router.post("/register", registerHospital);
router.post("/login", loginHospital);

module.exports = router;
