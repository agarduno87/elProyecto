var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');


router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/create', mainController.create);

router.get('/modify', mainController.modify);
router.get('/error', mainController.error);
router.get('/reservation', mainController.reservation);
router.get('/shoppingCar', mainController.shoppingCar);
router.get('/signup', mainController.signup);
router.get('/search', mainController.search);
router.get('/contact', mainController.contact);
router.get('/socialMedia', mainController.socialMedia);
router.get('/extras', mainController.extras);
router.get('/burger', mainController.burger);


module.exports = router;
