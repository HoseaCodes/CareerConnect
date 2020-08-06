const mongoose = require('mongoose');


const feedSchema = new mongoose.Schema({
  text: String,
  
}, {
  timestamps: true
});
const hunterSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  comments: [feedSchema],
  googleId: String,
  job: String,
  phoneNo: Number,
  groups: String,
  events: String,
  workExp: String,
  projects: String,
  education: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Hunter', hunterSchema);