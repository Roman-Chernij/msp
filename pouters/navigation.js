const express = require('express');
const {
  getNavigation,
  createNavigation,
  updateNavigation,
  deleteNavigation
} = require('../controllers/navigation');
const router = express.Router();

router.get('/:id', getNavigation);
router.post('/', createNavigation);
router.patch('/:id', updateNavigation);
router.delete('/:id', deleteNavigation);

module.exports = router;