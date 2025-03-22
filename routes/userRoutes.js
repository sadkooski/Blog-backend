const express = require('express');
const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/me', authenticate, userController.getProfile);
router.put('/me', authenticate, userController.updateProfile);
router.get('/:userid', userController.getUserById);

module.exports = router;
