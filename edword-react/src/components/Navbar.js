import React, {useState} from "react";
import './styles/Navbar.css';
import {Link} from "react-router-dom";

function Navbar(){

    const [clicked, setClicked] = useState(false);
    const mobileMenuOff = () => setClicked(false);
    const changeClicked = () => setClicked(!clicked);

    
return(
      <>
          <nav className='navbar'>
            <div className='nav-container'>
                <Link className='nav-logo' to='/' onClick={mobileMenuOff}>
                    EdWord <i className="fas fa-book-reader" />
                </Link>
                <div className='menu-icon' onClick={changeClicked}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

              <ul className={clicked ? 'menu-desktop active' : 'menu-desktop'}>
                    <li className='nav-page'>
                        <Link className='nav-page-link' to='/' onClick={mobileMenuOff}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-page'>
                        <Link className='nav-page-link' to='/sets' onClick={mobileMenuOff}>
                            Learn
                        </Link>
                    </li>
                    <li className='nav-page'>
                        <Link className='nav-page-link' to='/sets' onClick={mobileMenuOff}>
                            Revision
                        </Link>
                    </li>
                    <li className='nav-page'>
                        <Link className='nav-page-link-mobile' to='/signin' onClick={mobileMenuOff}>
                            Sign In
                        </Link>
                    </li>
                </ul>
                
                <Link to='/signin' className='navbar-but'>
                    <button className='navbar-button'>
                        Sign In
                    </button>
                </Link>
                    
            </div>
          </nav>
      </>
    );
}

export default Navbar;
