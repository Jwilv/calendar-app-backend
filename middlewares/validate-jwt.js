const {response} = require('express')


const validateJwt = (req, res = response, next)=>{
//x-token
const token = req.header('x-token')
if(!token){
    res.status(401).json({
        ok:false,
        msg:'no hay token en la peticion'
    })
}
next();

}

module.exports = {
    validateJwt
}