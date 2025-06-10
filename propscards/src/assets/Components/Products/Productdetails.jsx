npm

import { data } from './Productsdata.jsx'; 
import { useParams } from 'react-router-dom';
import './Productdetails.css'; 
import { IoCartOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

function Productdetails() {
  const params = useParams();
  const productDetails = data.products.find((p) => p.id === parseInt(params.id));

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  // Map product fields to match cart/fav structure
  const mappedProduct = {
    id: productDetails.id,
    title: productDetails.title,
    images: productDetails.thumbnail, // Map 'thumbnail' to 'images'
    category: productDetails.category,
    price: productDetails.price
  };

  const handleCartItems = () => {
    alert("Product added to Cart!");
    const allCartItemsFromLS = JSON.parse(localStorage.getItem("cartitems")) || [];
    allCartItemsFromLS.push(mappedProduct);
    localStorage.setItem("cartitems", JSON.stringify(allCartItemsFromLS));
  };

  const handleFavItems = () => {
    alert("Product added to FavItems!");
    const allFavItemsFromLS = JSON.parse(localStorage.getItem("favitems")) || [];
    allFavItemsFromLS.push(mappedProduct);
    localStorage.setItem("favitems", JSON.stringify(allFavItemsFromLS));
  };

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
      <div className="product-details-actions">
        <button onClick={handleCartItems}>
          AddtoCart <IoCartOutline className="icon1" />
        </button>
        <button onClick={handleFavItems}>
          FavItems <MdFavorite className="icon1" />
        </button>
      </div>
    </div>
  );
}
export default Productdetails;