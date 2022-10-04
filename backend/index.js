require('dotenv').config();
var express = require('express');
require('./Database/connection');
var cors = require('cors');
var app = express();
const routes = require('./Routes/route');
const { urlencoded } = require('express');

//server configuration
var port = 8080;

// App Instance
app.use(cors());
app.use(urlencoded({extended: true}));
app.use('/', routes);

// Execute App
app.listen(process.env.PORT || port, () => {
  console.log('TodoList Backend running on Port: ',port);
});
