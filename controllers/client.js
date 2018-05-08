
// Creación de variables para cargar el modelo
const client_data_schema = require('../models/data')

save = (req, res) => {
    console.log('entre')
    var data = req.body
    //guardar en db
    let data_client = new client_data_schema()
    data_client.nome  = req.body.nome,
    data_client.comentario = req.body.comentario,
    data_client.telefone = req.body.telefone,
    data_client.gmail = req.body.gmail,
    data_client.probabilidad = req.body.probabilidad,
    data_client.conocio = req.body.conocio,
    data_client.res_procurava = req.body.res_procurava,
    data_client.atendimiento = req.body.atendimiento,
    data_client.qualidade = req.body.qualidade,
    data_client.variedade = req.body.variedade,
    data_client.pacote = req.body.pacote,
    data_client.precio = req.body.precio,
    data_client.image = req.body.image

    //carga en db
	data_client.save((err, dataStore) => {
		if(err) res.status(500).send({message: `Error al salvar la db: ${err}`})

		res.status(200).send({data_client: dataStore})
	})

}

module.exports = {
    save
}

//funciones, y llama a productos(modelo)