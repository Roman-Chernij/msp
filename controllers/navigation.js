const Navigation = require('../models/Nav');
const Language = require('../models/Language');
const errorHandler = require('../utils/errorHandler');

const defaultNavigation = [
  {
    customTitle: '',
    originTitle: 'About',
    icon: ''
  },
  {
    customTitle: '',
    originTitle: 'Education',
    icon: ''
  },
  {
    customTitle: '',
    originTitle: 'Experience',
    icon: ''
  },
  {
    customTitle: '',
    originTitle: 'Portfolio',
    icon: ''
  }
];

module.exports.getNavigation = async function(req, res) {

  const newLanguage = await Language.findOne({_id: req.params.id});

  if (newLanguage) {
    try {
      const navigation = await Navigation.findOne({langKey: req.params.id});

      if (navigation) {
        res.status(200).json(navigation);
      } else {
        res.status(200).json({
          body: []
        });
      }
    } catch(error) {
      errorHandler(res, error)
    }
  } else {
    res.status(421).json({
      success: false,
      status: 'failed',
      message: 'specified is not a valid language identifier'
    })
  }
};

module.exports.createNavigation = async function(req, res) {

  const newNavigation = await Navigation.findOne({langKey: req.body.langKey});

  if (newNavigation) {
    res.status(409).json({
      message: 'Navigation with this key is already registered'
    })
  } else {
    const navigation = new Navigation({
      langKey: req.body.langKey,
      body: req.body.navigation
    });

    try {
      await navigation.save();
      res.status(201).json(navigation);
    } catch(err) {
      errorHandler(res, err);
    }
  }
};

module.exports.updateNavigation = async (req, res) => {

  const navigation = await Navigation.findOne({langKey: req.body.langKey});

  if (!navigation) {
    res.status(409).json({
      message: 'Navigation with this key is already registered'
    })
  } else {
    try {
      const language = await Navigation.findByIdAndUpdate(
          { _id: req.params.id },
          {$set: req.body},
          {new: true}
      );
      res.status(200).json(language)
    } catch (error) {
      errorHandler(res, error);
    }
  }
};

module.exports.deleteNavigation = async function (req, res) {
  try {
    await Navigation.remove({ _id: req.params.id });
    res.status(201).json({
      success: true,
      status: 'ok',
      id: req.params.id
    });
  } catch(err) {
    errorHandler(res, err);
  }
};
