'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//modelo db

const DataSchema = Schema({
    'nome': String,
    'comentario': String,
    'telefone': String, 
    'gmail': String,
    'probabilidad': String, 
    'conocio': String,
    'res_procurava': String, 
    'atendimiento': String,
    'qualidade': String, 
    'variedade': String,
    'pacote': String, 
    'precio': String,
    'image': String,
    'fecha': String,
    'hora': String,
    'mes': String,
    'anho': String

})

module.exports = mongoose.model('ClientData', DataSchema)