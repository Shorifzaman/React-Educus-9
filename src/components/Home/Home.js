import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css'
import { Card, Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import SayAbout from '../SayAbout/SayAbout';

const Home = () => {

    return (
        <div>
            <div className='header my-3'>
                <div className="text-center">
                    <h2><span className='tx-c'><b>World Class</b></span> Organization Services</h2>
                    <p>THE MODERN we proviet best education system for you amet mauris lobortis</p>
                    <button class="btn-main btn-white">View our work</button>
                </div>
                
            </div>
            
            <Service />

            <Contact></Contact>
        </div>
    );
};



export default Home;