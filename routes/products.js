var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.products);
router.get('/detail/:id?', productsController.detail); //Nos va a cargar únicamente un producto, el del id, en el controlador está toda la lógica.
router.get('/create', productsController.create) //Muestra el formulario para la creación de los productos
router.get('/edit/:id?', productsController.edit) //Muestra el formulario para editar productos

router.post('/', productsController.store) //este es el envío de los datos





module.exports = router;
