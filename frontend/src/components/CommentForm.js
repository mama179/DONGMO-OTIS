import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ reservationId }) => {
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!comment.trim()) {
            setError('Comment cannot be empty.');
            return;
        }

        if (comment.length > 200) {
            setError('Comment cannot exceed 200 characters.');
            return;
        }

        try {
            await axios.post(`/api/comments`, { reservationId, comment });
            setComment('');
        } catch (err) {
            setError('Failed to submit comment. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Add your comment here..."
                maxLength="200"
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Submit Comment</button>
        </form>
    );
};

export default CommentForm;