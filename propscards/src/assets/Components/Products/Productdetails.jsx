import { data } from './Productsdata.jsx'; 
import { useParams } from 'react-router-dom';
import './Productdetails.css'; 
import Notfound from '../Products/Notfound.jsx'; // Adjust path if needed

function Productdetails() {
  const params = useParams();
  const productDetails = data.products.find((p) => p.id === parseInt(params.id));

  if (!productDetails) {
    return <Notfound />;
  }

  return (
    <div className="product-details-container">
      <h1 className="product-details-header">Product ID: {params.id}</h1>
      <div className="product-details-content">
        <img src={productDetails.thumbnail} alt={productDetails.title} />
        <div className="product-details-info">
          <h2>{productDetails.title}</h2>
          <p>Price: ${productDetails.price}</p>
          <ol>
            {productDetails.description.split('. ').map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Productdetails;