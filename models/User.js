const fs = require('fs');
const User = {
    fileName: './data/users.json',
    getData: function () {
        return fs.readFileSync(this.fileName, 'utf-8');
    },
    create: function (userData) {
        const users = JSON.parse(this.getData());
        users.push(userData);
        fs.writeFileSync(this.fileName, JSON.stringify(users));
    }
}

console.log(User.getData());