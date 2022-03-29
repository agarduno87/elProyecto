var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const multer = require('multer')


router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/error', mainController.error);
router.get('/reservation', mainController.reservation);
router.get('/signup', mainController.signup);
router.get('/search', mainController.search);
router.get('/contact', mainController.contact);
router.get('/socialMedia', mainController.socialMedia);
router.get('/extras', mainController.extras);
router.get('/burger', mainController.burger);


module.exports = router;
