import './Header.css'
import logo from '../../images/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='fixed-top shadow-sm bg' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to='/home'><b>Home</b></NavLink>
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to='/about'><b>About us</b></NavLink>
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to='/service'><b>Services</b></NavLink>
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to='/contact'><b>Contact</b></NavLink>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;