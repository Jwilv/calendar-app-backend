const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJwt = (uid, name) => {

    return new Promise((resolve, reject) => {
        const payload = { uid, name }
        jwt.sign(payload,process.env.SECRET_JWT_SEED)
    })

}

module.exports = {
    generateJwt,
}