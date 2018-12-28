const express = require('express');
const {
  getLanguage,
  createLanguage,
  updateLanguage,
  deleteLanguage
} = require('../controllers/language');
const router = express.Router();

router.get('/', getLanguage);
router.post('/', createLanguage);
router.patch('/:id', updateLanguage);
router.delete('/:id', deleteLanguage);

module.exports = router;