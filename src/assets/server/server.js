var md5 = require('md5');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 20,
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

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        console.log("Connected to Contact Database");

        var sql = "INSERT INTO contact (contact_name, contact_email, contact_comment) VALUES ('" + contact_name + "', '" + contact_email + "','" + contact_comment + "')";
        console.log(sql);
        connection.query(sql, function (err, result) {

            console.log(result);

            if (err) {
                connection.release();
                throw err;
            } else {
                console.log("Contact Request Received!");
                connection.release();
            }
        });
    });
});

app.post('/registration', async function (req, res, next) {

    console.log(req.body);
    res.status(200).send({ message: "Registration Data Received!" });

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        try {
            let { reg_username, reg_name, reg_email, reg_password } = req.body;
            const hashed_password = md5(reg_password.toString())
            const checkUsername = `SELECT user_username FROM user WHERE user_username = ?`;
            connection.query(checkUsername, [reg_username], (err, result, fields) => {
                if (!result.length) {
                    const sql = `INSERT INTO user (user_name, user_email, user_username, user_password) VALUES (?, ?, ?, ?)`
                    con.query(
                        sql, [reg_name, reg_email, reg_username, hashed_password],
                        (err, result, fields) => {
                            if (err) {
                                connection.release();
                                res.send({ status: 0, data: err });
                            } else {
                                connection.release();
                                console.log("Successfully Registered!");
                            }
                        })
                }
            });
        } catch (error) {
            res.send({ status: 0, error: error });
        }
    });
});

app.post('/login', async function (req, res, next) {

    console.log(req.body);
    res.status(200).send({ message: "Login Data Received!" });

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        try {
            let { log_username, log_password } = req.body;
            const hashed_password = md5(log_password.toString())
            const sql = `SELECT * FROM user WHERE user_username = ? AND user_password = ?`
            connection.query(
                sql, [log_username, hashed_password],
                function (err, result, fields) {
                    if (err) {
                        connection.release();
                        res.send({ status: 0, data: err });
                    } else {
                        connection.release();
                        console.log(result);
                    }
                }
            )
        } catch (error) {
            res.send({ status: 0, error: error });
        }
    });
});

app.post('/addIe', async function (req, res, next) {
    console.log(req.body);
    res.status(200).send({ message: "Internship Experience Add Data Received!" });

    const ie_username = req.body.username;
    const ie_company = req.body.company;
    const ie_duration = req.body.duration;
    const ie_experience = req.body.experience;

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        console.log("Connected to the Database!");
        try {
            const sql = "INSERT INTO internship_experience (username, company, duration, experience) VALUES (?, ?, ?, ?)";

            pool.query(
                sql, [ie_username, ie_company, ie_duration, ie_experience],
                function (err, result, fields) {
                    if (err) {
                        connection.release();
                        res.send({ status: 0, data: err });
                    } else {
                        connection.release();
                        console.log(result);
                        console.log("Successfully Shared Internship Experience");
                    }
                });
        } catch (error) {
            res.send({ status: 0, error: error });
        }
    });
});

app.put('/upIe', async function (req, res, next) {
    console.log(req.body);
    res.status(200).send({ message: "Internship Experience Update Data Received!" });

    const ie_username = req.body.username;
    const ie_company = req.body.company;
    const ie_duration = req.body.duration;
    const ie_experience = req.body.experience;

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        console.log("Connected to the Database!");
        try {
            const sql = `UPDATE internship_experience SET company = ?, duration = ?, experience = ? WHERE username = ? `;

            pool.query(
                sql, [ie_company, ie_duration, ie_experience, ie_username],
                function (err, result, fields) {
                    if (err) {
                        connection.release();
                        res.send({ status: 0, data: err });
                    } else {
                        connection.release();
                        console.log(result);
                        console.log(result.affectedRows);
                        console.log("Successfully Updated Internship Experience");
                    }
                });
        } catch (error) {
            res.send({ status: 0, error: error });
        }
    });
});

app.post('/delIe', async function (req, res, next) {
    console.log(req.body);
    res.status(200).send({ message: "Internship Experience Update Data Received!" });

    const ie_username = req.body.username;
    const ie_company = req.body.company;

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        console.log("Connected to the Database!");
        try {
            const sql = "DELETE FROM internship_experience WHERE username = ? AND company = ?";

            pool.query(
                sql, [ie_username, ie_company],
                function (err, result, fields) {
                    if (err) {
                        connection.release();
                        res.send({ status: 0, data: err });
                    } else {
                        connection.release();
                        console.log(result);
                        console.log("Successfully Deleted Internship Experience");
                    }
                });
        } catch (error) {
            res.send({ status: 0, error: error });
        }
    });
});

app.listen(PORT, function () {
    console.log("Server running on localhost:" + PORT);
});