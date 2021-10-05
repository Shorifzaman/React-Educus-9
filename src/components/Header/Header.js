import './Header.css'
import logo from '../../images/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import { Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
   <Navbar expand="lg" className='fixed-top shadow-sm bg' bg="dark" variant="dark">
  <Navbar.Brand href="#"><img className="logo" src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ms-auto my-2 my-lg-0"
      style={{ maxHeight:'200px'}}
      navbarScroll
    >

      <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }} to='/home'><b>Home</b></NavLink>
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }} to='/about'><b>About us</b></NavLink>
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }} to='/service'><b>Services</b></NavLink>
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }} to='/contact'><b>Contact</b></NavLink>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;