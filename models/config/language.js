const language = {
  icon: {
    type: String,
    min: 6,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  langKey: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  show: {
    type: Boolean,
    required: true
  }
};

module.exports = language;
