var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.products);
router.get('/detail/:id/', productsController.detail);

module.exports = router;
