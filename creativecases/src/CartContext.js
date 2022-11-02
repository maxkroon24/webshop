import React, { createContext, useState } from 'react'
export const CartContext = createContext()
const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubTotal] = useState([])
    const [subTotalRounded, setSubTotalRounded] = useState()
    return (
         <CartContext.Provider 
            value={{
                cartItems,
                setCartItems,
                subTotal,
                setSubTotal,
                setSubTotalRounded,
                subTotalRounded
             }}>
               {props.children}
         </CartContext.Provider>
    )
}
export default CartContextProvider