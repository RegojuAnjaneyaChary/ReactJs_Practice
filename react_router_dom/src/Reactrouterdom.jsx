import { Link } from 'react-router-dom';
import './Reactrouterdom.css';
const Reactrouterdom = () => {
    return(
    <div className="app">
   
      <nav  className="navbar">
        Solutions
        <div  className="nav-links">
         <Link to="/home"> <span>Home</span></Link> 
           <Link to="/About"> <span>About</span></Link> 
             <Link to="/Contact"> <span>Contact</span></Link> 
           
           
        </div>
      </nav>

         <header>
        <h1>React Router DOM Example</h1>
        </header>
    </div>
    )
}
export default Reactrouterdom;