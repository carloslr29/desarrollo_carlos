
const express = require('express');
const serverless = require('serverless-http');
const http = require('http');
const helpmet = require('helmet');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;

app.use(helmet());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', require('./source/routes/persona.route'));

module.exports.handler = serverless(app);

//const server = http.createServer(app).listen(port, function (){
//    console.log('Servidor Prueba');
//    console.log('Servidor puerto ' + port);
//});
