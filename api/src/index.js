const express = require('express');
const app = express()
const mysql = require('mysql2');
const port = 8000;
const domain = 'localhost';

app.use(express.urlencoded({extended: false}))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'arthur-db'
  });


connection.connect();


app.post('/sign-up', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password
    const userObject = {
        name,
        email,
        password
    }
    connection.query("INSERT INTO user SET ?", userObject, function(err, result){
        if(err) throw err;
        console.log(`${userObject.name} has been added to the DB`);
    });
    res.send(name);
})

app.post('/sign-in', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
})


app.listen(port, function () {
    console.log(`Listening on http://${domain}:${port}/`)
 })


app.post('/sign-in', (req, res) => {
    const email = req.body.email;
    const password = req.body.password
})