
const express = require('express')

//crear el servidor de express
const app = express();

//rutas
app.get('/', (req, res)=>{
    console.log('se requiere /')
    res.json({
        ok:true
    })
})

//escuchar peticiones
app.listen(4000,()=>{
    console.log(`Servidor corriendo en el puerto ${4000}`)
});