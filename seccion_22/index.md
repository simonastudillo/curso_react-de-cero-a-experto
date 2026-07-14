# Sección 22: Carga de archivos
Lo principal es recibir un archivo y enviarlo al backend, también se verá el despliegue de la aplicación de forma automática en un servidor de producción.

## Temas puntuales
- Drag and drop
- Base de datos
- Backend
- Frontend


## Subir base de datos a un servidor de producción
- Podemos usar [Neon](https://neon.tech/)
- Creamos un nuevo proyecto, seleccionamos la versión de postgres, seleccionamos el cloud provider y la región, y damos click en "Create project"
- Luego haz click en connect y copia el string de conexión.
- En el proyecto de backend, crea un archivo `.env` y agrega la variable `DATABASE_URL` con el string de conexión que copiaste.
- o Puedes cambiar las variables de la base de datos una a una en el archivo `.env` 
- Luego prueba ejecutando el url seed para crear las tablas y datos de prueba en la base de datos.

## Desplegar backend
- Render es una buena opción debido a su tier gratuito.
- Se recomienda crear un repositorio en GitHub y subir el proyecto de backend.
- Luego en render, haz click en "New" y selecciona "Web Service"
- Peguen el nombre del repositorio y seleccionen la rama que quieren desplegar.
- Configuren las variables de entorno necesarias, puedes subir el archivo `.env` a render y luego copiar las variables de entorno que contiene.
- Para finalizar haz click en "Deploy web service" y espera a que se despliegue el backend.
>[!WARNING]
> Recuerda cambiar la variable de entorno de baseUrl en el proyecto de frontend y del backend, para que apunten a la url del backend desplegado.