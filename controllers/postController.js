const Post = require('../models/postModel');

const postController = {
    getAllPosts: (req, res) => {
        Post.findAll((err, posts) => {
            if (err) return res.status(500).send('Database error');
            res.json(posts);
        });
    },

    getPostById: (req, res) => {
        const { id } = req.params;
        Post.findById(id, (err, post) => {
            if (err || !post) return res.status(404).send('Post not found');
            res.json(post);
        });
    },

    deletePost: (req, res) => {
        const { id } = req.params;
        const userId = req.user.id;

        Post.findById(id, (err, post) => {
            if (err || !post) return res.status(404).send('Post not found');
            if (post.user_id !== userId) return res.status(403).send('Forbidden');

            Post.delete(id, (err) => {
                if (err) return res.status(500).send('Database error');
                res.send('Post deleted');
            });
        });
    },

    createPost: (req, res) => {
        const { title, content } = req.body;
        const userId = req.user.id;

        Post.create(title, content, userId, (err) => {
            if (err) return res.status(500).send('Database error');
            res.send('Post created');
        });
    },
};

module.exports = postController;
