import React from 'react'
// import './Fakeproducts.css'
import data from './Fakedata.jsx'
import './Fakeproducts.css'

const Fakeproducts = () => {
    // data is an array, so use data[0]
    return (
        <div>
            <h1>Fake API products</h1>
            <div className='products-container'>
                {
                    data[0].products.map((product, index) => (
                        <div key={product.id} className='products'>
                            <img src={product.thumbnail} alt={product.title} width={100} />
                            <div className='product-details'>
                            <h2>{product.title}</h2>
                             <h4>Price:{product.price}</h4>
                            <h4>Category:{product.category}</h4>
                            </div>
                          
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Fakeproducts;