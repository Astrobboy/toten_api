
// Creación de variables para cargar el modelo
const client_data_schema = require('../models/data')

save = (req, res) => {
    var data = req.body
    console.log(data)
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
    data_client.image = req.body.image,
    data_client.fecha = req.body.fecha,
    data_client.hora = req.body.hora,
    data_client.mes = req.body.mes,
    data_client.anho = req.body.anho,


    //carga en db
	data_client.save((err, dataStore) => {
		if(err) res.status(500).send({message: `Error al salvar la db: ${err}`})

		res.status(200).send({data_client: dataStore})
	})

}

getDatas = (req, res) => {
    client_data_schema.find({}, (err, datos) => {
		if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!datos) return res.status(404).send({ message: `El dato no existe`})

        res.send(200, { datos })
	})

}


getLim = (req, res) => {
    let limite = Number(req.params.li)
    let inicio = Number(req.params.ini)
    
    client_data_schema.find({}, (err, datos) => {
		if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!datos) return res.status(404).send({ message: `El dato no existe`})
        console.log(datos.length);
        let newData = { 'datos': []}
        if (incio >= datos.length){
            res.send(200, { datos })
        }else{
          for (let i=inicio;i< datos.length; i++) {
            if (datos[i]){
              newData.datos.push(datos[i])
            }
          }
        }
        res.send(200, { newData })
	}).limit(limite)

}




module.exports = {
    save,
    getDatas,
    getLim
}

//funciones, y llama a productos(modelo)

/*
sudo vim /etc/nginx/sites-available/default
$ sudo systemctl restart nginx
sudo nginx -t
*/