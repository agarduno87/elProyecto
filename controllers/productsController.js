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
    }


};

module.exports = controller;
