const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Class', ClassSchema);

