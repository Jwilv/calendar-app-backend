const { response } = require("express")


const createUser = (req, res = response) => {
    console.log('se requiere /')
    res.json({
        ok: true,
        msg:'register'
    })
}

module.exports = {
    createUser,
}