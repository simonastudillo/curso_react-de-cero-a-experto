# Funcionalidad, caché y optimizaciones

Nos enfocaremos en avanzar en la aplicación de héroes, no quedará terminada del todo, pero sí tendrá paginación, caché, optimización de peticiones, como utilizar menos el useState y más el del uso de query params.

Se usarán parametros en la URL para poder gestionar el estado de la aplicación, como la paginación y los filtros. Tambien nos ayudará a poder compartir enlaces con el estado actual de la aplicación.

Para el uso de la caché se usará Tanstack Query, una librería que nos ayudará a gestionar el estado de los datos obtenidos desde un servidor, con funcionalidades como caché automática, reintentos de peticiones fallidas, y sincronización en tiempo real.