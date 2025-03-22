const express = require('express');
const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();



/**
 * @swagger
 * /api/user/me:
 *   get:
 *     summary: Get the current authenticated user's profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */


router.get('/me', authenticate, userController.getProfile);


router.put('/me', authenticate, userController.updateProfile);

router.get('/:userid', userController.getUserById);

module.exports = router;
