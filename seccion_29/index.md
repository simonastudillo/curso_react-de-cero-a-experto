# Sección 29: MERN CRUD - Eventos del calendario
Conectaremos nuestro backend con el frontend para poder realizar las operaciones de CRUD de los eventos del calendario y mantener una información persistente en la base de datos.


## Temas puntuales
- Eventos del calendario + backend

Toda esta sección está enfocada en hacer persistentes nuestros cambios y eventos del calendario utilizando nuestro backend, disparando acciones asíncronas que terminan ejecutando las acciones síncronas que habíamos definido anteriormente.

## Notas
- Para el CRUD de los eventos se utilizará hook para los eventos asincronos, no se utilizará Thunk
- para la obtención de eventos se hace un foreach de los eventos obtenidos desde el backend, en caso de que exista no se sobreescriba el evento, sino que se agregue a la lista de eventos del calendario.
- Para la creación de eventos se hace un dispatch de la acción asincrona que hace el post al backend, se obtienen los datos del usuario desde el estado de autenticación en el store.
- Para la actualización de eventos se hace un dispatch de la acción asincrona que hace el put al backend, se obtienen los datos del usuario desde el estado de autenticación en el store.
- Como el crear y actualizar eventos están en la misma función del hook store, se agrega try/catch para manejar los errores de manera adecuada y mostrar mensajes de error al usuario en caso de que algo falle.
- Al realizar logout se limpia el estado de los eventos del calendario, para que al iniciar sesión nuevamente no se muestren los eventos del usuario anterior.
- En el calendario es posible ver eventos de otros usuarios, pero no se pueden modificar ni eliminar, solo se pueden ver. Se verifica el id del usuario asociada, si el evento es del usuario logueado se muestra de color azul, si es de otro usuario se muestra de color gris y no se puede modificar ni eliminar.