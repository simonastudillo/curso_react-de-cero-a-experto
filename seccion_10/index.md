# Sección 10: Profundizando Hooks - useReducer

La idea de un reducer es que sea una función pura, una función pura es aquella que resuelve el valor con los argumentos que recibe y no tiene efectos secundarios. Esto significa que dado el mismo conjunto de entradas, siempre devolverá el mismo resultado.

## ¿Por qué la necesidad de un reducer?

En aplicaciones React más complejas, el estado puede volverse difícil de manejar con solo `useState`. Cuando el estado tiene múltiples subvalores o cuando las actualizaciones de estado dependen del estado anterior, `useReducer` puede proporcionar una forma más estructurada y predecible de manejar el estado.