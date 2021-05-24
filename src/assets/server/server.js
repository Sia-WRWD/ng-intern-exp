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

app.post('/contact', function(req, res) {
    console.log(req.body);
    res.status(200).send({message: "Contact Data Received!"});

    var name = req.body.name;
    var email = req.body.email;
    var comment = req.body.comment;

    var con = mysql.createConnection({
        host: "localhost",
        user: "testing",
        password: "Ilovedonuts123",
        database: "aie",
        port: 3306
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected to Contact Database");

        var sql = "INSERT INTO contact (contact_name, contact_email, contact_comment) VALUES ('"+name+"', '"+email+"','"+comment+"')";
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