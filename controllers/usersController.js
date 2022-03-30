const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/usersDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    signup: (req, res) => {
        res.render('signup');
    },

    store: (req, res) => {
        // Do the magic
        const newProduct = {

            //Al new body le faltan 2 campos de la base de datos, el id y la imagen por lo que vamos a ponerlos:
            // id: products[products.length - 1].id + 1, //el array de la base de datos tiene 8 elementos, nos queremos posicionar en el índice 7(el último del array) por lo tanto si el length es = 8, al restar 1 llegamos a la posición 7 del array que corresponde al último elemento

            ...req.body //sintaxis spread nos permite tener todos los elementos del objeto body body.name, body.price... sin tener que escribir 1 por 1
            //Así el new product va a tener todo lo del body
        }
        products.push(newProduct) //agrega al arreglo el producto que acabamos de insertar

        //     // express validator
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')) //Esto es necesario pero no entendí para qué se usa
        res.redirect("/users/login") //Redirige después de guarda un producto, se tiene que poner el path "completo
    }
}

module.exports = controller;