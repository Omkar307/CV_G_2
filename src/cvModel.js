const mongoose = require('./db');

const cvSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  workExperience: { type: String, required: true },
  education: { type: String, required: true },
  skills: { type: String, required: true },
});

const Cv = mongoose.model('Cv', cvSchema);

module.exports = Cv;
