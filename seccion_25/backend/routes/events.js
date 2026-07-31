/*
   Rutas de Eventos
   host + /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use(validarJWT); // Todas las rutas que estén debajo de esta línea van a pasar por este middleware

router.get(
   '/',
   getEventos
)

router.post(
   '/',
   [
      check('title', 'El título es obligatorio').not().isEmpty(),
      check('start', 'Fecha de inicio es obligatoria').custom(isDate),
      check('end', 'Fecha de finalización es obligatoria').custom(isDate),
      validarCampos
   ],
   crearEvento
)

router.put(
   '/:id',
   [
      check('title', 'El título es obligatorio').not().isEmpty(),
      check('start', 'Fecha de inicio es obligatoria').custom(isDate),
      check('end', 'Fecha de finalización es obligatoria').custom(isDate),
      validarCampos
   ],
   actualizarEvento
)

router.delete(
   '/:id',
   eliminarEvento
)

module.exports = router;