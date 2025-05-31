import Nav from "./assets/Components/Navbar/Nav.jsx";
import { Route, Routes } from 'react-router-dom';
import Products from './assets/Components/Products/Products.jsx';

import Recipies from "./assets/Components/Recipies/Recipies.jsx";
import Users from "./assets/Components/Users/Users.jsx";
import Cartitems from "./assets/Components/Navbar/Cartitems.jsx";
import Favoriteitems from "./assets/Components/Navbar/Favoriteitems.jsx"; 
import Productdetails from "./assets/Components/Products/Productdetails.jsx";
import Notfound from "./assets/Components/Products/Notfound.jsx";
import Recipidetails from './assets/Components/Recipies/Recipidetails.jsx';
import Userdetails from "./assets/Components/Users/Userdetails.jsx";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Productdetails />} />
        <Route path='/recipies' element={<Recipies />} />
        <Route path='/users' element={<Users />} /> 
        <Route path='/cartitems' element={<Cartitems/>} />
        <Route path='/favoriteitems' element={<Favoriteitems/>} />
        <Route path='*' element={<Notfound/>} />
        <Route path="/recipies/:id" element={<Recipidetails />} />
        <Route path="/users/:id" element={<Userdetails />} />
      </Routes> 
    </div> 
  );
}
export default App;