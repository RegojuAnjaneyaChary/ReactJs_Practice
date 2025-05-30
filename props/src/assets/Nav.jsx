import {Link} from 'react-router-dom';
import './Nav.css';
function Nav() {
    return (
      <div className="nav">
       <h1> Mart</h1>
        <div className="nav-links">
            <Link to="/products"><span>Products</span></Link>
            <Link to="/recipies"><span>Recipies</span></Link>
            <Link to="/users"><span>Users</span></Link> 
       
        </div>
      </div>
    );
}
export default Nav;