import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Navibar from "./Navibar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const About = () => {
    return (
        <div className="about">
            <Navibar/>
            <Card style={{ width: '27rem', display: 'block', marginLeft: "auto", marginRight: "auto" }}>
                <Card.Body>
                    <Card.Title>Information VKRB</Card.Title>
                    <Card.Text>
                        Администратор для связи:
                        Сёмкин Никита Евгеньевич ИУ5-83
                        email: nikitka.semkin@gmail.com
                        phone: 79851214062
                    </Card.Text>
                    <Button variant="primary">Back</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;