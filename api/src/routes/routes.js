
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
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
            console.log(result[0].email)
            let token = jwt.sign({ email: result[0].email }, config.secret)

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
            //   if (result.length) { 
            //     console.log("result", result);
            //     console.log(result[0].password);
            //     if (bcrypt.compareSync(passwordIn, result[0].password)) {

            //         let token = jwt.sign({email: result[0].email}, config.secret)
            //         console.log("you are authenticated")
            //         res.status(200).send("you are authenticated", {auth: true, token: token})
            //     }
            //     else {
            //         console.log("Sorry, we don't know this user");
            //         res.send("Sorry, we don't know this user")
            //     }}
            //     else {
            //         res.send(err)
            //     }
        })
    })
}

module.exports = routesFct;
