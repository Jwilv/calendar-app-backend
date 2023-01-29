const jwt = require('jsonwebtoken');

const generateJwt = (uid, name) => {

    return new Promise((resolve, reject) => {
        const payload = { uid, name }
        jwt.sign(payload,)
    })

}

module.exports = {
    generateJwt,
}