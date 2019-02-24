const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyNav = new Schema({
  customTitle: {
    type: String,
    required: true
  },
  originTitle: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
});
const NavSchema = new Schema({
  langKey: {
    type: String,
    required: true
  },
  body: [bodyNav]
});

module.exports = mongoose.model('nav', NavSchema);