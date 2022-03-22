const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    products: (req, res, next) => {
        res.render('products', { products }); //se comparte la variable products con la vista

    },
    detail: (req, res) => {
        // Do the magic
        const id = req.params.id
        const product = products.find(p => p.id == id)  //Con esto se encuentra a un producto mediante su id

        // const { discount, price } = product; //se hace un destructuring sino me equivoco

        // const finalPrice = discount / 100 * price; //Hay qu calcular el precio final, se hace la operación matemática correspondiente desde el controlador


        // product.finalPrice = finalPrice;

        res.render("detail", { product })
    },



};

module.exports = controller;
