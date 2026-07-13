const express = require('express');
const { createFeedback, getFeedback } = require('../controllers/feedbackController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, createFeedback)
  .get(protect, authorizeRoles('agent', 'admin'), getFeedback);

module.exports = router;
