/*
rutas events
hots + /api/events
*/

const { Router } = require('express');
const router = Router();
const { validateJwt } = require('../middlewares/validate-jwt')
const {getEvents,newEvent,modifyEvent,deleteEvent} = require('../controllers/evenst')
//todas tienen que pasar por la validacion de jwt
//obtener eventos
router.get('/', validateJwt, getEvents)
//crear evento
router.post('/', validateJwt, newEvent)
//modificar evento
router.put('/:id', validateJwt, modifyEvent)
//eliminar evento
router.delete('/:id', validateJwt, deleteEvent)

module.exports = router;