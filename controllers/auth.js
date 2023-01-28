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
            uid : user.id,
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
        //confirmar email
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                ok:false,
                msg:'el correo electronico seleccionado es incorrecto'
            })
        }
        //confirmar password
        const validPassword = await bcrypt.compareSync(password,user.password)
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