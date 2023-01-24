const { response } = require("express")


const createUser = (req, res = response) => {
    res.json({
        ok: true,
        msg:'register'
    })
}

const loginUser = (req, res) => {
    res.json({
        ok: true,
        msg:'login'
    })
}

module.exports = {
    createUser,
    loginUser
}