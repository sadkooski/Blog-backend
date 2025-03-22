const express = require('express');
const commentController = require('../controllers/commentController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /api/posts/{id}/comments:
 *   get:
 *     summary: Get all comments for a post
 *     description: This endpoint retrieves all comments for a specific post.
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Post ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comments retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get('/:id/comments', commentController.getCommentsByPostId);

/**
 * @swagger
 * /api/posts/{id}/comments:
 *   post:
 *     summary: Add a new comment to a post
 *     description: This endpoint adds a new comment to a specific post.
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Post ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       400:
 *         description: Missing fields
 *       500:
 *         description: Internal server error
 */
router.post('/:id/comments', authenticate, commentController.addComment);

module.exports = router;
