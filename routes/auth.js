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

//ruta creacion de user (register)
router.post('/new', createUser)

//ruta logeo de user (login)
router.post('/', loginUser)

//renoviacion de token de el user (renew)
router.get('/renew', revalidateToken)

module.exports = router;