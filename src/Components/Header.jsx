import { Link, Outlet } from 'react-router-dom';
import './Header.css'
import { FiHome, FiUser, FiMapPin, FiCamera, FiMail, FiBriefcase } from 'react-icons/fi';


function Header() {
     return (
          <header>
               <nav>
                    <Link to="/"><FiHome /> Home</Link>
                    <Link to="/about"><FiUser /> About</Link>
                    <Link to="/locations"><FiMapPin /> Locations</Link>
                    <Link to="/contact"><FiMail /> Contact</Link>
                    <Link to="/packages"><FiBriefcase /> Packages</Link>
                    <Link to="/gallery"><FiCamera /> Gallery</Link>
               </nav>
               <main>
                    <Outlet />
               </main>
          </header>
     )
}

export default Header;