# Sección 30: Fin del MERN - Desplegarlo a producción
Usaremos Railway para desplegar el frontend, de ser posible debemos de separar nuestro frontend y backend en dos proyectos distintos, de esta forma evitamos desplieges del backend cuando solo modificamos el frontend y viceversa

## Temas puntuales
- Build de producción
- Desplegar cambios a Railway
- Variables de entorno en React
- Manejo de todas las rutas desde el backend

## Notas
- Para este proyecto se hace un `npm run build` para luego dejar el contenido de la carpeta `build` en la carpeta `public` del backend, de esta forma el backend servirá el frontend y el backend desde la misma URL.
- Esto solo es para fines practicos, en un proyecto real se recomienda separar el frontend y backend en dos proyectos distintos.
- Ocurre un error al entrar directamente a una ruta que no sea la principal, esto se debe a que el backend no sabe como manejar las rutas del frontend
- Hay 2 estrategias para solucionar esto
   - Usar hash (`#`)
   - Usar asterisco `*` para que el backend maneje todas las rutas y redirija al index.html del frontend
- Para este ejemplo usaremos la segunda estrategia
```js
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```