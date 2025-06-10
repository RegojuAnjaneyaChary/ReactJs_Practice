import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1>Class based components</h1>
                <div>
                <Link to="/randomcolor"><button className="logo">Randomcolor</button></Link>
                <Link to="/randomteluguquotes"><button className="logo">RandomTeluguquotes</button></Link>
                <Link to="/randomtheme"><button className="logo">ThemeToggle</button></Link>
                <Link to ="/signup"><button className="logo">SignUp</button></Link>
                </div>
            </div>
        );
    }
}
export default Navbar;