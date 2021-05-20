import React, {useEffect} from "react";
import Navibar from "./Navibar";
import Axios from "axios";
import { Form, Button } from 'react-bootstrap'
import {useStore} from "react-redux";

const Users = () => {
    const [firstNameData, setFirstNameData] = React.useState(null);
    const [lastNameData, setLastNameData] = React.useState(null);
    const [loginData, setLoginData] = React.useState(null);
    const [passwordData, setPasswordData] = React.useState(null);
    const [birthdayData, setBirthdayData] = React.useState(null);
    const [idUser, setIdUser] = React.useState(null);
    const store = useStore();

    React.useEffect(() => {
        if (store.getState().data[1] !== undefined) {
            setFirstNameData(store.getState()?.data[1]['First_name_Gardener'] || null);
            setLastNameData(store.getState()?.data[1]['Last_name_Gardener'] || null);
            setLoginData(store.getState()?.data[1]['Login_Gardener'] || null);
            setPasswordData(store.getState()?.data[1]['Password_Gardener'] || null);
            setIdUser(store.getState()?.data[1]['ID_Gardener'] || null);
        }

    }, [])

    const updateUser = () => {
        console.log(firstNameData, lastNameData, loginData, passwordData);
        Axios.post('http://localhost:3001/updateUser', {
            Last_name_Gardener: lastNameData,
            First_name_Gardener: firstNameData,
            Login_Gardener: loginData,
            Password_Gardener: passwordData,
            ID_Gardener: store.getState().data[1]['ID_Gardener'],
        }).then((response) => {
            console.log(response);
        })
    };
    console.log(idUser, firstNameData, lastNameData, loginData, passwordData);


    return (
        <div className="users">
            <Navibar/>
            <h2 style={{textAlign: 'center'}}>Измениние данных</h2>
            <Form>
                <Form.Group controlId="formBasicText">
                    <Form.Label>firstName</Form.Label>
                    <Form.Control type="text" placeholder="Enter firstName" onChange={(e) => {setFirstNameData(e.target.value)}}/>
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>lastName</Form.Label>
                    <Form.Control type="text" placeholder="Enter lastName" onChange={(e) => {setLastNameData(e.target.value)}}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>login</Form.Label>
                    <Form.Control type="text" placeholder="Enter login" onChange={(e) => {setLoginData(e.target.value)}}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={(e) => {setPasswordData(e.target.value)}}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={updateUser} >
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default Users;