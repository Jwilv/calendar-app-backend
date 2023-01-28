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

const loginUser = async(req, res = response) => {
    try {
        const { email, password } = req.body
        //confirmar password
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                ok:false,
                msg:'el correo electronico seleccionado ya esta en uso'
            })
        }
        //confirmar email
        const validPassword = bcrypt.compareSync(password,User.password)
        if(!validPassword){
            res.status(400).json({
                ok:false,
                msg:'password incorrecto'
            })
        }
    res.json({
        ok: true,
        msg: 'login',
        uid:user.id,
        name:user.name,
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'comuniquese con un administrador',
        })
    }
    
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