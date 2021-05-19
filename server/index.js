const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
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
    key: "userID",
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
    password: "MarkXado**99",
    database: "MyVKRB",
});

app.post("/register", (req, res) => {
    const Last_name_Gardener = req.body.lastname;
    const First_name_Gardener = req.body.firstname;
    const Login_Gardener = req.body.login;
    const Password_Gardener = req.body.password;
    const ID_Country_FK = 1;

    bcrypt.hash(Password_Gardener, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query(
            "INSERT INTO Gardener (Last_name_Gardener, First_name_Gardener, Login_Gardener, Password_Gardener, ID_Country_FK) VALUES (?,?,?,?,?)",
            [Last_name_Gardener, First_name_Gardener, Login_Gardener, hash, ID_Country_FK],
            (err, result) => {
                console.log(err);
                console.log(result);
            }
        )
    })
});

app.get("/login" , (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})

app.post('/login', (req, res) => {
    const Login_Gardener = req.body.login;
    const Password_Gardener = req.body.password;

    db.query(
        "SELECT * FROM Gardener WHERE Login_Gardener = ?;",
        Login_Gardener,
        (err, result) => {
            if (err) {
                res.send({err: err});
            }
            if (result.length > 0) {
                bcrypt.compare(Password_Gardener, result[0].Password_Gardener, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else {
                        res.send({message: "Wrong login/password combination"})
                    }
                })
            } else {
                res.send({message: "User doesnt exist"})
            }
        }
    )
});
/*
app.post('/updateUser', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const login = req.body.login;
    const pass = req.body.pass;
    const birthday = req.body.birthday;
    const idUsers = req.body.id;


    bcrypt.hash(pass, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query(`UPDATE Users SET firstname='${firstname}', lastname='${lastname}', login='${login}', pass='${hash}', birthday='${birthday}' WHERE idUsers = '${idUsers}'`, [firstname, lastname, login, hash, birthday],
            (err, result) => {
                console.log(err);
                console.log(result);
            });
    })
});*/


app.post('/plantAdd', (req, res) => {
    const Name_Plant = req.body.Name_Plant;
    const Ripening_season_Plant = req.body.Ripening_season_Plant;
    const Purpose_Plant = req.body.Purpose_Plant;
    const Discribe_Plant = req.body.Discribe_Plant;
    const Status_Plant = req.body.Status_Plant;
    const Water_Plant = req.body.Water_Plant;
    const ID_Gardener_FK = req.body.ID_Gardener_FK;


        db.query("INSERT INTO plant (Name_Plant, Ripening_season_Plant, Purpose_Plant, Discribe_Plant, Status_Plant, Water_Plant, ID_Gardener_FK) VALUES (?,?,?,?,?,?,?)",
            [Name_Plant, Ripening_season_Plant, Purpose_Plant, Discribe_Plant, Status_Plant, Water_Plant, ID_Gardener_FK],
            (err, result) => {
                console.log(err);
                console.log(result);
            });
});

app.post('/userPlant', (req, res) => {
    const ID_Gardener_FK = req.body.ID_Gardener_FK;
    db.query(`SELECT * from Plant WHERE ID_Gardener_FK = ${ID_Gardener_FK}`,
        [ID_Gardener_FK],
        (err, result) => {
            console.log(err);
            console.log(result);
            res.send(result)
        });
})



app.listen(3001, () => {
    console.log("running server")
})