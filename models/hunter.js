const mongoose = require('mongoose');


const feedSchema = new mongoose.Schema({
  text: String,

}, {
  timestamps: true
});
const AssessmentSchema = new mongoose.Schema({
  questions: String,
  answers: String,

}, {
  timestamps: true
});

const highlightsSchema = new mongoose.Schema({

}, {
  timestamps: true
});
const hunterSchema = new mongoose.Schema({
  name: {
    String,
  },
  email: String,
  avatar: String,
  comments: [feedSchema],
  assessments: [AssessmentSchema],
  googleId: String,
  phoneNo: {
    type: Number,
    min: 5,
    max: 10,
  },
  location: [String],
  groups: [String],
  events: [String],
  workExp: {
    title: [String],
    highlight: [String],
  },
  project: {
    title: [String],
    highlight: [String],
  },
  education: {
    school: [String],
    highlight: [String],
  },
}, {
  timestamp: true
});

module.exports = mongoose.model('Hunter', hunterSchema);