const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//setup app & its routes
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const routes = require('./routes/index.route');
app.use('/api',routes);

//start http server
app.listen(8080);

module.exports = { app };