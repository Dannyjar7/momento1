'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// esquema de la bd
let projectSchema = Schema({
    nombre: String,
    apellido: String,
    ciudad: String,
    edad: Number,
    fruta: String
});
// Mongoose.model('nombre colección','esquema de la colección')
module.exports = mongoose.model('cursos',projectSchema);