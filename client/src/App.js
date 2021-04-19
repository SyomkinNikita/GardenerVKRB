/*
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Axios from "axios";


const App = () => {
    const [firstNameReg, setFirstNameReg] = React.useState('');
    const [lastNameReg, setLastNameReg] = React.useState('');
    const [loginReg, setLoginReg] = React.useState('');
    const [passwordReg, setPasswordReg] = React.useState('');
    const [loginUser, setLoginUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginStatus, setLoginStatus] = React.useState('');

    Axios.defaults.withCredentials = true;
    const register = () => {
        Axios.post('http://localhost:3001/register', {
            lastname: lastNameReg, firstname: firstNameReg, login: loginReg, password: passwordReg,
        }).then((response) => {
            console.log(response);
        })
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            login: loginUser, password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].Login_Gardener)
            }
        })
    }

    React.useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn ===true) {
                setLoginStatus(response.data.user[0].Login_Gardener);
            }
        })
    }, [])

    console.log(firstNameReg, lastNameReg, loginReg, passwordReg);

    return (
        <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>LastName</label>
                <input type="text" onChange={(e) => setLastNameReg(e.target.value)}/>
                <label>FirstName</label>
                <input type="text" onChange={(e) => setFirstNameReg(e.target.value)}/>
                <label>Login</label>
                <input type="text" onChange={(e) => setLoginReg(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={(e) => setPasswordReg(e.target.value)}/>
                <button onClick={register}>Register</button>
            </div>
            <div className="login">
                <h1>Login</h1>
                <input type="text" onChange={(e) => setLoginUser(e.target.value)}/>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={login}>Login</button>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    )
};

export default App;*/


import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import PlantAdd from "./components/PlantAdd";

function App() {
    return (
        <Router>
            <Route path="/" exact render={(props) => <Registration />} />
            <Route path="/home" render={(props) => <Home />} />
            <Route path="/about" render={(props) => <About/>}/>
            <Route path="/plantAdd" render={(props) => <PlantAdd/>} />
            {/*<Route path="/users" render={(props) => <Users/>}/>*/}
        </Router>
    );
}

export default App;