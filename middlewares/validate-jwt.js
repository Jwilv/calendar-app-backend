const {response} = require('express')


const validateJwt = (req, res = response, next)=>{
//x-token
const token = req.header('x-token')
console.log(token)
next();

}

module.exports = {
    validateJwt
}