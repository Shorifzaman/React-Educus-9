import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import './Service.css'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const ServiceSlice = () => {
    const [services, setServices] = useState([]);
    console.log("services.slice(1, 3);", services.slice(1, 4));

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
                <Row xs={1} md={3} className="g-2 ">
                    {
                        
                        services.map(service => <ServiceDetails service={service}
                            key={service.id}/>)
                    }
                    
                </Row>
            </div>
        </div>
    );
};

export default ServiceSlice;