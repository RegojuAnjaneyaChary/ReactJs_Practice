import { data } from './Productsdata.jsx'; 
import { useParams } from 'react-router-dom';
import './Productdetails.css'; 
import Notfound from '../Products/Notfound.jsx'; // Adjust path if needed
import { IoCartOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
function Productdetails() {
  const params = useParams();
  const productDetails = data.products.find((p) => p.id === parseInt(params.id));
  
  
  //////////// cartitems////
  const handleCartItems = (xyz) => {
    alert("Product added to Cart!");
    const allCartItemsFromLS=JSON.parse(localStorage.getItem("cartitems"))||[]
    console.log(allCartItemsFromLS)
    allCartItemsFromLS.push(xyz)
    localStorage.setItem("cartitems",JSON.stringify(allCartItemsFromLS))
  }
   
// ////////// favitems////
const handleFavItems = (xyz) => {
  alert("Product added to FavItems!");
  const allFavItemsFromLS=JSON.parse(localStorage.getItem("favitems"))||[]
  console.log(allFavItemsFromLS)
  allFavItemsFromLS.push(xyz)
  localStorage.setItem("favitems",JSON.stringify(allFavItemsFromLS))
}




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
        <div className="product-details-actions">
          <button onClick={()=>handleCartItems(productDetails)}>AddtoCart <IoCartOutline className="icon1" /></button>
          <button onClick={()=>handleFavItems(productDetails)}>FavItems <MdFavorite className="icon1" /></button>
        </div>
    </div>
  );
}
export default Productdetails;