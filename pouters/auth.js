const express = require('express');
const { login, loginOptions } = require('../controllers/auth');
const router = express.Router();

router.post('/login', login);

router.options('/login', loginOptions);

module.exports = router;