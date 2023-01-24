/*
rutas auth
hots + /api/auth
*/

const {Router} = require('express');
const router = Router();


router.post('/new', (req, res) => {
    console.log('se requiere /')
    res.json({
        ok: true,
        msg:'register'
    })
})

router.post('/', (req, res) => {
    console.log('se requiere /')
    res.json({
        ok: true,
        msg:'login'
    })
})

module.exports = router;