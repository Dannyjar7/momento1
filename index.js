'use strict'
//importo biblioteca para conexión con mongodb
let mongoose = require('mongoose');
let app = require("./app");
let port = 3700;
//promesa para conexión con mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cosita")
    .then(() => {
        console.log("Conexión realizada exitosamente");
        app.listen(port, () => {
            console.log("Corriendo servidor");
        })
    })
    .catch((err) => {
        console.log(err);
    });
