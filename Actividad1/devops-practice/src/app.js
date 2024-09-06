const express = require('express');
const app = express();

// Endpoint básico que devuelve 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Exporta la aplicación para que pueda ser utilizada en las pruebas
module.exports = app;

if (require.main === module) {
    const port = process.env.PORT || 0; 
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
