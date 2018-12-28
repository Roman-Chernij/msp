const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const languageSchema = new Schema({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  langKey: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('language', languageSchema);