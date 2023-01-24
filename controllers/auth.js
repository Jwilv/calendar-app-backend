


const createUser = (req, res) => {
    console.log('se requiere /')
    res.json({
        ok: true,
        msg:'register'
    })
}

module.exports = {
    createUser,
}