import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Pages/Home.jsx';
import Packages from './Pages/Packages.jsx';
import Locations from './Pages/Locations.jsx';
import Gallery from './Pages/Gallery.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import AboutUs from './Pages/AboutUs.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path="packages" element={<Packages />} />
          <Route path="locations" element={<Locations />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
