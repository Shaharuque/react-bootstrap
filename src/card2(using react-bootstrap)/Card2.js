import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Card2 = (props) => {
    const { id, price } = props.product
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title:{id}</Card.Title>
                    <Card.Text>
                        price:{price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Card2;