const Comment = require('../models/Comment');

// Create a new comment
exports.createComment = async (req, res) => {
    const { reservationId, userId, content } = req.body;

    if (!content || content.trim().length === 0) {
        return res.status(400).json({ message: 'Comment content cannot be empty.' });
    }

    try {
        const newComment = new Comment({
            reservation: reservationId,
            user: userId,
            content
        });

        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating comment', error });
    }
};

// Get comments for a specific reservation
exports.getCommentsByReservation = async (req, res) => {
    const { reservationId } = req.params;

    try {
        const comments = await Comment.find({ reservation: reservationId }).populate('user', 'username');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving comments', error });
    }
};