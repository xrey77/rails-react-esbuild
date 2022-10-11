import React from 'react';  
import { Link } from 'react-router-dom';
import Login from './login';
import Register from './register';

export default function Header(propts) {
    return (
        <div>            
            <Login/>
            <nav className="navbar navbar-expand-lg bg-light">            
            <div className="container-fluid">
                <Register/>
                <Link className="navbar-brand" to="/">Rails7ReactJS</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                    </li>

                    <li className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="#">ATM Monintoring</Link></li>
                        <li><Link className="dropdown-item" to="#">ATM Support 24/7</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="#">Software Banking Solutions</Link></li>
                    </ul>
                    </li>


                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="#">Self Service Terminals</Link></li>
                        <li><Link className="dropdown-item" to="#">Automated Teller Safe</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="#">ATM Parts</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link to="#" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
                <nav className="navbar navbar-expand-lg">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#LoginstaticBackdrop">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link" data-bs-toggle="modal" data-bs-target="#RegisterstaticBackdrop">Register</Link>
                    </li>
                  </ul>
                </nav>
                </div>
            </div>
            </nav>
        </div>
    );
}