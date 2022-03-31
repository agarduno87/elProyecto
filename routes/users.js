const express = require('express');
const router = express.Router();
const multer = require('multer')
const { diskStorage } = require('multer')
const path = require('path')


const usersController = require('../controllers/usersController');

router.get('/login', usersController.login);
router.get('/signup', usersController.signup);

router.post('/signup', usersController.store);

module.exports = router;