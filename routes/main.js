var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const multer = require('multer')




router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/create', mainController.create);
router.get('/modify', mainController.modify);
router.get('/error', mainController.error);
router.get('/reservation', mainController.reservation);
router.get('/signup', mainController.signup);
router.get('/search', mainController.search);
router.get('/contact', mainController.contact);
router.get('/socialMedia', mainController.socialMedia);
router.get('/extras', mainController.extras);
router.get('/burger', mainController.burger);







// router.get('/create', mainController.create);
// router.get('/CRUD', mainController.CRUD);
// router.get('/productDetails', mainController.productDetails);
// router.get('/detail', mainController.detail);
// router.get('/product-edit', mainController.productEdit);
// router.get('/product-create', mainController.productCreate);
// router.get('/product-update', mainController.productUpdate);
// router.get('/product-delete', mainController.productDelete);
// router.get('/product-read', mainController.productRead);
// router.get('/product-CRUD', mainController.productCRUD);
// router.get('/products', mainController.products);


module.exports = router;
