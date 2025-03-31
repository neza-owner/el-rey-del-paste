const express = require('express');
const bodyParser = require('body-parser');
const facturaController = require('./controllers/facturacontrollers');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rutas para facturas
app.post('/facturas', facturaController.createFactura);
app.get('/facturas', facturaController.getFacturas);
app.put('/facturas/:id', facturaController.updateFactura);
app.delete('/facturas/:id', facturaController.deleteFactura);

// Rutas para login (sencillo sin JWT)
app.post('/login', facturaController.login);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
