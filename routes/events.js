/*
rutas events
hots + /api/events
*/

const { Router } = require('express');
const router = Router();
const { validateJwt } = require('../middlewares/validate-jwt')
const {getEvents,newEvent,modifyEvent,deleteEvent} = require('../controllers/evenst')
router.use(validateJwt);
//todas tienen que pasar por la validacion de jwt
//obtener eventos
router.get('/', getEvents)
//crear evento
router.post('/', newEvent)
//modificar evento
router.put('/:id', modifyEvent)
//eliminar evento
router.delete('/:id', deleteEvent)

module.exports = router;