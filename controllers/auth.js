const { response } = require("express")
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { generateJwt } = require('../helpers/jwt')


const createUser = async (req, res = response) => {
    try {
        const { email, password } = req.body

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'un user ya existe con ese correo'
            })
        }
        user = new User(req.body);


        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt)

        await user.save();

        //generar jwt
        const token = await generateJwt(user.id, user.name)

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'comuniquese con un administrador',
        })
    }
}

const loginUser = async (req, res = response) => {
    try {
        const { email, password } = req.body
        //confirmar email
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'el correo electronico seleccionado es incorrecto'
            })
        }
        //confirmar password
        const validPassword = await bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            res.status(400).json({
                ok: false,
                msg: 'password incorrecto'
            })
        }
        //generar jwt
        const token = await generateJwt(user.id, user.name)
        res.json({
            ok: true,
            msg: 'login',
            uid: user.id,
            name: user.name,
            token,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'comuniquese con un administrador',
        })
    }

}

const revalidateToken = async(req, res = response) => {
    const {uid, name} = req.body;
    const token = await generateJwt(uid,name)
    res.json({
        ok: true,
        msg: 'renew',
        token,
        uid,
        name,
    })
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
}
