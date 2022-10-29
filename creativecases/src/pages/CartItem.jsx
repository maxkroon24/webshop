import React, {useState, useContext} from 'react'
import {BsFillTrashFill} from 'react-icons/bs'
import {CartContext} from '../CartContext'
function CartItem({item, i}) {
    const [cartCounter, setCartCounter] = useState(item.count)
    function getCartCounter(result, e) {
        e.preventDefault()
        if(result === "subtract" && cartCounter > 1 ) {
          setCartCounter(cartCounter - 1)
        }
        if(result === "add" && cartCounter < 100) {
          setCartCounter(cartCounter + 1)
        }
      }
      const removeCartItem = (e, model, title) => {
        e.preventDefault()
        setCartItems((current) =>
        current.filter((item) => item.title + item.model !== title + model)
      );
  
    }
    const { cartItems, setCartItems} = useContext(CartContext)
  return (
    <>
    <div className="cart-item" key={i}>
                <img src={item.image} alt="cart-item" className="cart-item-image" />
                <div className="cart-info-wrapper" >
                <BsFillTrashFill value={item.title} style={{position: 'absolute', right: '0', top: '0.4rem', cursor: 'pointer'}} size={23} className="delete-button" onClick={e => removeCartItem(e, item.model, item.title)}/>
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-model">{item.model}</div>
                <div className="cart-item-price">${Math.round(((item.price * cartCounter) + Number.EPSILON) * 100) / 100}</div>
                <div className="counter-2">
                    <button className="min-counter" onClick={e => getCartCounter('subtract', e )}>-</button>
                    <div className="counter-result">{cartCounter}</div>
                    <button className="plus-counter" onClick={e => getCartCounter('add', e)}>+</button>
                    </div>
                </div>
                </div>
                </>
  )
}

export default CartItem