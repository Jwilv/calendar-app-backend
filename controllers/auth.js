const { response } = require("express")
const User = require('../models/User')


const createUser = async (req, res = response) => {
    try {
        //const { name, mail, password } = req.body
        const user = new User(req.body);

        await user.save();

        res.status(201).json({
            ok: true,
            msg: 'register',
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'comuniquese con un administrador',
        })
    }
}

const loginUser = (req, res = response) => {
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