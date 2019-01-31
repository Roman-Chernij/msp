const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { USER_EMAIL, USER_PASS, JWT_KEY } = require('../config/config');

module.exports.login = async function(req, res) {

  if (req.body.email === USER_EMAIL && req.body.password === USER_PASS) {

    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt) ;

    const token = jwt.sign({
      email: req.body.email,
      password
    }, JWT_KEY, {expiresIn: 60 * 60});

    res.status(200).json({
      token: `Bearer ${token}`
    });



    //
    // const candidate = {
    //   email: req.body.email,
    //   password: bcrypt.hashSync(password, salt)
    // };
    // res.status(200).json(candidate)
  } else {
    res.status(401).json({
      message: 'Unauthorized'
    })
  }
};

module.exports.loginOptions = async function(req, res) {
  console.log('loginOptions');
  res.status(201).json({

  });
}