const languageBinding = require('./languageBinding');

const bodyNav = {
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
  },
  order: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  }
};
const navigation = {
  ...languageBinding,
  body: [bodyNav]
};

module.exports = navigation;
