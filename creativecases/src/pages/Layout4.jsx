import { Outlet, Link } from "react-router-dom";
import React, {useState, useContext, useEffect, useCallback} from 'react'
import {CartContext} from '../CartContext'
import CartItem from './CartItem'
const Layout4 = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isCartExpanded, setIsCartExpanded] = useState(false)
  const { cartItems, setCartItems, subTotal, setSubTotal, setSubTotalRounded, subTotalRounded} = useContext(CartContext) 
  const subtotal = subTotal.map(item => item.price).reduce((prev, curr) => Number(prev) + Number(curr), 0);
  setSubTotalRounded(Math.round(subtotal + Number.EPSILON))
  function getNavExpanded() {
    setIsNavExpanded(false)
  }
  function getIsCartExpanded(e) {
    e.preventDefault()
    setIsCartExpanded(false)
  }
  return (
    <>
      <nav className="nav" style={{backgroundColor: 'black'}}>
        
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
      <li className="logo"><Link to="/" className="a1">Creative</Link></li>
        <ul className={isNavExpanded ? "links expanded" : "links"}>
          <li className="link"><Link to="/about" className="a" onClick={getNavExpanded}>About</Link></li>
          <li className="link"><Link to="/contact" className="a" onClick={getNavExpanded}>Contact</Link></li>
          <li className="link"><a className="a2" onClick={()=>{ getNavExpanded(); setIsCartExpanded(!isCartExpanded);}}>Cart</a></li>
        </ul>
      </nav>
      <div className={isCartExpanded ? 'cart-section-wrapper' : 'cart-section-wrapper-closed'}>
        <div className="h4-close-wrapper">
            <h4 className="your-cart-title">Your cart:</h4>
        <h4 className="submit-for-models" onClick={(e) => getIsCartExpanded(e)}> &#x2716;</h4>
        </div>
        <div className="cart-grid">
          
            {cartItems.map((item, i) => {
                return (
                    <CartItem item={item} i={i} />
                )
                })}
        </div>
        {cartItems.length > 0 ? 
        <>
        <div className="subtotal-wrapper">
        <div className="subtotal-text-wrapper">
          <p>Subtotal:</p>
        </div>
        <div className="subtotal-number-wrapper">
          <p>{subTotalRounded}</p>
        </div>
        </div>
        <div className="payment-section">
          <button className="checkout-btn">Checkout</button>
        </div>
        </>
      : ''}
    </div>
      <Outlet />
    </>
  )
};

export default Layout4;