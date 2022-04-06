import React from 'react';

const Card = (props) => {
    const {id,price}=props.products
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title: {id}</h5>
                        <p className="card-text">Price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;