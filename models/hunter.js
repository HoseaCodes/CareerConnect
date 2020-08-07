const mongoose = require('mongoose');


const feedSchema = new mongoose.Schema({
  text: String,
  
}, {
  timestamps: true
});

const highlightsSchema = new mongoose.Schema({

},{
timestamps: true
});
const hunterSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  comments: [feedSchema],
  googleId: String,
  job: String,
  phoneNo: {
  type: Number,
  min: 5,
  max: 10,
  },
  location: String,
  groups: String,
  events: String,
  workExp: {
   title: String,
   highlights: String,
   start: Date,
   end: Date, 
  },
  proeject: String,
  projects: {
  title: String,
  highlights: String,
  start: Date,
  end: Date, 

  },
  school: String,
  education: {
    school: String,
    highlights: String,
    start: Date,
    end: Date, 
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Hunter', hunterSchema);