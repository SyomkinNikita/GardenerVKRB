import React from "react";
import {Redirect} from 'react-router-dom'
import Axios from "axios";
import Home from "../components/Home";
import {shallowEqual, useDispatch, useSelector} from "react-redux";


const Registration = () => {
    const [firstNameReg, setFirstNameReg] = React.useState('');
    const [lastNameReg, setLastNameReg] = React.useState('');
    const [loginReg, setLoginReg] = React.useState('');
    const [passwordReg, setPasswordReg] = React.useState('');
    const [loginUser, setLoginUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginStatus, setLoginStatus] = React.useState(null);
    const users = useSelector(state => state.data, shallowEqual);
    const dispatch = useDispatch();


    function addUserAction(title) {
        return {type: 'ADD_USER', payload: title}
    }

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
                setLoginStatus(response.data[0].Login_Gardener);
                dispatch(addUserAction(response.data[0]));
            }
        })
    }

    React.useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn ===true) {
                setLoginStatus(response.data.user[0].Login_Gardener);
                dispatch(addUserAction(response.data[0]));
            }
        })
    }, [])

    console.log(loginStatus);

    return (
        <div className="App">
            {(loginStatus !== 'User doesnt exist' && loginStatus !== 'Wrong login/password combination' && loginStatus != null) &&
                <Redirect to="/home" />
            }
            {(loginStatus === 'User doesnt exist' || loginStatus === 'Wrong login/password combination' || loginStatus === null) &&
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
                <div className="login">
                    <h1>Login</h1>
                    <input type="text" onChange={(e) => setLoginUser(e.target.value)}/>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={login}>Login</button>
                </div>
            </div>
            }
        </div>
    )
};

export default Registration;