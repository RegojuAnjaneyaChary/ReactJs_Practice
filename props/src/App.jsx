import Nav from "./assets/Nav";
import { Route, Routes } from 'react-router-dom';
import Products from "./Products";

import Recipies from "./Recipies";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/recipies' element={<Recipies />} />
        <Route path='/users' element={<Users />} /> 
      </Routes> 
    </div> 
  );
}
export default App;