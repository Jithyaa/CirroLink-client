import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart as ShoppingCartIcon, Search } from '@mui/icons-material';
import '../scss/styles/navbar.scss'

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span className="language">EN</span>
          <div className="search-container">
            <input className="input" type="text" placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <Link to="/">
            <h1 className="logo">UrbanFoot</h1>
          </Link>
        </div>
        <div className="right">
          <Link to="/allproduct" className="menu-item">PRODUCTS</Link>
          <Link to="/signup" className="menu-item">REGISTER</Link>
          <Link to="/login" className="menu-item">SIGN IN</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar
