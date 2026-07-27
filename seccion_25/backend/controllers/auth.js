const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const loginUsuario = async (req, res = response) => {
   const { email, password } = req.body;

   try {
      let usuario  = await Usuario.findOne({ email });
      if (!usuario) {
         return res.status(400).json({
            ok: false,
            msg: 'Las credenciales no son correctas'
         });
      }

      // Validar contraseña
      const validPassword = bcrypt.compareSync(password, usuario.password);
      if (!validPassword) {
         return res.status(400).json({
            ok: false,
            msg: 'Las credenciales no son correctas'
         });
      }
      
      // Generar JWT
      const token = await generarJWT(usuario.id, usuario.name);

      res.status(200).json({
         ok: true,
         uid: usuario.id,
         name: usuario.name,
         token
      });

   }catch (error) {
      console.log(error);
      res.status(500).json({
         ok: false,
         msg: 'Error inesperado, intentelo nuevamente'
      });
   }
}


const crearUsuario = async (req, res = response) => {
   const { name, email, password } = req.body;

   try {
      let usuario  = await Usuario.findOne({ email });
      if (usuario) {
         return res.status(400).json({
            ok: false,
            msg: 'El usuario ya existe'
         });
      }

      // Encriptar contraseña
      const salt = bcrypt.genSaltSync();
      password = bcrypt.hashSync(password, salt);

      usuario = new Usuario({ name, email, password });
      await usuario.save();

      const token = await generarJWT(usuario.id, usuario.name);

      res.status(201).json({
         ok: true,
         uid: usuario.id,
         name: usuario.name,
         token
      });
   }catch (error) {
      console.log(error);
      res.status(500).json({
         ok: false,
         msg: 'Error inesperado, intentelo nuevamente'
      });
   }
}

const revalidarToken = async (req, res = response) => {

   const token = await generarJWT(req.uid, req.name);

   res.json({
      ok: true,
      token
   });
}

module.exports = {
   crearUsuario,
   loginUsuario,
   revalidarToken
};