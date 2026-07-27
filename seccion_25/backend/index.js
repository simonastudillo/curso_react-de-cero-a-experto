const express = require('express');
const cors = require('cors');
// Cargar variables de entorno
require('dotenv').config();

//  Crear el servidor de express
const app = express();

//  Conectar a base de datos
const { dbConnection } = require('./database/config');

// cors
app.use(cors());

dbConnection();

// Directorio público (middleware)
app.use(express.static('public'));

//  Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

// Escuchar peticiones
app.listen(process.env.PORT || 4000, () => {
   console.log(`Servidor corriendo en el puerto ${process.env.PORT || 4000}`);
});