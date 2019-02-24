const express = require('express');
const {
  getNavigation,
  createNavigation,
  updateNavigation,
  deleteNavigation
} = require('../controllers/navigation');
const router = express.Router();
const passport = require('passport');
const CONFIG = require('../config/config');

router.get('/:id', getNavigation);
router.post('/', passport.authenticate(CONFIG.JWT_KEY, {session: false}), createNavigation);
router.patch('/:id', passport.authenticate(CONFIG.JWT_KEY, {session: false}), updateNavigation);
router.delete('/:id', passport.authenticate(CONFIG.JWT_KEY, {session: false}), deleteNavigation);

module.exports = router;