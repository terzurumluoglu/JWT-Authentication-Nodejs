const { users } = require('../mock')

exports.getUserByEmailAndPassword = (email, password) => {
    return users.find(u => u.email === email && u.password === password);
}
