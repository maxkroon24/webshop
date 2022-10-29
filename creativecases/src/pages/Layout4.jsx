import { Outlet, Link } from "react-router-dom";
import React, {useState, useContext, useEffect} from 'react'
import {CartContext} from '../CartContext'
import CartItem from './CartItem'
const Layout4 = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isCartExpanded, setIsCartExpanded] = useState(false)
  const { cartItems, setCartItems} = useContext(CartContext)
  function getNavExpanded() {
    setIsNavExpanded(false)
  }
  function getIsCartExpanded(e) {
    e.preventDefault()
    setIsCartExpanded(false)
  }
  return (
    <>
      <nav className="nav">
        <li className="logo"><Link to="/" className="a1">Creative</Link></li>
        <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
        <ul className={isNavExpanded ? "links expanded" : "links"}>  
          <li className="link"><Link to="/about" className="a">About</Link></li>
          <li className="link"><Link to="/contact" className="a">Contact</Link></li>
          <li className="link"><Link to="/" className="a2">Sign up</Link></li>
          <li className="link"><Link to="/" className="a2">Log in</Link></li>
          <li className="link"><a className="a2" onClick={()=>{ getNavExpanded(); setIsCartExpanded(true);}}>Cart</a></li>
        </ul>
      </nav>
      <div className={isCartExpanded ? 'cart-section-wrapper' : 'cart-section-wrapper-closed'}>
        <div className="cart-grid">
        <div className="h4-close-wrapper">
        <h4 className="your-cart-title">Your cart:</h4>
        <h4 className="submit-for-models" onClick={(e) => getIsCartExpanded(e)}> &#x2716;</h4>
        </div>
            {cartItems.map((item, i) => {
                return (
                    <CartItem item={item} key={i} />
                )
                })}
                </div>
                </div>
      <Outlet />
    </>
  )
};

export default Layout4;