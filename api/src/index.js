const express = require('express');
const connection = require('./database/db');
const app = express()
const port = 8000;
const domain = 'localhost';


app.use(express.urlencoded({extended: false}))



connection.connect();
require('./routes/routes')(app, connection)



app.listen(port, function () {
    console.log(`Listening on http://${domain}:${port}/`)
 })


