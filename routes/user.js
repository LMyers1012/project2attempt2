const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getAllUsers);
router.get('/:username', userController.getUserByName);
router.post('/', userController.createNewUser);
router.put('/:username', userController.updateUserById);
router.delete('/:username', userController.deleteUserById);

module.exports = router;
