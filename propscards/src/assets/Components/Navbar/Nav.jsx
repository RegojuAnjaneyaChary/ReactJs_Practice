import { Link } from 'react-router-dom';
import './Nav.css';
import { IoCartOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

function Nav() {
  const dataFromLs = JSON.parse(localStorage.getItem("cartitems")) || [];
  const datafavFromLs = JSON.parse(localStorage.getItem("favitems")) || [];

  return (
    <div className="nav">
      <h1> Mart</h1>
      <div className="nav-links">
        <Link to="/products"><span className='product'>Products</span></Link>
        <Link to="/recipies"><span className='recipies'>Recipies</span></Link>
      
        <div className="icon-container">
          <Link to="/cartitems" className="icon-link">
          
            <IoCartOutline className="icon" />
            <span className="cart-count">{dataFromLs.length}</span>
          </Link>
          <Link to="/favoriteitems" className="icon-link">
            <MdFavorite className="icon" />
            <span className="favorite-count">{datafavFromLs.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Nav;