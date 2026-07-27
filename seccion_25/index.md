# Sección 25: CalendarApp - Backend - Node, Express, mongo
Veremos encriptación de contraseñas, JWT, como validarlo y revalidarlo, hacer conexiones a la base de datos.

## Temas puntuales
- Node
- Express
- Mongoose
- Modelos
- Controllers
- Middlewares de Express
- JWT
- Autenticación pasiva
- Payloads
- Encriptación
- Rutas
- CORS
- Revalidar tokens
- MongoDB
- MongoAtlas
- MongoCompass

## Notas
- El backend tiene los siguientes endpoint:
  - /api/auth: Iniciar sesión y generar JWT
  - /api/auth/new: Crear un nuevo usuario y generar JWT
  - /api/auth/renew: Revalidar el JWT
  - api/events: CRUD de eventos, requiere JWT

- Comandos para el proyecto de backend:
```bash
npm init -y # Crea el package.json
npm i nodemon -g # Instala nodemon globalmente, al ser globalmente debemos hacerlo con permisos de administrador
node index.js # Inicia el servidor con nodemon o ejecuta el archivo index.js
npm i express # Instala express
npm i dotenv # Instala dotenv para manejar variables de entorno
npm i express-validator # Instala express-validator para validar los datos de las peticiones
npm i mongoose # Instala mongoose para conectarse a MongoDB
npm i bcryptjs # Instala bcryptjs para encriptar las contraseñas
npm i jsonwebtoken # Instala jsonwebtoken para generar y validar JWT
npm i cors # Instala cors para permitir peticiones desde otros dominios
```
- configuramos package.json para agregar un script de inicio con nodemon:
```json
"dev": "nodemon index.js",
"start": "node index.js"
```
- Se crea carpeta public con index.html y index.css para servir archivos estáticos
- Se utilizan variables de entorno con un archivo .env
```env
PORT=4000
DB_CNN=mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/<nombre_base_de_datos>
SECRET_JWT_SEED=palabra_secreta_para_generar_jwt
```
- Se crea directio de routes para manejar las rutas de la API
- ya que la aplicación crece bastante, se decide usar controladores para manejar la lógica de las rutas, por lo que se crea un directorio controllers
- En los controladres se decide importar express nuevamente para tener el intelisense de Request y Response, aunque no es necesario ya que express ya está importado en index.js
- Se utiliza middleware para recibir el body de las peticiones, para ello se utiliza express.json()
- Usar referencia de [status code](https://www.restapitutorial.com/httpstatuscodes) para manejar los códigos de respuesta de la API
- Para la validación de datos se utiliza express-validator, se inyecta como middleware en las rutas, y se crea un middleware personalizado para manejar los errores de validación
```javascript
 check('name', 'El nombre es obligatorio').not().isEmpty() // indica que el campo name no puede estar vacío, donde not() indica que no puede estar vacío, y isEmpty() indica que está vacío
 check('email', 'El email es obligatorio').isEmail() // indica que el campo email debe ser un email válido, isEmail() indica que debe ser un email válido
 check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }) // indica que el campo password debe tener al menos 6 caracteres, isLength({ min: 6 }) indica la longitud mínima
 ```
- Se crea un middleware personalizado para manejar los errores de validación, donde se utiliza validationResult de express-validator para obtener los errores de validación, y se devuelve un response con status 400 y un objeto con los errores. Este custom middleware se aplica en las rutas donde se validan los datos, y se coloca después de los check() de express-validator, para que se ejecute después de la validación.
- Se usará MongoDB como base de datos usando el servicio de MongoAtlas, como paquete de Node se utiliza mongoose, que es un ODM (Object Document Mapper) que nos permite interactuar con MongoDB de manera más sencilla, usando modelos y esquemas. Por último se utiliza MongoCompass para visualizar la base de datos y los documentos.
- Se crea un directorio database para manejar la conexión a la base de datos, donde se crea un archivo config.js que exporta una función dbConnection().
- Se crea un directorio models para manejar los modelos de la base de datos, donde se crea un archivo Usuario.js que exporta un modelo de usuario, usando mongoose.Schema para definir el esquema del modelo, y mongoose.model para crear el modelo.
- Se utiliza un hash de una via para encriptar la contraseña del usuario, usando el paquete bcryptjs.
- Se llama de una via porque una vez encriptado no se puede desencriptar, por lo que no se puede obtener la contraseña original, solo se puede comparar la contraseña ingresada con la encriptada usando bcryptjs.compareSync().
- Para el manejo de sesión se utiliza JWT (JSON Web Token), además se crea un helper para manejar las funciones asociadas a JWT, como generar y validar el token. Se utiliza el paquete jsonwebtoken para generar y validar el token, usando jwt.sign() para generar el token, y jwt.verify() para validar el token.
- El JWT se envía y se espera recibir como `x-token` en los headers de la petición, cuando son headers personalizados se debe usar `x-` como prefijo, por ejemplo `x-token`, `x-api-key`, etc.
- Se realiza una configuración básica de CORS (Cross-Origin Resource Sharing) para permitir peticiones desde otros dominios, usando el paquete cors, y se aplica como middleware en express.