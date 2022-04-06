import React from 'react';
import Card from '../card/Card';

const CARDGROUP = () => {
    const products=[
        {id: 1,price:200},
        {id:2,price:350},
        {id:3,price:400}
    ]
   
    return (
        <div>
            <h1>Hi i am from card Group</h1>
            <button type="button" className="btn btn-primary">Primary
            </button>

            {/*bootstrap ar grid card use kortese*/}
            <div className="row row-cols-1 row-cols-md-2 g-4 container mx-auto">
                {
                    products.map(product=><Card key={product.id} products={products}></Card>)
                }
            </div>
        </div>
    );
};

export default CARDGROUP;