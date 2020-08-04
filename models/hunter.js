const mongoose = require('mongoose');


const feedSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});
const hunterSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  comments: [feedSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Hunter', hunterSchema);