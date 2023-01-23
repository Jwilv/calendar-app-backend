const express = require('express')
//obtenemos env con su config
require('dotenv').config();

//crear el servidor de express
const app = express();

//directorio publico
app.use(express.static('public'));

//rutas
// app.get('/', (req, res)=>{
//     console.log('se requiere /')
//     res.json({
//         ok:true
//     })
// })

//escuchar peticiones
app.listen(4000,()=>{
    console.log(`Servidor corriendo en el puerto ${4000}`)
});