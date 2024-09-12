const express = require('express'); //se importa el modulo Exprese para poder usar sus funciones
const app = express(); //se crea una instancia  de una aplicacion de Expres, que sera nuestro servidor web


// Endpoint básico que devuelve 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.PORT || 3000
console.log(`Using port: ${port}`);
if (require.main === module) { 
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
module.exports = app;
