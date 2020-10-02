
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { connect } = require('../database/db');
const salt = 10
const config = require('./config');

let routesFct = function (app, connection) {
    app.post('/sign-up', (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        let hash = bcrypt.hashSync(password, salt);
        const userObject = {
            name,
            email,
            password: hash
        }
        connection.query("INSERT INTO user SET ?", userObject, function (err, result) {
            if (err) throw err;
            console.log(`${userObject.name} has been added to the DB`);
        });
        res.send(name);
    })

    app.post('/sign-in', (req, res) => {
        const emailIn = req.body.email;
        const passwordIn = req.body.password;

        connection.query("SELECT * FROM user WHERE email = ?", emailIn, function (err, result, fields) {
            if (err) throw err;
            console.log(result[0])
            let token = jwt.sign({ email: result[0].email, name: result[0].name, id: result[0].ID}, config.secret)

            if (result.length < 1) {
                res.status(401).send("Incorrect")
            } else {
                let hash = result[0].password
                bcrypt.compare(passwordIn, hash, function (err, result) {
                    if (result) {

                        res.status(200).send({ auth: true, token: token, email: emailIn })
                    } else {
                        res.status(401).send("wrong password")
                    }
                })
            }
           
        })
    })

    app.post('/add-new-contact', (req, res) => {
        const email = req.body.email
        const name = req.body.name
        const user_affiliate = req.body.id_user_affiliate //id du store est la valeur ??
        const contactObj = {
            name,
            email,
            user_affiliate
        }

        connection.query("CREATE TABLE IF NOT EXISTS contacts(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), user_affiliate INT)", function (err, res, fields) {
            if (err) throw err;
            console.log("Table created")
        })
        connection.query("INSERT INTO contacts SET ?", contactObj, function (err, result) {
            if (err) throw err;
            console.log(`${contactObj.name} has been added to the contacts`);
        })
        res.send(name);
    })

    app.get('/get-contacts', (req, res) => { //J'ai pas besoin de inner join si je compare l'id du params avec l'id de la table contact ?
        connection.query("SELECT * FROM contacts",(err, result) => { //iat != de id 
            if (err) throw err;
            console.log(result)
            res.send(result)
 
        })
    }),

    app.get('/get-contacts/:id', (req, res) => { //J'ai pas besoin de inner join si je compare l'id du params avec l'id de la table contact ?
    let id = req.params.id
    connection.query(`SELECT * FROM user INNER JOIN contacts ON contacts.user_affiliate = user.ID WHERE user.ID = ${id}`,(err, result) => { //iat != de id 
        if (err) throw err;
        console.log(result)
        res.send(result)

    })
})
}

module.exports = routesFct;
