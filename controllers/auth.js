const { response } = require("express")
const { validationResult } = require('express-validator')


const createUser = (req, res = response) => {
    const { name, mail, password } = req.body
    const erros = validationResult(req);
    console.log(erros);
    if (!erros.isEmpty()) {
        return res.status(400).json({
            ok: false,
            erros: erros.mapped()
        })
    }
    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        mail,
        password,
    })
}

const loginUser = (req, res = response) => {
    if (!erros.isEmpty()) {
        return res.status(400).json({
            ok: false,
            erros: erros.mapped()
        })
    }
    const { mail, password } = req.body
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