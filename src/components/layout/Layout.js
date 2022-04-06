// here using react-bootstrap
import React from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import Card2 from '../../card2(using react-bootstrap)/Card2';

const Layout = () => {
    const products = [
        { id: 1, price: 200 },
        { id: 2, price: 350 },
        { id: 3, price: 400 }
    ]
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <input type="text" />
                <Button variant="success">Click Here</Button>
                <Spinner animation="grow" />
            </div>
            {/*responsive cards layout*/}
            <Row xs={1} md={2} className="g-4 container mx-auto my-4">
                {
                    products.map(product => <Card2 key={product.id} product={product}></Card2>)
                }
            </Row>

        </div>
    );
};

export default Layout;