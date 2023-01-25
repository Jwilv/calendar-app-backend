const { response } = require("express")


const createUser = (req, res = response) => {
    const {name, mail, password} = req.body
    res.json({
        ok: true,
        msg: 'register',
        name,
        mail,
        password,
    })
}

const loginUser = (req, res = response) => {
    const { mail, password} = req.body
    res.json({
        ok: true,
        msg: 'login',
        mail,
        password,
    })
}

const revalidateToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
}