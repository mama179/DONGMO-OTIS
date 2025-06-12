const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Route to create a new comment
router.post('/', commentController.createComment);

// Route to get comments for a specific reservation
router.get('/reservation/:reservationId', commentController.getCommentsByReservation);

module.exports = router;