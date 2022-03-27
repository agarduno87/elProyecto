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
            // id: products[products.length - 1].id + 1, //Eso es para obtener el id nuevo del producto y colocárselo, debe ser el último id
            //el id es base cero, entonces el último id si son 16 elementos sería 15. entonces se agarra el length que es 16, el id sería 15. por eso es length-1.
            //entonces el último id seria el products.length-1 + 1
            ...req.body  //elipsis sintaxis, investigar
            // image: req.file.filename
        }
        products.push(newProduct) //agrega al arreglo el producto que acabamos de insertar

        // express validator
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')) //Esto es necesario pero no entendí para qué se usa
        res.redirect("/products") //Redirige después de guarda un producto
    },


    edit: (req, res) => {
        const id = req.params.id
        const product = products.find(p => p.id == id)
        res.render("product-edit-form", { product })
    },

    // update: (req, res) => {
    //     const id = req.params.id
    //     const product = products.find(p => p.id == id)
    //     const productToEdit = {
    //         id,
    //         ...req.body,
    //         image:
    //     }
    //     const body = req.body
    // }
    shoppingCar: (req, res, next) => {
        res.render('shoppingCar');
    }

};

module.exports = controller;
