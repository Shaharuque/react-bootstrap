import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">
                        About
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navbar;