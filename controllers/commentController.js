const Comment = require('../models/commentModel');

const commentController = {
    getCommentsByPostId: (req, res) => {
        const { id } = req.params;

        Comment.findAllByPostId(id, (err, comments) => {
            if (err) return res.status(500).send('Database error');
            res.json(comments);
        });
    },

    addComment: (req, res) => {
        const { id } = req.params;
        const { content } = req.body;
        const userId = req.user.id;

        if (!content) return res.status(400).send('Content is required');

        Comment.create(content, id, userId, (err) => {
            if (err) return res.status(500).send('Database error');
            res.status(201).send('Comment added');
        });
    }
};

module.exports = commentController;
