import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container pt-3">
            <div className='text-center mt-5 mb-5'>
                
                <h2 className='text-danger'><b><span className='text-dark'>Why</span> Choose Us</b></h2>
                <hr className='w-25 mx-auto' />
                <p className='mb-4'>Auctor eleifend egestas felis a suscipit, amet ultricies orci. Eget nonummy ultrices magna ornare tellus molestie.Auctor <br /> eleifend egestas felis a suscipit, amet ultricies orci. Eget nonummy ultrices magna ornare tellus molestie.</p>
                <Accordion className='w-75 mx-auto' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> <b>Best Education System</b> </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> <b>Learning Management</b> </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> <b>Online Certification</b>
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <hr />
                <h2><b><span className='text-danger'>About</span> Us</b></h2>
                <hr className='w-25 mx-auto' />
                <p className='mb-5'>Diam ligula, vitae in. Eros cursus class dui. auctor bibendum magnis nulla massa. Molest condimentum mauris ligula tortor <br />Diam ligula, vitae in. Eros cursus class dui. auctor bibendum magnis nulla massa.  Eros cursus class dui. auctor bibendum magnis nulla massa. Molest condimentum mauris ligula tortor</p>
            </div>
        </div>
    );
};

export default About;