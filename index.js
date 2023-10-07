
const express = require('express');
const cors = require('cors'); // Importa el middleware de CORS
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

//cors: es un middleware que permite que un dominio acceda a otro dominio en otro origen. Normalmente, los navegadores no permiten que las solicitudes de JavaScript accedan a un dominio diferente por razones de seguridad. CORS es una especificación del W3C para superar este problema.
// Configura CORS para permitir solicitudes desde tu frontend
app.use(cors({
    origin:'*',  //'http://localhost:5173', // Reemplaza con la URL de tu frontend  o utilizar *
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));



// Configuración de bodyParser para analizar JSON
app.use(bodyParser.json());

// Conexión a la base de datos MySQL db = require('./db');

db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida correctamente');
});

// Rutas
const contactRoutes = require('./routes/contactRoutes');
app.use('/contacts', contactRoutes); // http://localhost:3000/contacts

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
