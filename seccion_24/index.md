# Sección 24: MERN Calendar - Estructura y diseño
Mongo, express, React y Node.js, son las tecnologías que se usarán para crear un calendario.

## Temas puntuales
- Estructura y diseño de nuestra aplicación de Calendario
- Uso de componentes de terceros
- Modals
- Configuración de Redux
- CRUD local
- Preparación de pantallas para futuras secciones
- Uso de MomentJS
- Manejo de fechas

## Notas
- Para este proyecto se usa React Router 6, Bootstrap, yarn con vite
- Se utiliza la validación del estado de authenticated en el router para mostrar el login o el calendario según corresponda.
- Se utiliza cnd de fontawesome para los iconos, y se importan los estilos de bootstrap desde el index.html
- Se utiliza la librería react-big-calendar para el calendario, y se configura con date-fns para el manejo de fechas.
- dateFnsLocalizer se importa desde react-big-calendar para configurar el localizador de fechas.
- Creamos un archivo de helpers para las importaciones del calendario y otro para las variables los textos en español.
- Se decide usar useState para almacenar la vista actual del calendario (month, week, day), adicionalmente se almacena en localStorage para que al recargar la página se mantenga la vista seleccionada.
- Para los modal se usa react-modal, y se configura para que se cierre al hacer click fuera del modal.
- Para el modal se decide usar un useState para controlar el formulario y otro para controlar la visibilidad del modal.
- Para alertas se usa sweetalert2, se utiliza para informar sobre errores del formulario
- Se utiliza useMemo para validar el título del evento, en caso de que este vacío genere un clase de error para el input del título.
- Para el manejo de estado global se utiliza Redux toolkit
   - Se crea carpeta store con carpetas de calendar y ui
   - Dentro de store se crea archivo de barril (index.js) para exportar los reducers
   - Dentro de store se crea store.js para configurar el store y los reducers
   - Dentro de ui se crea uiSlice.js para manejar el estado del modal
   - Dentro de calendar se crea calendarSlice.js para manejar el estado de los eventos
   - El provider de redux se agrega en el CalendarioApp.jsx
   - Se decide usar hooks para menejar las stores de calendar y ui, se crean los archivos useCalendarStore.js y useUiStore.js
   - Por ahora se decide no usar Thunk, solo serán peticiones sincrónicas, ya que no se tiene backend.
   - Se utiliza middleware de redux para evitar serializar los objetos de fecha, ya que redux no permite serializar objetos de tipo Date.