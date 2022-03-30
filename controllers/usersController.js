const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    signup: (req, res) => {
        res.render('signup');
    },

    store: (req, res) => {

        const newUser = {
            ...req.body
        }
        users.push(newUser)

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '))
        res.redirect("/users/login")
    }
}

module.exports = controller;