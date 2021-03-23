/*import React, {useEffect, useState} from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {

    const [firstNameReg, setFirstNameReg] = useState('');
    const [lastNameReg, setLastNameReg] = useState('');
    const [loginReg, setLoginReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [birthdayReg, setBirthdayReg] = useState('');

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            firstname: firstNameReg,
            lastname: lastNameReg,
            login: loginReg,
            pass: passwordReg,
            birthday: birthdayReg,
        }).then((response) => {
            console.log(response);
        })
    };

    const loginUser = () => {
        Axios.post("http://localhost:3001/login", {
            login: login,
            pass: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].login);
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0].firstname);
            }
        })
    }, []);

  return (
      <div className="App">
        <div className="registration">
          <h1>Registration</h1>
          <label>firstName</label>
            <input type="text" onChange={(e) => {setFirstNameReg(e.target.value)}}/>
            <label>lastName</label>
            <input type="text" onChange={(e) => {setLastNameReg(e.target.value)}}/>
            <label>login</label>
            <input type="text" onChange={(e) => {setLoginReg(e.target.value)}}/>
            <label>Password</label>
            <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/>
            <label>Birthday</label>
            <input type="text" onChange={(e) => {setBirthdayReg(e.target.value)}}/>
            <button onClick={register}>Register</button>
        </div>
        <div className='login'>
          <h1>Login</h1>
            <input type="text" placeholder="Login" onChange={(e) => {setLogin(e.target.value)}}/>
            <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
            <button onClick={loginUser}>Login</button>
        </div>
          <h1>{loginStatus}</h1>
      </div>
  );
}

export default App;*/

import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import Switch from "react-bootstrap/Switch";


const App = () => {
    return (
        /*<Router>
            <Route path="/register" exact render={(props) => <Registration/>}/>
            <Route path="/" exact render={(props) => <Main/>} />
        </Router>*/
        <>
            <Router>
                <Switch>
                    <Route path="/" exact render={(props) => <Main/>}/>
                    <Route path="/register" exact render={(props) => <Registration/>}/>
                </Switch>
            </Router>
        </>
    )
};

export default App;