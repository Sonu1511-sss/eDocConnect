const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    Hname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Hospital", hospitalSchema);
