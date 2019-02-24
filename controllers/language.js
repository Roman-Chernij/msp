const Language = require('../models/Language');
const errorHandler = require('../utils/errorHandler');

module.exports.getLanguage = async function(req, res) {

  try {
    const language = await Language.find({});
    res.status(200).json(language)
  } catch(error) {
    errorHandler(res, error)
  }
};

module.exports.createLanguage = async function(req, res) {

  const newLanguage = await Language.findOne({langKey: req.body.langKey});

  if (newLanguage) {
    res.status(409).json({
      message: 'Language with this key is already registered'
    })
  } else {
    const language = new Language({
      icon: req.body.icon,
      title: req.body.title,
      langKey: req.body.langKey
    });

    try {
      await language.save();
          res.status(201).json(language);
    } catch(err) {
      errorHandler(res, err);
    }
  }
};

module.exports.updateLanguage = async (req, res) => {
  try {
    const language = await Language.findByIdAndUpdate(
        { _id: req.params.id },
        {$set: req.body},
        {new: true}
    );
    res.status(200).json(language)
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.deleteLanguage = async function (req, res) {
  try {
    await Language.remove({ _id: req.params.id });
    res.status(201).json({
      success: true,
      status: 'ok',
      id: req.params.id
    });
  } catch(err) {
    errorHandler(res, err);
  }
};