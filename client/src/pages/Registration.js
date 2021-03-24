import React, { useEffect, useState } from "react";
import Axios from "axios";
import Mod from "../components/Mod";
import {Form, Button} from "react-bootstrap";


const Registration = () => {
    const [firstNameReg, setFirstNameReg] = useState('');
    const [lastNameReg, setLastNameReg] = useState('');
    const [loginReg, setLoginReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [birthdayReg, setBirthdayReg] = useState('');

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');
    const [status, setStatus] = useState(false);

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
                setStatus(true);
                setLoginStatus(response.data.user[0].firstname);
            }
        })
    }, []);
    console.log(loginStatus);
    console.log(status);

    return (
        <>
            {status === false &&
            <div className="App">
                <h2 style={{textAlign: 'center'}}>Registration</h2>
                <Form className="registration">
                    <Form.Group controlId="formBasicText">
                        <Form.Label>firstName</Form.Label>
                        <Form.Control type="text" placeholder="Enter firstName" onChange={(e) => {setFirstNameReg(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>lastName</Form.Label>
                        <Form.Control type="text" placeholder="Enter lastName" onChange={(e) => {setLastNameReg(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>login</Form.Label>
                        <Form.Control type="text" placeholder="Enter login" onChange={(e) => {setLoginReg(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" onChange={(e) => {setPasswordReg(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicData">
                        <Form.Label>birthday</Form.Label>
                        <Form.Control type="text" placeholder="YYYY-MM-DD" onChange={(e) => {setBirthdayReg(e.target.value)}}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={register}>
                        Registration
                    </Button>
                </Form>
                <h2 style={{textAlign: 'center'}}>Login</h2>
                <Form className="login">

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>login</Form.Label>
                        <Form.Control type="text" placeholder="Enter login" onChange={(e) => {setLogin(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={loginUser}>
                        Login
                    </Button>
                </Form>
            </div>
            }
            {status && <Mod/>}
        </>
    );
};

export default Registration;