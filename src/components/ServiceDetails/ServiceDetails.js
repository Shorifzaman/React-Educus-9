import Button  from '@restart/ui/esm/Button';
import { Card, Col} from 'react-bootstrap';
// import './Servisecard.css'

const ServiceDetails = (props) => {
    

    const { name, title, img, detail, price } = props.service;


    return (

        <div className="my-3">
            <Col>
                <Card className="shadow p-3 mb-5 bg-white rounded h">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>$ {price}</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                        <Card.Text className="mb-2 text-warrning">{detail}</Card.Text>
                       
                    </Card.Body>
                    <Button className="btn-main btn-red">Find more</Button>
                </Card>
            </Col>
        </div>

    );
};

export default ServiceDetails;