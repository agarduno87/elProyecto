const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    products: (req, res, next) => {
        res.render('products', { products }); //se comparte la variable products con la vista products

    },
    detail: (req, res) => {
        const id = req.params.id
        const product = products.find(p => p.id == id) //Se hace este paso para que solo nos renderice un producto, el producto del id
        res.render("detail", { product })//se comparte la variable products con la vista detail
    },
    create: (req, res) => {
        res.render('product-create-form')
    },
    store: (req, res) => {
        const newProduct = {

            //Al new body le faltan 2 campos de la base de datos, el id y la imagen por lo que vamos a ponerlos:
            id: products[products.length - 1].id + 1, //el array de la base de datos tiene 8 elementos, nos queremos posicionar en el índice 7(el último del array) por lo tanto si el length es = 8, al restar 1 llegamos a la posición 7 del array que corresponde al último elemento
            ...req.body //sintaxis spread nos permite tener todos los elementos del objeto body body.name, body.price... sin tener que escribir 1 por 1
            //Así el new product va a tener todo lo del body
        }
        //En este punto ya se tiene el objeto creado en el índice último + 1, ahora se tiene que mandar a la base de datos (JSON), mediante el PUSH
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')) //Esto no supe para qué es??? :c
        res.redirect('/products') //Una vez que se envían los datos se tiene que redireccionar a una dirección con el path completo, en este caso regresamos a la ventana de productos
    },

    edit: (req, res) => {
        const id = req.params.id
        const product = products.find(p => p.id == id)
        res.render("product-edit-form", { product })
    }

};

module.exports = controller;
