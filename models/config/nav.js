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
  }
};
const navigation ={
  langKey: {
    type: String,
    required: true
  },
  body: [bodyNav]
};

module.exports = {
  navigation,
  bodyNav
};
