const Like = require('../models/likeModel');

const likeController = {
    getLikesByPostId: (req, res) => {
        const { id } = req.params;

        Like.findAllByPostId(id, (err, likes) => {
            if (err) return res.status(500).send('Database error');
            res.json(likes);
        });
    },

    addLike: (req, res) => {
        const { id } = req.params;
        const userId = req.user.id;

        Like.create(id, userId, (err) => {
            if (err) return res.status(500).send('Database error');
            res.status(201).send('Like added');
        });
    }
};

module.exports = likeController;
