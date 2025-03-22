const db = require('../database');

const Post = {
    findAll: (callback) => {
        db.all('SELECT * FROM posts ORDER BY created_at DESC', callback);
    },
    findById: (id, callback) => {
        db.get('SELECT * FROM posts WHERE id = ?', [id], callback);
    },
    create: (title, content, userId, callback) => {
        db.run('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)', [title, content, userId], callback);
    },
    delete: (id, callback) => {
        db.run('DELETE FROM posts WHERE id = ?', [id], callback);
    }
};

module.exports = Post;
