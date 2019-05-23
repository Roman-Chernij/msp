const express = require('express');
const {
  getLanguage,
  getLanguageByID,
  createLanguage,
  updateLanguage,
  deleteLanguage
} = require('../controllers/language');
const passport = require('passport');
const CONFIG = require('../config/config');
const router = express.Router();

router.get('/', getLanguage);
router.get('/:id', getLanguageByID);
router.post('/', passport.authenticate(CONFIG.JWT_KEY, {session: false}), createLanguage);
router.patch('/:id', passport.authenticate(CONFIG.JWT_KEY, {session: false}), updateLanguage);
router.delete('/:id', passport.authenticate(CONFIG.JWT_KEY, {session: false}), deleteLanguage);

module.exports = router;
