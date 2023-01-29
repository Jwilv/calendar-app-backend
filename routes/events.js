/*
rutas events
hots + /api/events
*/

const { Router } = require('express');
const {check} = require('express-validator')
const {validateFields} = require('../middlewares/validate-fields')
const router = Router();
const { validateJwt } = require('../middlewares/validate-jwt')
const { getEvents, newEvent, modifyEvent, deleteEvent } = require('../controllers/evenst')
const {isDate} = require('../helpers/isDate')
//todas tienen que pasar por la validacion de jwt
router.use(validateJwt);
//obtener eventos
router.get('/', getEvents)
//crear evento
router.post('/',[
    check('title','title  es requerido').notEmpty(),
    check('start','la fecha de inicio es requerida').custom(isDate),
    validateFields
], newEvent)
//modificar evento
router.put('/:id', modifyEvent)
//eliminar evento
router.delete('/:id', deleteEvent)

module.exports = router;