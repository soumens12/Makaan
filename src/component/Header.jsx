import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';


function Header() {

    const [isActive, setIsActive] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //for dropdown click parent active
    const handleChildClick = () => {
      setIsActive(true);
    };

    //for sticky navbar
    const handleScroll = () => {
        if (window.scrollY > 45) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
    // Attach and detach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <!-- Navbar Start --> */}
        <div className={`nav-bar container-fluid bg-transparent ${isSticky ? 'sticky-top' : ''}`}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <a href="/" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="assets/img/icon-deal.png" alt="Icon" style={{width: "30px", height: "30px"}} />
                    </div>
                    <h1 className="m-0 text-primary">Makaan</h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                    <NavLink to="/" className={({isActive}) =>isActive ? "nav-item nav-link active" : "nav-item nav-link"}>
                        Home
                    </NavLink>
                        
                        <NavLink to="/about" className={({isActive}) =>isActive ? "nav-item nav-link active" : "nav-item nav-link"}>About</NavLink>
                        <div className="nav-item dropdown">
                            <NavLink to="/property" className={`dropdown-toggle nav-link ${isActive ? 'active' : ''}`} data-bs-toggle="dropdown">Property</NavLink>

                            <div className="dropdown-menu rounded-0 m-0">
                                <NavLink to="/propertylist" className="dropdown-item" onClick={handleChildClick}>Property List</NavLink>
                                <NavLink to="/propertytype" className="dropdown-item" onClick={handleChildClick}>Property Type</NavLink>
                                <NavLink to="/propertyagent" className="dropdown-item" onClick={handleChildClick}>Property Agent</NavLink>
                            </div>
                        </div>

                        <div className="nav-item dropdown">
                            <NavLink to="/pages" className={`dropdown-toggle nav-link ${isActive ? 'active' : ''}`} data-bs-toggle="dropdown">Pages</NavLink>

                            <div className="dropdown-menu rounded-0 m-0">
                                <NavLink to="/testimonial" className="dropdown-item" onClick={handleChildClick}>Testimonial</NavLink>
                                <NavLink to="*" className="dropdown-item" onClick={handleChildClick}>404 Error</NavLink>
                                
                            </div>
                        </div>
                        
                        <NavLink to="/contact" className={({isActive}) =>isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</NavLink>
                    </div>
                    <NavLink to="" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</NavLink>
                    
                </div>
            </nav>
        </div>
        {/* <!-- Navbar End --> */}
    </>
  )
}

export default Header