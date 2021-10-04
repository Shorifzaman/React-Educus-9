import Button from '@restart/ui/esm/Button';
import { Card, Col } from 'react-bootstrap';
import './Servisecard.css'

const ServiceDetails = (props) => {

    const { name, title, img, detail, price, id } = props.service;

    return (

        <div className="my-3">
            <Col>
                <Card className="shadow p-3 mb-5 bg-white rounded">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title >{title}</Card.Title>
                        <Card.Text>$ {price}</Card.Text>
                        <Card.Text>{name}</Card.Text>
                        <Card.Text>{detail}</Card.Text>
                       
                    </Card.Body>
                    <Button className="btn-main btn-red">Find more</Button>
                </Card>
            </Col>
        </div>

    );
};

export default ServiceDetails;