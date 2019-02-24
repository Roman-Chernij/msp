const express = require('express');
const {
  getSocial,
  createSocial,
  updateSocial,
  deleteSocial
} = require('../controllers/social');
const router = express.Router();
const passport = require('passport');
const CONFIG = require('../config/config');

router.get('/', getSocial);
router.post('/', passport.authenticate(CONFIG.JWT_KEY, {session: false}), createSocial);
router.patch('/:id', passport.authenticate(CONFIG.JWT_KEY, {session: false}), updateSocial);
router.delete('/:id', passport.authenticate(CONFIG.JWT_KEY, {session: false}), deleteSocial);

module.exports = router;