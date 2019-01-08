const Social = require('../models/Social');
const errorHandler = require('../utils/errorHandler');

module.exports.getSocial = async function(req, res) {

  try {
    const language = await Social.find({});
    res.status(200).json(language)
  } catch(error) {
    errorHandler(res, error)
  }
};

module.exports.createSocial = async function(req, res) {
console.log('hello');
  const social = new Social({
    icon: req.body.icon,
    title: req.body.title,
    url: req.body.url
  });

  try {
    await social.save();
    res.status(201).json(social);
  } catch(err) {
    errorHandler(res, err);
  }
};

module.exports.updateSocial = async (req, res) => {

  const social = await Social.findOne({_id: req.params.id});

  if (!social) {
    res.status(404).json({
      message: 'no such identifier was found'
    })
  } else {
    try {
      const social = await Social.findByIdAndUpdate(
          { _id: req.params.id },
          {$set: req.body},
          {new: true}
      );
      res.status(200).json(social)
    } catch (error) {
      errorHandler(res, error);
    }
  }
};

module.exports.deleteSocial = async function (req, res) {
  try {
    await Social.remove({ _id: req.params.id });
    res.status(201).json({
      success: true,
      status: 'ok',
      id: req.params.id
    });
  } catch(err) {
    errorHandler(res, err);
  }
};