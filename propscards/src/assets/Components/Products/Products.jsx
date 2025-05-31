import React from 'react'
import { data } from '../Products/Productsdata.jsx';
import Cards from '../Products/Cards.jsx'; // Adjust the import path as necessary

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