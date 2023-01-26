const express = require('express')
//obtenemos env con su config
require('dotenv').config();
const {dbConnection} = require('./database/config')

//crear el servidor de express
const app = express();

//Data Base
dbConnection();

//directorio publico
app.use(express.static('public'));

//lectura y parceo del body
app.use(express.json())

//rutas
//auth : crear, login, renew
app.use('/api/auth', require('./routes/auth'));
//CRUD:eventos

//escuchar peticiones
// se obtiene el proceso de env y apuntamos/obtenemos el puerto 
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
});