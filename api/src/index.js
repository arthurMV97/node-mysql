const express = require('express');
const connection = require('./database/db');
const app = express()
const cors = require('cors')
const port = 3000;
const domain = 'localhost';

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
}) 

connection.connect();
require('./routes/routes')(app, connection)



app.listen(port, function () {
    console.log(`Listening on http://${domain}:${port}/`)
 })


