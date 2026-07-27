const { response } = require('express');
const { validarJWT: validarJWTHelper } = require('../helpers/jwt');

const validarJWT = async (req, res = response, next) => {
   const token = req.header('x-token');

   if (!token) {
      return res.status(401).json({
         ok: false,
         msg: 'No hay token en la petición'
      });
   }

   try {
      const { uid, name } = await validarJWTHelper(token);
      req.uid = uid;
      req.name = name;
      next();
   } catch (error) {
      return res.status(401).json({
         ok: false,
         msg: 'Token no válido'
      });
   } 
}

module.exports = {
   validarJWT
}