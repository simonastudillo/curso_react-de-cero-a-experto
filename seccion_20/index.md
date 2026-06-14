# Sección 20: Auth

Sección enfocada en la autenticación y la autorización de los usuarios, adicional usaremos `Zustand` para el estado global.

## Gestor de estado

`Zustand` nos ayudará con el gestor de estado global, para saber si es un administrador, permisos, protección de rutas, etc.


## Temas puntuales
En esta sección nos enfocaremos en mantener el estado de la sesión de los usuarios con JWTs y también lo integraremos con uno de mis gestores de estado favoritos (Zustand)

1. TanStack con Zustand
2. Zustand como gestor de estado
3. Generalidades de los JWTs
4. Mantener la sesión del usuario
5. Autenticación
6. Autorización
7. Protección de rutas
8. Autorización de rutas
9. Y más

La idea es dejar la parte de la autenticación clara y establecerla globalmente para poder consumirla en cualquier lado de nuestra aplicación.