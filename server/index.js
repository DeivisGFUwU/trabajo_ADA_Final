const express = require('express');
const cors = require('cors');
const db = require('./dbConnection'); // Esto asegura que la BD se crea
const authRoutes = require('./authRoutes'); // Importa las rutas de autenticación
const registroRoutes = require('./registroRoutes');
const tipProdRoutes = require('./tipProdRoutes'); // Importa las rutas para tipos de producto
const registroProRoutes = require('./registroProRoutes');
const tipoProductosRoutes = require('./tipoProductosRoutes');
const clientesRoutes = require('./clientesRoutes');
const menuRoutes = require('./menuRoutes');
const app = express();
const PORT = 3001;


app.use(cors({ origin: '*' })); 
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ message: 'Servidor funcionando correctamente' });
});

// Usar rutas de autenticación
app.use('/', authRoutes);

app.use('/api', registroRoutes);

// Rutas para tipos de producto
app.use('/api/tipProdRoutes', tipProdRoutes);
app.use('/api/tiposdeproducto', tipoProductosRoutes);

// Ruta para clientes
app.use('/api/clientes', clientesRoutes);

// Ruta para Menú
app.use('/menu', menuRoutes);

// Rutas para productos
app.use('/api/registroProRoutes', registroProRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
