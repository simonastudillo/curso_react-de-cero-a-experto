# Sección 22: Carga de archivos
Lo principal es recibir un archivo y enviarlo al backend, también se verá el despliegue de la aplicación de forma automática en un servidor de producción.

## Temas puntuales
- Drag and drop
- Base de datos
- Backend
- Frontend


- Subir base de datos a un servidor de producción
- Podemos usar [Neon](https://neon.tech/)
- Creamos un nuevo proyecto, seleccionamos la versión de postgres, seleccionamos el cloud provider y la región, y damos click en "Create project"
- Luego haz click en connect y copia el string de conexión.
- En el proyecto de backend, crea un archivo `.env` y agrega la variable `DATABASE_URL` con el string de conexión que copiaste.
- o Puedes cambiar las variables de la base de datos una a una en el archivo `.env` 
- Luego prueba ejecutando el url seed para crear las tablas y datos de prueba en la base de datos.