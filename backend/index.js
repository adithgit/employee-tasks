var express = require('express');
require('./Database/connection');
var cors = require('cors');
var app = express();
const routes = require('./Routes/route');

//server configuration
var port = 6200;

// App Instance
app.use(cors());
app.use(urlencoded({extended: true}));
app.use('/', routes);

// Execute App
app.listen(port, () => {
  console.log('TodoList Backend running on Port: ',port);
});
