var bcrypt = require('bcrypt');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var PORT = process.env.PORT || 3000;

var app = express();
var mysql = require ('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', function(req, res) {
    res.send('Connected to Server!');
})

var con = mysql.createConnection({
    host: "localhost",
    user: "testing",
    password: "Ilovedonuts123",
    database: "aie",
    port: 3306
});

app.post('/contact', function(req, res) {
    console.log(req.body);
    res.status(200).send({message: "Contact Data Received!"});

    var contact_name = req.body.name;
    var contact_email = req.body.email;
    var contact_comment = req.body.comment;

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected to Contact Database");

        var sql = "INSERT INTO contact (contact_name, contact_email, contact_comment) VALUES ('"+contact_name+"', '"+contact_email+"','"+contact_comment+"')";
        console.log(sql);
        con.query(sql, function(err, result) {
            
            console.log(result);

            if (err) throw err;
            console.log("Contact Request Received!");
        });
    });
});

app.post('/registration', async(req, res, next)=> {
    console.log(req.body);
    res.status(200).send({message: "Registration Data Received!"});

    var reg_username = req.body.reg_username;
    var reg_name = req.body.reg_name;
    var reg_email = req.body.reg_email;
    var reg_password = req.body.reg_password;

    try {
        hashedPass = await bcrypt.hash(reg_password, 10)
        console.log(reg_password+'\n'+hashedPass);
        res.send('Password is hashed.')
    } catch (err) {
        next(err);
    }

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected to Contact Database");

        var sql = "INSERT INTO user (user_name, user_email, user_username, user_password) VALUES ('"+reg_name+"', '"+reg_email+"','"+reg_username+"','"+hashedPass+"')";
        console.log(sql);
        con.query(sql, function(err, result) {
            
            console.log(result);

            if (err) throw err;
            console.log("Contact Request Received!");
        });
    });
});

app.listen (PORT, function() {
    console.log("Server running on localhost:" + PORT);
});