const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.connect('mongodb+srv://mern_user:iabwq7dXvCd5sgYy@cluster0.sxvlsh2.mongodb.net');
    } catch (error) {
console.log(error)
throw new Error('ERROR al inicializar DB')
    }
}