import Navbar from './Navbar.jsx'
import './App.css'
import Banner from './Banner.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contacts from './Contact.jsx';
import Map from './Map.jsx';
import Footer from './Footer.jsx';

function App() {
  return <div className="App">
    <Navbar/>
    <Banner/>
    <Projects/>
    <About/>
    <Contacts/>
    <Map/>
    <Footer/>
    </div>
}
export default App;
