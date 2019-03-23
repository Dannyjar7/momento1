'use strict'
//improtan biliotecas para manejo de peticiones http y archivos json
let express = require('express');
let bodyParser = require('body-parser');
//Ejecuto express
let app = express();
// Cargar archivo de rutas
let projectRoutes = require('./Routes/ProjectRoutes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas
app.use('/api',projectRoutes);
module.exports = app;

