import'./Navbar.css'
function Navbar(){
    return(
      <div>
        <nav className="navbar">
          <div className="logo">
          <span><b>BR</b></span>
          <span>  Architects</span>
          
          </div>
         
           <div className="nav-links">
             <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contacts">Contacts</a>
           </div>
        </nav>
      </div>
    )
}
export default Navbar;