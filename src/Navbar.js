import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { CartProvider, createCartIdentifier, initialState, useCart, totalItems } from "react-use-cart";

function Navbar() {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal, totalItems, emptyCart } = useCart();
  return (
    <div>
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div className="container">
    <a className="navbar-brand" href="/">Yazid & Yasin Furniture<span>.</span></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    

    <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto  mb-md-0">
            <li > <a className="nav-link" href="/">Home</a></li>
            <li><a className="nav-link" href="/shop">Shop</a></li>
            {/* <li><a className="nav-link" href="/products">Products</a></li> */}
            <li><a className="nav-link" href="/about">About</a></li>
            <li><a className="nav-link" href="/services">Services</a></li> 
            <li><a className="nav-link" href="/contact">Contact</a></li>
            
        </ul>
       
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><a className="nav-link" href="/checkin"><img src="images/user.svg"/></a></li>
            <li><a className="nav-link" href="/cart"><img src="images/cart.svg"/>  ( {totalItems} )  </a></li>
        </ul>
    </div>
    <br/>
    <br/>
    
</div>

</nav>
    </div>
  )
}

export default Navbar