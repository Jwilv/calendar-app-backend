const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('DB online');
    } catch (error) {
        console.log(error)
        throw new Error('ERROR al inicializar DB')
    }
}

module.exports = {
    dbConnection,
}