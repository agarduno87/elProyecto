// guardar el usuario en la db
const fs = require('fs');
const User = {
    fileName: './data/users.json',
    getData: function () {
        return fs.readFileSync(this.fileName, 'utf-8');
    },
    
    // create: function (userData) {
    //     let data = this.getData();
    //     let users = JSON.parse(data);
    //     users.push(userData);
    //     fs.writeFileSync(this.fileName, JSON.stringify(users));

    // },
    
    // update: function (userData) {
    //     let data = this.getData();
    //     let users = JSON.parse(data);
    //     users.forEach(function (user, index) {
    //         if (user.id === userData.id) {
    //             users[index] = userData;
    //         }
    //     }  
    //     );
    //     fs.writeFileSync(this.fileName, JSON.stringify(users));
    // },
    
    // delete: function (userData) {
    //     let data = this.getData();
    //     let users = JSON.parse(data);
    //     users.forEach(function (user, index) {
    //         if (user.id === userData.id) {
    //             users.splice(index, 1);
    //         }
    //     }  
    //     );
    //     fs.writeFileSync(this.fileName, JSON.stringify(users));
    // },
    
    // read: function (userData) {
    //     let data = this.getData();
    //     let users = JSON.parse(data);
    //     let user = users.find(function (user) {
    //         return user.id === userData.id;
    //     });
    //     return user;
    // },

    // CRUD: function (userData) {
    //     if (userData.id) { 
    //         return this.update(userData),
    //     }, 
    //     else {
    //         return this.create(userData), 
    //     }, else {
    //         return this.delete(userData),
    //     }, else {
    //        return this.read(userData), 
    //     }, else {
    //         return this.CRUD(userData),
    //     },
    // }
};

module.exports = User;


console.log(User.getData());