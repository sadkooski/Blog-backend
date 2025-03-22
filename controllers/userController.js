const User = require('../models/userModel');

const userController = {
    getProfile: (req, res) => {
        const userId = req.user.id;

        User.findById(userId, (err, user) => {
            if (err || !user) return res.status(404).send('User not found');
            res.json(user);
        });
    },

    updateProfile: (req, res) => {
        const { username, email } = req.body;
        const userId = req.user.id;

        User.update(userId, username, email, (err) => {
            if (err) return res.status(500).send('Database error');
            res.send('User updated');
        });
    },

    getUserById: (req, res) => {
        const { userid } = req.params;

        User.findById(userid, (err, user) => {
            if (err || !user) return res.status(404).send('User not found');
            res.json(user);
        });
    }
};

module.exports = userController;
