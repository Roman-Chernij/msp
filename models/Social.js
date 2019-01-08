const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('social', socialSchema);