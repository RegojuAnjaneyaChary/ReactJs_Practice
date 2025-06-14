import Nav from "./assets/Components/Navbar/Nav.jsx";
import { Route, Routes } from 'react-router-dom';
import Products from './assets/Components/Products/Products.jsx';
import Recipies from "./assets/Components/Recipies/Recipies.jsx";
import Cartitems from "./assets/Components/Navbar/Cartitems.jsx";
import Favoriteitems from "./assets/Components/Navbar/Favoriteitems.jsx"; 
import Productdetails from "./assets/Components/Products/Productdetails.jsx"

import Recipidetails from './assets/Components/Recipies/Recipidetails.jsx';
import NotFound from "./assets/Components/Products/Notfound.jsx";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Productdetails />} />
        <Route path='/recipies' element={<Recipies />} />
        <Route path="/cartitems" element={<Cartitems />} />
        <Route path='/favoriteitems' element={<Favoriteitems/>} />
      
        <Route path="/recipies/:id" element={<Recipidetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </div> 
  );
}
export default App;