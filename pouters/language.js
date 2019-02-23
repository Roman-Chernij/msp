const express = require('express');
const {
  getLanguage,
  createLanguage,
  updateLanguage,
  deleteLanguage
} = require('../controllers/language');
const passport = require('passport');
const { JWT_KEY } = require('../config/config');
const router = express.Router();

router.get('/', getLanguage);
router.post('/', passport.authenticate(JWT_KEY, false), createLanguage);
router.patch('/:id', passport.authenticate(JWT_KEY, false), updateLanguage);
router.delete('/:id', deleteLanguage);

module.exports = router;