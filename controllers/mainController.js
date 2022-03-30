const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res, next) => {
    res.render('index', { title: 'Zebra' });
  },

  login: (req, res, next) => {
    res.render('login');
  },

  create: (req, res, next) => {
    res.render('create');
  },

  modify: (req, res, next) => {
    res.render('modify');
  },

  error: (req, res, next) => {
    res.render('error');
  },
  productDetails: (req, res, next) => {
    res.render('productDetails', { products }); //se comparte la variable products con la vista
  },
  reservation: (req, res, next) => {
    res.render('reservation');
  },
  signup: (req, res, next) => {
    res.render('signup');
  },
  search: (req, res, next) => {
    res.render('search');
  },
  contact: (req, res, next) => {
    res.render('contact');
  },
  socialMedia: (req, res, next) => {
    res.render('socialMedia');
  },
  extras: (req, res, next) => {
    res.render('extras');
  },
  burger: (req, res, next) => {
    res.render('burger');
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
