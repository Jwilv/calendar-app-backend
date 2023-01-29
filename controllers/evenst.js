const { response } = require('express')
const Event = require('../models/Event')


const getEvents = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'get event'
    })
}

const newEvent = async(req, res = response) => {
    const event = new Event(req.body)
    try {
        event.user = req.uid;
        const savedEvent = await  event.save();
        res.json({
            ok:true,
            event : savedEvent,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'comuniquese con un administrador'
        })
    }
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
