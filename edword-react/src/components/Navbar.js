import React, {useState, useEffect} from "react";
import './styles/Navbar.css';
import {Link, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "../authorisation/LoginAuth";
import jwt_decode from "jwt-decode";
import Notification from "./Notification";


function Navbar(){


    
    const [clicked, setClicked] = useState(false);
    const mobileMenuOff = () => {
        setClicked(false);
    }
    
    const changeClicked = () => setClicked(!clicked);
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector(state => state.auth);

    const handleLogout = () => {

        
        dispatch(signout()).then(() => {
            history.replace('/');
        })
        if(!auth.login){
            setClicked(false);
        }
    }

    const [info, setInfo] = useState({role: "NULL", name: "NULL"})
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (auth.login) {
            const token= auth.user.second;
            setInfo(jwt_decode(token)) ;
            setStatus(true);
            console.log(info);
        }
    }, [status]);

    

    
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
                          {(info.name !== "NULL") ? (
                              <Link className='nav-page-link'>{info.name}</Link>
                          ) : null}
                    </li>
                    <li className='nav-page'>
                        <Link className='nav-page-link' to='/' onClick={mobileMenuOff}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-page'>
                        <Link className='nav-page-link' to='/learn' onClick={mobileMenuOff}>
                            Learn
                        </Link>
                    </li>
                    <li className='nav-page'>
                        <Link className='nav-page-link' to='/revision' onClick={mobileMenuOff}>
                            Revision
                        </Link>
                    </li>
                    <li className='nav-page'>
                        <Link className='nav-page-link' to='/sets' onClick={mobileMenuOff}>
                            Sets
                        </Link>
                    </li>
                    {(auth.login) ? (
                        <li className='nav-page'>
                            <Link className='nav-page-link-mobile' to='/' onClick={handleLogout}>
                                Sign out
                            </Link>
                        </li>
                    ) : (
                        <li className='nav-page'>
                            <Link className='nav-page-link-mobile' to='/signin' onClick={mobileMenuOff}>
                                Sign in
                            </Link>
                        </li>
                    )}
                </ul>
                {(auth.login) ? (
                    <Link to='/' className='navbar-but'>
                        <button className='navbar-button' onClick={handleLogout}>
                            Sign out
                        </button>
                    </Link>
                ) : (
                    <Link to='/signin' className='navbar-but'>
                        <button className='navbar-button'>
                            Sign in
                        </button>
                    </Link>
                )}

            <Notification/>
            </div>
          </nav>
      </>
    );
}

export default Navbar;
