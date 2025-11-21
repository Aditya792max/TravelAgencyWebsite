import { Link, Outlet } from 'react-router-dom';
import './Header.css'
import { FiHome, FiUser, FiMapPin, FiCamera, FiMail, FiBriefcase } from 'react-icons/fi';

function Header() {
     return (
          <>
               <header>
                    <nav>
                         <div className="header-content">
                              <div className="header-item">
                                   <Link to="/"><FiHome /></Link>
                              </div>
                              <div className="header-item">
                                   <Link to="/about"><FiUser /></Link>
                              </div>
                              <div className="header-item">
                                   <Link to="/locations"><FiMapPin /></Link>
                              </div>
                              <div className="header-item">
                                   <Link to="/contact"><FiMail /></Link>
                              </div>
                              <div className="header-item">
                                   <Link to="/packages"><FiBriefcase /></Link>
                              </div>
                              <div className="header-item">
                                   <Link to="/gallery"><FiCamera /></Link>
                              </div>
                         </div>
                    </nav>
               </header>

               <main>
                    <Outlet />
               </main>
          </>
     )
}

export default Header;