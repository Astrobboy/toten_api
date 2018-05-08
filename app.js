var express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')
const routes = require('./routes')

const app = express()

var corsOptions = {
    origin : '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/', routes)
 


module.exports = app