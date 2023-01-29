/*
rutas events
hots + /api/events
*/

const { Router } = require('express');
const router = Router();
//todas tienen que pasar por la validacion de jwt
//obtener eventos
router.get('/', getEvents)
//crear evento
router.post('/',newEvent)
//modificar evento
router.put('/:id',newEvent)
//eliminar evento
router.delete('/:id',newEvent)