const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config/config')

mongoose.connect(config.db, (err, res) => {
    if(err){
		return sconsole.log(`Error al conectarse a la base de datos: ${err}`)
	}
	console.log('Conexion a la base de datos establecida...')

	app.listen(config.port, () => {
		console.log(`API REST corriendo en localhost:${config.port}`)
	})
});



