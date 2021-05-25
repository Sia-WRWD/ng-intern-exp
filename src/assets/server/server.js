var md5 = require('md5');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "testing",
    password: "Ilovedonuts123",
    database: "aie",
    port: 3306
});

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.get('/', function (req, res) {
    res.send('Connected to Server!');
})

app.post('/contact', function (req, res) {
    console.log(req.body);
    res.status(200).send({ message: "Contact Data Received!" });

    var contact_name = req.body.name;
    var contact_email = req.body.email;
    var contact_comment = req.body.comment;

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected to Contact Database");

        var sql = "INSERT INTO contact (contact_name, contact_email, contact_comment) VALUES ('" + contact_name + "', '" + contact_email + "','" + contact_comment + "')";
        console.log(sql);
        con.query(sql, function (err, result) {

            console.log(result);

            if (err) throw err;
            console.log("Contact Request Received!");
        });
    });
});

app.post('/registration', async function (req, res, next) {
    console.log(req.body);
    res.status(200).send({ message: "Registration Data Received!" });
    try {
        let { reg_username, reg_name, reg_email, reg_password } = req.body;
        const hashed_password = md5(reg_password.toString())
        const checkUsername = `SELECT user_username FROM user WHERE user_username = ?`;
        con.query(checkUsername, [reg_username], (err, result, fields) => {
            if (!result.length) {
                const sql = `INSERT INTO user (user_name, user_email, user_username, user_password) VALUES (?, ?, ?, ?)`
                con.query(
                    sql, [reg_name, reg_email, reg_username, hashed_password],
                    (err, result, fields) => {
                        if (err) {
                            res.send({ status: 0, data: err });
                        } else {
                            console.log("Successfully Registered!");
                        }
                    })
            }
        });
    } catch (error) {
        res.send({ status: 0, error: error });
    }
});

app.post('/login', async function(req, res, next) {
    console.log(req.body);
    res.status(200).send({ message: "Login Data Received!" });
    try {
        let { log_username, log_password } = req.body;
        const hashed_password = md5(log_password.toString())
        const sql = `SELECT * FROM user WHERE user_username = ? AND user_password = ?`
        con.query(
            sql, [log_username, hashed_password],
            function (err, result, fields) {
                if (err) {
                    res.send({ status: 0, data: err });
                } else {
                    console.log("Successfully Logged In!");
                }
            }
        )
    } catch (error) {
        res.send({ status: 0, error: error });
    }
});

app.listen(PORT, function () {
    console.log("Server running on localhost:" + PORT);
});