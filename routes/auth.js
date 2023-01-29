/*
rutas auth
hots + /api/auth
*/

const { Router } = require('express');
const router = Router();
const {
    createUser,
    loginUser,
    revalidateToken
} = require('../controllers/auth')
const { validateFields } = require('../middlewares/validate-fields');
const { check } = require('express-validator')
const {validatejwt} = require('../middlewares/validate-jwt')

//ruta creacion de user (register)
router.post(
    '/new',
    [check('name','no se obtuvo name').not().isEmpty(),
    check('email','el email debe ser obligatorio').isEmail(),
    check('password','la password debe ser de minimo 6 caracteres').isLength({min:6}),
    validateFields
    ],
    createUser);

//ruta logeo de user (login)
router.post('/', [
    check('email','el email debe es obligatorio').isEmail(),
    check('password','password es obligatoria').isLength({min:6}),
    validateFields
] ,loginUser)

//renoviacion de token de el user (renew)
router.get('/renew',validatejwt, revalidateToken)

module.exports = router;

//pass : iabwq7dXvCd5sgYy