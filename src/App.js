import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Events from './Components/Events/Events'
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Achievement from './Components/Achivement/Achievement';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route exact path='*' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/achievement' element={<Achievement />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
