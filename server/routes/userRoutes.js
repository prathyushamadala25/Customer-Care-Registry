const express = require('express');
const { getUsers, getUserProfile } = require('../controllers/userController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, authorizeRoles('admin'), getUsers);
router.get('/profile', protect, getUserProfile);

module.exports = router;
