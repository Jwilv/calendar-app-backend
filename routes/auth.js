




app.get('/', (req, res) => {
    console.log('se requiere /')
    res.json({
        ok: true
    })
})