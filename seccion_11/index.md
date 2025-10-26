# Memorización y optimizaciones

Para mejorar la experiencia de usuario y el rendimiento de nuestras aplicaciones, React nos ofrece herramientas como `useOptimistic` el cual nos ofrece una forma rápida y sencilla de actualizar la interfaz de usuario de manera optimista, mejorando la percepción de velocidad y fluidez en nuestras aplicaciones aunque aún no esté disponible la confirmación del servidor.

La memorización de componentes de React podría no ser necesario pronto cuando el compilador de React esté lo suficientemente avanzado. La memorización es importante para evitar re-render, es importante evitar re-render innecesarios en componentes que no han cambiado sus props o estado, mejorando así el rendimiento de la aplicación.

## Temas puntuales

- Memorización
- Hooks de memorización como:
   - `useMemo`
   - `useCallback`
- `useOptimistic` para hacer actualizaciones en pantalla rápidas.
- `useTransaction` para evitar bloqueos de UI.
- Simular fallos en posteos optimistas para hacer reversiones.
- Nueva api Use.
- Componente `Suspense`
