const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
   key: "userId",
   secret: "subscribe",
   resave: false,
   saveUninitialized: false,
    cookie: {
       expires: 60 * 60 * 24,
    }
}));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "VKRB",
});

app.post('/register', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const login = req.body.login;
    const pass = req.body.pass;
    const birthday = req.body.birthday;

    bcrypt.hash(pass, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query("INSERT INTO users (firstname, lastname, login, pass, birthday) VALUES (?,?,?,?,?)", [firstname, lastname, login, hash, birthday],
            (err, result) => {
                console.log(err);
        });
    })
});

app.get("/login", (req, res) => {
   if (req.session.user) {
       res.send({loggedIn: true, user: req.session.user})
   } else {
       res.send({loggedIn: false})
   }
});

app.post('/login', (req, res) => {
    const login = req.body.login;
    const pass = req.body.pass;

    db.query(
        "SELECT *FROM users WHERE login = ?;",
        login,
        (err, result) => {
            if (err) {
                res.send({err: err})
            }
            if (result.length > 0) {
                bcrypt.compare(pass, result[0].pass, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else {
                        res.send({message: "Wrong login/password combination"})
                    }
                })
            } else {
                res.send({message: "User doesn't exist"})
            }
        }
    )
});


app.listen(3001, () => {
  console.log("running server");
});
