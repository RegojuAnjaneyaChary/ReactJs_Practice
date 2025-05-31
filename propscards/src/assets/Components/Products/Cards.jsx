import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Cards.css'; 
function Cards({ SingleProduct }) {
  // console.log(useNavigate, "useNavigate");
  const navigate = useNavigate();
  console.log(navigate, "navigate");
  return (
    <div className='card'>
      <img src={SingleProduct.thumbnail} alt={SingleProduct.name} />
      <h2>{SingleProduct.title}</h2>
      <p>Price: ${SingleProduct.price}</p>
      <button className='btn'   onClick={() => navigate(`/products/${SingleProduct.id}`)}>view more</button>
    </div>
  );
}

export default Cards;