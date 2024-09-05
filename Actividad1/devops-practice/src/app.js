const express = require('express');
const app = express();

// Endpoint básico que devuelve 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Puerto donde correrá el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Exporta la aplicación para que pueda ser utilizada en las pruebas
module.exports = app;

