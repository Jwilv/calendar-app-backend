/*
rutas auth
hots + /api/auth
*/

const {Router} = require('express');
const router = Router();
const {createUser} = require('../controllers/auth')


router.post('/new', createUser )

router.post('/', (req, res) => {
    res.json({
        ok: true,
        msg:'login'
    })
})

router.get('/renew', (req, res) => {
    res.json({
        ok: true,
        msg:'renew'
    })
})

module.exports = router;