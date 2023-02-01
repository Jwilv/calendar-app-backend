const { response } = require('express')
const Event = require('../models/Event')


const getEvents = async (req, res = response) => {
    // esto es para ver solo los eventos del usuario activo
    // const evenst = await Event.find({user:req.uid}).populate('user','name')
    const events = await Event.find().populate('user', 'name')
    res.status(200).json({
        ok: true,
        msg: 'get event',
        events
    })
}

const newEvent = async (req, res = response) => {
    const event = new Event(req.body)
    try {
        event.user = req.uid;
        const savedEvent = await event.save();
        return res.json({
            ok: true,
            event: savedEvent,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'comuniquese con un administrador'
        })
    }
}

const modifyEvent = async (req, res = response) => {
    const eventId = req.params.id
    const { uid } = req
    try {
        const event = await Event.findById(eventId)
        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: "ningun evento con ese Id"
            })
        }
        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'no tiene privilegio de editar este evento'
            })
        }
        const eventModified = {
            ...req.body,
            user: uid,
        }
        const eventUpdated = await Event.findByIdAndUpdate(eventId, eventModified, { new: true });
        res.json({
            ok: true,
            event: eventUpdated,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: true,
            msg: 'hable con un administrador',
        })
    }
}

const deleteEvent = async(req, res = response) => {
const eventId = req.params.id;
const {uid} = req; 
try {
    const event = await Event.findById(eventId);
    if(!event){
        return res.status(404).json({
            ok: false,
            msg: "ningun evento con ese Id"
        })
    }

    if(event.user.toString() !== uid){
        return res.status(401).json({
            ok: false,
            msg: 'no tiene privilegio de eliminar este evento'
        })
    }
    await Event.findByIdAndDelete(eventId)
    res.status(200).json({
        ok: true,
        msg: 'deleteEvent'
    })
} catch (error) {
    console.log(error);
    return res.status(500).json({
        ok: true,
        msg: 'hable con un administrador',
    })
}

}

module.exports = {
    getEvents,
    newEvent,
    modifyEvent,
    deleteEvent,
}
