## Primeros pasos con React

Temas a tratar en la sección:

- Componentes
- Estructura y nomenclatura
- Hooks - useState
- CSS condicional
- Módulos de css
- Impresiones de variables
- Props
- Mucho más...

[Proyectos de la sección 4](./ejercicios/02-first-steps)

### Estructura de directorio

- vite.config.ts: Le indica vite que se trabaja con React.
- tsconfig.node.json: Configuración de como queremos que aplique el código en
  node
- tsconfig.json: Archivos de referencia donde están las configuraciones
- tsconfig.app.json: Configuración de como queremos que aplique el código en
  react
- README.md: Lugar donde dar instrucciones de como levantar el proyecto.
- package.json: Tiene la información del proyecto de node, scripts,
  dependencias, etc.
- package-lock.json: Indica como se construyo el proyecto.
- index.html: Index de la aplicación, donde se monta React.
- eslint.config.ts: Configuración de como queremos que se codifique, a nivel de
  QA.
- .gitignore: Archivos a ignorar en los repositorios de git.
- node_modules/ : Modulos de dependencias y sus dependencias.
- public/ : Recursos estáticos como imagenes, fuentes, css, etc.
- src/ : Estructura de directorios flexible donde está el proyecto de React.

### Nomenclaturas

- Usar App en el nombre del archivo de entrada para la aplicación, ejemplo:
  FirstStepsApp.tsx
