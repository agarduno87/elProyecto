const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.render('index', { title: 'Zebra' });
  },
  error: (req, res) => {
    res.render('error');
  },
  contact: (req, res) => {
    res.render('contact');
  },
  socialMedia: (req, res) => {
    res.render('socialMedia');
  },
  extras: (req, res) => {
    res.render('extras');
  },
  burger: (req, res) => {
    res.render('burger');
  }
};

module.exports = controller;
