import './Footer.css'

import logo from '../../images/logo.png'
import React from 'react';
import { Navbar } from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-light text-center p-2 bgfooter">
                © All right reserved by || <Link href="/home"><img className="logo" src={logo} alt="" />Active</Link>
            </div>
        </div>
    );
};

export default Footer;
