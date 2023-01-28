const { response } = require("express")
const User = require('../models/User')
const bcrypt = require('bcryptjs')


const createUser = async (req, res = response) => {
    try {
        const { email, password } = req.body

    let user = await User.findOne({email});

    if (user){
        return res.status(400).json({
            ok:false,
            msg:'un user ya existe con ese correo'
        })
    }
        user = new User(req.body);

        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt)

        await user.save();

        res.status(201).json({
            ok: true,
            uId : user.id,
            name: user.name,
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