var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.products);
router.get('/detail/:id?', productsController.detail); //Nos va a cargar únicamente un producto, el del id, en el controlador está toda la lógica.
router.get('/create', productsController.create) //Muestra el formulario para la creación de los productos
router.get('/edit/:id?', productsController.edit) //Muestra el formulario para editar productos
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

router.post('/', productsController.store) //este es el envío de los datos





module.exports = router;
