import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import './Service.css'
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Service = () => {
    const [services, setServices] = useState([]);
    

    useEffect(() => {
        fetch('./CousrData.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
            // .then(data => console.log(data))
    }, [])

    return (
        <div className="s-margin">
            <h1 className="container mb-2 my-5 text-danger">Services</h1>
            <div className='container mb-2'>
                <Row xs={1} md={3} className="g-2">
                    {
                        
                        services.map(service => <ServiceDetails service={service}
                            key={service.id} />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Service;























/* import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Service = (props) => {
    console.log(props.service);
    const { id, name, image, Details } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {Details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;


 */