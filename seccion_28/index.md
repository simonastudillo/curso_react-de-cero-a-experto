# Sección 28: MERN - Calendario + Backend
Parte enfocada en la autenticación de usuarios con el backend, esto se hará utilizando REDUX, hooks y JWT

## Temas puntuales
- Conexión de nuestro Backend con el Frontend

Esta sección trabajaremos integrando nuestro backend con el frontend hecho en React, que ya tenemos casi terminado, sólo debemos de llamar los servicios y dispara las acciones respectivas que ya tenemos en nuestra aplicación del calendario.
Toda esta sección está enfocada en la parte de la autenticación y manejo del JWT, hay que guardar y estar actualizando el token de autenticación y realizar las pruebas respectivas!

## Notas sobre la sección
- Se prepara el backend para que pueda usar variables de entorno, se crea helper `getEnvVariables` para poder obtener las variables de entorno y no tener que estar importando `process.env` en todos lados, además se genera archivo `.env`  y archivo `README.md` para poder documentar los pasos de desarrollo y ejecución del backend.
- Se genera archivo authSlice.js, generamos la entrada en la store para poder manejar el estado de la autenticación.
- El authSlice se genera el reducer de checking: esto se realiza para revisar si al cargar la aplicación ya tenemos un token de autenticación.
- El authSlice se genera el reducer de onLogin: este reducer se dispara cuando el usuario hace login y se guarda el token de autenticación en el localStorage.
- Utilizaremos Axios para realizar las peticiones al backend utlizando interceptores.
- Para esto se genera en api/calendarApi.js, se obtiene la variable de entorno VITE_API_URL  y se configura baseURL para todas las peticiones.
- Se decide no usar Thunks, se creará un hook personalizado de nombre `useAuthStore` 
- Desde este store se hace la petición post al backend para hacer login y se dispara el reducer onLogin, además de guardar el token en el localStorage.
- Se utiliza misma estrategia para el registro de usuarios
- Se genera interceptor de request, esto se utiliza para agregar el token de autenticación a todas las peticiones que se hagan al backend, se agrega header `x-token` con el token de autenticación.
- Para validar el token de autenticación al momento de cargar la aplicación llamanda al `renew` endpoint del backend, este regresa el nuevo token de autenticación, nombre y uuid del usuario.
- Esta función se llamará en el AppRouter, de esta forma al cargar la aplicación se valida si el token de autenticación es válido y se actualiza el estado de la autenticación en el store, con esto mismo validamos que rutas tiene valida, omitiendo que el usuario vea el login
- Para el logout se elimina el token de autenticación del localStorage y se redirige al usuario a la pantalla de login, además se limpia el estado de la autenticación en el store llamando al reducer onLogout.