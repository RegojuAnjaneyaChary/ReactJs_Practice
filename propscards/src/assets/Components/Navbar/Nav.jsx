import {Link} from 'react-router-dom';
import './Nav.css';
import { IoCartOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
function Nav() {
    return (
      <div className="nav">
       <h1> Mart</h1>
        <div className="nav-links">
            <Link to="/products"><span>Products</span></Link>
            <Link to="/recipies"><span>Recipies</span></Link>
            <Link to="/users"><span>Users</span></Link> 
             <div className="icon-container">
              <Link to="/cartitems"> <IoCartOutline className="icon" /></Link>
            <Link to="/favoriteitems">  <MdFavorite className="icon" /></Link>
            </div>
        </div>
      </div>
    );
}
export default Nav;