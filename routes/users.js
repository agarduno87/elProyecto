var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const multer = require('multer')

router.get('/login', usersController.login);
router.get('/signup', usersController.signup);

module.exports = router;