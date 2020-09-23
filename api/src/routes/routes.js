
const bcrypt = require('bcrypt')


let routesFct = function (app, connection) {
    app.post('/sign-up', (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password
        const hash = bcrypt.hashSync(password, 10);
        const userObject = {
            name,
            email,
            password: hash
        }
        connection.query("INSERT INTO user SET ?", userObject, function(err, result){
            if(err) throw err;
            console.log(`${userObject.name} has been added to the DB`);
        });
        res.send(name);
    })
    
    app.post('/sign-in', (req, res) => {
        const emailIn = req.body.email;
        const passwordIn = req.body.password;

        connection.query("SELECT * FROM user WHERE email = ?", emailIn, function (err, result, fields) { 
            if (err) throw err;
            console.log(result[0].password);
            if (bcrypt.compareSync(passwordIn, result[0].password)) {
                console.log("you are authenticated")
                res.send("you are authenticated")
            }
            else {
                console.log("Sorry, we don't know this user");
                res.send("Sorry, we don't know this user")
            }
        })
    })
}

module.exports = routesFct;
