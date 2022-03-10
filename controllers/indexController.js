const controller = {
  index: (req, res, next) => {
    res.render('index', { title: 'Zebra' });
  },
  login: (req, res, next) => {
    res.render('login');
  },
  error: (req, res, next) => {
    res.render('error');
  },
  productDetails: (req, res, next) => {
    res.render('productDetails');
  },
  reservation: (req, res, next) => {
    res.render('reservation');
  },
  shoppingCar: (req, res, next) => {
    res.render('shoppingCar');
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
  }


};

module.exports = controller;
