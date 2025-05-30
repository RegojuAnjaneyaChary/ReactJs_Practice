import React from 'react'
import './Cards.css';
function Cards({ SingleProduct }) {
  return (
    <div className='card'>
      <img src={SingleProduct.thumbnail} alt={SingleProduct.name} />
      <h2>{SingleProduct.name}</h2>
      <p>{SingleProduct.description}</p>
      <p>Price: ${SingleProduct.price}</p>
      <button className='btn'>Add to Cart</button>
    </div>
  );
}

export default Cards;