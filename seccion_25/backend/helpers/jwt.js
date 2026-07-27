const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {
   return new Promise((resolve, reject) => {
      const payload = { uid, name };
      jwt.sign(payload, process.env.SECRET_JWT_SEED, {
         expiresIn: '2h'
      }, (err, token) => {
         if (err) {
            reject('No se pudo generar el JWT');
         }
         resolve(token);
      });
   });
}

const validarJWT = (token) => {
   return new Promise((resolve, reject) => {
      try {
         const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
         resolve({ uid, name });
      } catch (error) {
         console.log(error);
         reject('Token no válido');
      }
   });
}


module.exports = {
   generarJWT,
   validarJWT
}