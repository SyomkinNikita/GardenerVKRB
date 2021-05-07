import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


const Navibar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" varint="dark">
            {/* "Link" in brand component since just redirect is needed */}
            <Navbar.Brand as={Link} to='/home'>Gardener Blog</Navbar.Brand>
            <Nav className="mr-auto">
                {/* "NavLink" here since "active" class styling is needed */}
                <Nav.Link as={NavLink} to='/users'>Редактирование информации о пользователи</Nav.Link>
                <Nav.Link as={NavLink} to='/about'>О программе</Nav.Link>
                <Nav.Link as={NavLink} to='/plantAdd'>Посадить растение</Nav.Link>
                <Nav.Link as={NavLink} to='/recommendation'>Рекомендации для полива</Nav.Link>
                <Nav.Link as={NavLink} to='/articles'>Статьи</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default Navibar;