const express = require('express');
const {
  getSocial,
  createSocial,
  updateSocial,
  deleteSocial
} = require('../controllers/social');
const router = express.Router();

router.get('/', getSocial);
router.post('/', createSocial);
router.patch('/:id', updateSocial);
router.delete('/:id', deleteSocial);

module.exports = router;