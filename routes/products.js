var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.products);
router.get('/detail/:id?', productsController.detail); //Nos va a cargar únicamente un producto, el del id, en el controlador está toda la lógica.

module.exports = router;
