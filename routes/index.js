'use strict'

const express = require('express')
var ClientData = require('../controllers/client')
//const auth = require('../middelwares')
const routes = express.Router()


routes.get('/', (req, res) => {
    res.send('Hello World')
})

routes.post('/', ClientData.save)
routes.get('/data', ClientData.getDatas)
routes.get('/limite/:ini/:li', ClientData.getLim)
routes.get('/atendimiento', ClientData.getDataAtendimiento)
routes.get('/qualidade', ClientData.getDataVariedade)
routes.get('/variedade', ClientData.getDataQualidade)
routes.get('/pacote', ClientData.getDataPacote)
routes.get('/precio', ClientData.getDataPrecio)



module.exports = routes

//tiene los controladores y las rutas
