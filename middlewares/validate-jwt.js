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


try {
    
} catch (error) {
    return res.status().json({
        ok:false,
        msg:'token no valido'
    })
}


next();

}

module.exports = {
    validateJwt
}