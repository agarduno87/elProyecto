var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');


router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/error', indexController.error);
router.get('/productDetails', indexController.productDetails);
router.get('/reservation', indexController.reservation);
router.get('/shoppingCar', indexController.shoppingCar);
router.get('/signup', indexController.signup);
router.get('/search', indexController.search);
router.get('/contact', indexController.contact);
router.get('/socialMedia', indexController.socialMedia);
router.get('/extras', indexController.extras);
router.get('/burger', indexController.burger);

module.exports = router;
