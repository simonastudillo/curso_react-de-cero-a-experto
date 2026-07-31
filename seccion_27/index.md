# Sección 27: Despliegue del backend a la nube
Usaremos el servicio Railway para desplegar nuestro backend a la nube, de manera gratuita y sencilla. Se asociará el proyecto con GitHub para que cada vez que hagamos un push a la rama main, se despliegue automáticamente el backend.

## Temas puntuales
- Configuración de Railway
- Subida a GitHub
- Configuración de variables de entorno
- Prueba del backend en la nube

## Notas
- Se crea un repositorio en GitHub para el backend.
- Creamos un cuenta en Railway de tipo hobby, gratuita, y creamos un proyecto nuevo.
- Asociamos el proyecto de Railway con el repositorio de GitHub
- Configuramos las variables de entorno en Railway, copiando los valores del archivo .env del proyecto.
- Seleccionamos deploy, puede tardar unos minutos, y una vez desplegado, Railway nos dará la URL del backend en la nube.