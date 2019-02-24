const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4 } = require('uuid');

const CONFIG = require('../config/config');

module.exports.login = async function(req, res) {
  if (req.body.email === CONFIG.USER_EMAIL && req.body.password === CONFIG.USER_PASS) {

    CONFIG.UUID = v4() ;
    const token = jwt.sign({
      UUID: CONFIG.UUID
    }, CONFIG.JWT_KEY, {expiresIn: 60 * 60});

    res.status(200).json({
      token: `Bearer ${token}`
    });
  } else {
    res.status(401).json({
      message: 'The email address or password field is not correct'
    })
  }
};