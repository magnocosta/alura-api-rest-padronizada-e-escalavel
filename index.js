const express = require('express');
const bodyParser = require('body-parser')
const config = require('config');
const provider = require('./api/routes/provider');

const app = express();

app.use(bodyParser.json());
app.use('/api/providers', provider);

app.listen(config.get('api.port'), () => console.log('System initialized with success'));
