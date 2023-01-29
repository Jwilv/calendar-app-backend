const { response } = require('express')


const getEvents = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'get event'
    })
}

const newEvent = (req, res = response) => {
    console.log(req.body)
    res.status(200).json({
        ok: true,
        msg: 'newEvent'
    })
}

const modifyEvent = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'modifyEvent'
    })
}

const deleteEvent = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'deleteEvent'
    })
}

module.exports = {
    getEvents,
    newEvent,
    modifyEvent,
    deleteEvent,
}
