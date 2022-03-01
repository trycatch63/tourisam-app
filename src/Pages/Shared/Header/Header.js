import React from "react";
import { Link } from "react-router-dom";
// import useAuth from "../../../Hook/useAuth";
import logo from '../../../images/logo.png';
import "./Header.css";



const Header = () => {
//    const { handleLogout, user } = useAuth();

  
  return (
        <div className="top-header">
        <nav className="navbar header-nav navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/home">
                <img
                        className="d-block w-100 logoImage"
                        src={logo}
                        alt="logo"
                />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                    <ul className="navbar-nav">						
                        <Link className="nav-link active" to="/home">Home</Link>
                        <Link className="nav-link" to="/packages">Packages</Link>                      
                        <Link className="nav-link" to="/payment">Payment</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                        <Link className="nav-link" to="/contact">Contacts</Link> 
                        {/* {user.email ? (
                           <Link className="nav-link" to="/login">
                                <li>My Orders</li>
                            </Link>
                            ) : ""
                        }    
                        {user.email ? (
                          <Link className="nav-link" to="/managePackage">
                            <li>Manage All Order</li>
                         </Link>
                            ) : ""
                        }  
                        {user.email ? (
                           <Link className="nav-link" to="/addPackage">
                                <li>Add New Package</li>
                            </Link>
                            ) : ""
                        }                
                        {user.email ? (
                           <button onClick={handleLogout} className="nav-link" to="/logout">Logout</button>
                            ) : (
                            <Link className="nav-link" to="/login">
                                <li>Login</li>
                            </Link>
                            )
                        } */}
                        {/* <Link className="nav-link" to="/register">Register</Link> */}
                        {/* <h2 className="nav-link">{user.displayName}</h2> */}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Header;
