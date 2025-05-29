import React from 'react';
import Reactrouterdom from './Reactrouterdom';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return(
    <div>
      <Reactrouterdom />
     <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />

     </Routes>

    </div>

  )
}
export default App;