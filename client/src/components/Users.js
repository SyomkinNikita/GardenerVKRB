import React, {useEffect} from "react";
import Navibar from "./Navibar";
import Axios from "axios";
import { Form, Button } from 'react-bootstrap'

const Users = () => {
    const [firstNameData, setFirstNameData] = React.useState('');
    const [lastNameData, setLastNameData] = React.useState('');
    const [loginData, setLoginData] = React.useState('');
    const [passwordData, setPasswordData] = React.useState('');
    const [birthdayData, setBirthdayData] = React.useState('');
    const [idUser, setIdUser] = React.useState('');

    const updateUser = () => {
        Axios.post('http://localhost:3001/updateUser', {
            firstname: firstNameData,
            lastname: lastNameData,
            login: loginData,
            pass: passwordData,
            birthday: birthdayData,
            id: idUser,
        }).then((response) => {
            console.log(response);
        })
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/users").then((response) => {
            setFirstNameData(response.data['user'][0].firstName || null);
            setLastNameData(response.data['user'][0].lastName || null);
            setLoginData(response.data['user'][0].login || null);
            setPasswordData(response.data['user'][0].pass || null);
            setBirthdayData(response.data['user'][0].birthday || null);
            setIdUser(response.data['user'][0].idUsers)
        })
    }, []);
    console.log(idUser, firstNameData, lastNameData, loginData, passwordData, birthdayData);

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

                <Form.Group controlId="formBasicData">
                    <Form.Label>birthday</Form.Label>
                    <Form.Control type="text" placeholder="YYYY-MM-DD" onChange={(e) => {setBirthdayData(e.target.value)}}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={updateUser} >
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default Users;