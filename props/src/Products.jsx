import React from 'react'
import { data } from './Productsdata';
import Cards from './Cards.jsx';

function Products() {
  return (
    <div className="cards-container">
      {
        data.products.map((p) => (
          <Cards key={p.id} SingleProduct={p} />
        ))
      }
    </div>
  );
}
export default Products;