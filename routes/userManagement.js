const express = require('express');
const userController = require('../controllers/useraddController');

// POST /users
const useraddRouter = express.Router();

useraddRouter.post('/createUser', userController.createUser);

module.exports = useraddRouter;
