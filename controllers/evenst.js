const { response } = require('express')
const Event = require('../models/Event')


const getEvents = async (req, res = response) => {
    // esto es para ver solo los eventos del usuario activo
    // const evenst = await Event.find({user:req.uid}).populate('user','name')
    const evenst = await Event.find().populate('user','name')
    res.status(200).json({
        ok: true,
        msg: 'get event',
        evenst
    })
}

const newEvent = async (req, res = response) => {
    const event = new Event(req.body)
    try {
        event.user = req.uid;
        const savedEvent = await event.save();
        res.json({
            ok: true,
            event: savedEvent,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'comuniquese con un administrador'
        })
    }
}

const modifyEvent = async(req, res = response) => {
    const eventId = req.params.id
    try {
        const event = await Event.findById(eventId)
    } catch (error) {
        console.log(error);
        res.status(200).json({
            ok: true,
            msg: 'hable con un administrador',
        })
    }
    res.status(200).json({
        ok: true,
        msg: 'modifyEvent',
        eventId
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
