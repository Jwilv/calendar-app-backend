const {response} = require('express')
const jwt = require('jsonwebtoken')


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
    const {uid, name} = jwt.verify(
        token,
        process.env.SECRET_JWT_SEED,
    )
    req.uid = uid;
    req.name = name;
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