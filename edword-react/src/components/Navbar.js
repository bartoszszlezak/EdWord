import React, {useState} from "react";
import './styles/Navbar.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';

function Navbar(){

    const [clicked, setState] = useState(false);
    const mobileMenuOff = () => setState(false);
    const changeClicked = () => setState(!clicked);
    return(
      <>
          <nav className={'navbar'}>
              <div className='nav-container'>
                  <Link className={'nav-logo'} to={'/home'} onClick={mobileMenuOff}>
                      EdWord <i className={"fas fa-book-reader"} />
                  </Link>
              </div>
              <div className={'menu-icon'} onClick={changeClicked}>
                  <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
              </div>

              <ul className={clicked ? 'menu-mobile' : 'menu-desktop'}>
                <li className={'nav-page'}>
                    <Link className={'nav-page-link'} to={'/home'} onClick={mobileMenuOff}>
                        Home
                    </Link>
                </li>
                  <li className={'nav-page'}>
                      <Link className={'nav-page-link'} to={'/learn'} onClick={mobileMenuOff}>
                          Learn
                      </Link>
                  </li>
                  <li className={'nav-page'}>
                      <Link className={'nav-page-link'} to={'/revision'} onClick={mobileMenuOff}>
                          Revision
                      </Link>
                  </li>
                  <li className={'nav-page'}>
                      <Link className={'nav-page-link-mobile'} to={'/signin'} onClick={mobileMenuOff}>
                          Sign In
                      </Link>
                  </li>
              </ul>
          </nav>
      </>
    );
}

export default Navbar;
