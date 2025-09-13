# Sección 3: Reforzamiento Javascript / TypeScript

> Importante: Desactivar copilot al momento de hacer las tareas.

## Proyect

- Name: reforzamiento
- Framework: Vanilla
- Variant: TypeScript
- Directory: [01-reforzamiento](../ejercicios/01-reforzamiento/)

```node
cd carpeta
npm i
npm run dev
```

### Estructura de directorio

- node_modules/ : Dependencias de desarrollo, no llegan a producción.
- public/ : Archivos públicos que llegan a producción.
- src/ : Es donde trabajamos y escribimos nuestro código.
- .gitignore : Indica los archivos o directorios a ignorar para el control de
  Git
- index.html : Donde se monta la aplicación, se inyecta la aplicación.
- package-lock.json : Se crea automáticamente, son las intrucciones de como se
  construyo, permite eficientizar la creación de los modulos.
- package.json : Tiene información, configuración del proyecto, script y
  dependencias.
- tsconfig.json : Archivo de configuración para indicar como queremos que
  TypeScript trabaje en nuestro proyecto.
