//Importamos libreria express
const express = require('express')
//Genero objeto
const app = express();
//Especificamos directorio publico
app.use(express.static(__dirname + '/public'));
//Escuchar el ppuerto 3000
app.listen(3000, () => {
    console.log('Escuchando el puerto tcp 3000');
});