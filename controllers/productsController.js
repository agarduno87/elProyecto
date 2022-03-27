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
        // Do the magic
        const newProduct = {

            id: products[products.length - 1].id + 1, //Eso es para obtener el id nuevo del producto y colocárselo, obtenemos el id del ultimo elemento y le sumanos 1
            //Con el products.length obtenemos un valor de 8, pero no queremos sitiarnos en el lugar 8 sino el 7, ya que el arreglo es de base cero. con el -1 llegamos al valor 7_
            //que sería el último elemento del arreglo, posteriormente le sumamos 1 y así obtenemos el id del último elemento + 1 que será asignado al nuevo objeto.

            ...req.body  //elipsis sintaxis, investigar, hasta acá solo agregamos lo que falta que es el id y la imagen, ya que el body tiene nada mas 4 o 5 elementos
            // image: req.file.filename
        }
        products.push(newProduct) //agrega al arreglo el producto que acabamos de insertar

        //     // express validator
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')) //Esto es necesario pero no entendí para qué se usa
        res.redirect("/products") //Redirige después de guarda un producto, se tiene que poner el path "completo"
    },


    edit: (req, res) => {
        const id = req.params.id
        const product = products.find(p => p.id == id)
        res.render("product-edit-form", { product })
    },

    update: (req, res) => {

        const id = req.params.id
        const idn = products.findIndex(p => p.id == id)
        products[idn] = {
            id,
            ...req.body,
            image: products[idn].image
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
        res.redirect("/products/detail/" + id)
    },

    shoppingCar: (req, res, next) => {
        res.render('shoppingCar');
    }

};

module.exports = controller;
