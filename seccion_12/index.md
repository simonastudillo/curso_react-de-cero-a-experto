# Use Context

Esta sección nos enseñara a usar el drop drilling en React, esto es una técnica que consiste en pasar datos desde un componente padre a un uno o varios componentes hijos a través de las props.

Utilizaremos React Router en la forma de Data Router para evitar el drop drilling y manejar el estado global de la aplicación con Context API.

Realizaremos una aplicación con un login sencillo y páginas públicas y privadas, donde se validará el estado, si hay usuario activo o no para poder mostrar las páginas correspondientes.

Usaremos UseContext y la api use de React ya que es la recomendada en la versión 19 de React.


## Temas putuales

- Hook useContext
- Nueva API - use
- Persistencia de sesiones de usuarios
- Rutas de la aplicación
- Rutas públicas y privadas
- Diseño condicional