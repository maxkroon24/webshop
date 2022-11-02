import React, {useState, useContext, useEffect} from 'react'
import { createRoutesFromElements, useLocation, useNavigate,} from "react-router-dom";
import Layout3 from "../pages/Layout3";
import {CartContext} from '../CartContext'
import toast, { Toaster } from 'react-hot-toast';
function ItemInfo() {
    const { state } = useLocation();
    const [counter, setCounter]= useState(1)
    const [popup, setPopup] = useState(false)
    const [modelResult, setModelResult] = useState("")
    const navigate = useNavigate()
    const { cartItems, setCartItems} = useContext(CartContext)
    const getSelectedButtonStyle = (e) => {
      e.target.classList?.toggle("selected-wrapper");
    };
    function goBack(e) {
      e.preventDefault()
      navigate(-1)
    }
    function getCount(result, e) {
      
      e.preventDefault()
      if(result === "subtract" && counter > 1) {
        setCounter(counter - 1)
      }
      if(result === "add") {
        setCounter(counter + 1)
      }
    }
    function getCountOfSelectedDivs(e) {
      e.preventDefault()
      const divSelectedCount = document.querySelectorAll('.selected-wrapper').length
      if(divSelectedCount === 1) {
      setPopup(false)
      const modelResultText = document.querySelector('.selected-wrapper').textContent
      setModelResult(modelResultText)
    }
    else if(divSelectedCount > 1) {
      const error = document.querySelector('.error-message')
      error.textContent = "Please only select one model"
      error.style.color = "red";  
    }
    else {
      setPopup(false)
    }
    }
     function getCartItems(e)  {
      
      e.preventDefault()
      if(modelResult === '') {
        window.alert('please select a model')
      }
      else if(cartItems.some(item => item.model === modelResult && item.title === state.title) ) {
        window.alert('you already have this item in your cart')
      }
      else {
        setCartItems(cartItems => [...cartItems, {
      'title': state.title, 
      'image': state.image, 
      'price': state.price,
      'model': modelResult,
      'count': counter
     }])
     toast.success(`Added ${state.title} to your cart!`)
      }
      setCounter(1)
      setModelResult('')
     }
     useEffect(() => {
     if(cartItems) {
      return
     }
     }, [cartItems])
     
  return (
    <>
    <Layout3 />
    {popup && state.type === 'iphone' ? (
      <div className="overall-wrapper">
    <div className="popup-wrapper">
      <div className="popup">
        <h4 className="submit-for-models" onClick={e => getCountOfSelectedDivs(e)}> &#x2716;</h4>
        <div className="selectable-div-grid">
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 14 Pro Max
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 14 Pro
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 14 Plus
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 14
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone SE 3
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 13 Pro Max
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 13 Pro
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 13
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 13 mini
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 12 Pro Max
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 12 Pro
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 12
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 12 mini
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone XR
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone SE 2
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 11 Pro
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 11 Pro Max
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 11
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone XS
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone XS Max
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone XR
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone X
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 8
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 8 Plus
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 7
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 7 Plus
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone SE 1
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 6s 
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 6s Plus
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 6
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        iPhone 6 Plus
        </div>
      </div>
      <h4 className="error-message"></h4>
      </div>
    </div>
    </div>) : popup && state.type === 'airpods' ? (
      <div className="overall-wrapper">
      <div className="popup-wrapper">
      <div className="popup">
        <h4 className="submit-for-models" onClick={e => getCountOfSelectedDivs(e)}> &#x2716;</h4>
        <div className="selectable-div-grid">
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        AirPods Pro 2
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        AirPods 3
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        AirPods Pro
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        AirPods 2
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        AirPods 1
        </div>
      </div>
      <h4 className="error-message"></h4>
      </div>
      </div>
      </div>) : popup && state.type === 'samsung' ? (
      <div className="overall-wrapper">
        <div className="popup-wrapper">
        <div className="popup">
          <h4 className="submit-for-models" onClick={e => getCountOfSelectedDivs(e)}> &#x2716;</h4>
          <div className="selectable-div-grid">
          <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
          Samsung Galaxy S22 Ultra
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
          Samsung Galaxy S22
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A01
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A10
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A11
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A12
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
          Samsung Galaxy A20e
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A21s
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A31
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A32 5G
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A40
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A41 
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A42 5G
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A50
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A51
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A52
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A70
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A71
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A72
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A72 5G
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
          Samsung Galaxy A80
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy A90 5G
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy M10
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy M12
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy M20
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy M21
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy M30
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy M31
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy M40
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy M51
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy M6
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S21 Ultra
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S21+
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S21
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S20 Ultra
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S20+
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S20
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S10 Lite
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S10 5G
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S10+
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S10e
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S10
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S9+
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S9
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S8+
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S8
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S7 edge
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S7
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S6 edge+
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S6 edge
        </div>
        <div className="select-wrapper" onClick={e => getSelectedButtonStyle(e)}>
        Samsung Galaxy S6
        </div>
        </div>
        <h4 className="error-message"></h4>
        </div>
        </div>
        </div>
      ) : (
        ''
      )

  }
    <div className="item-page-wrapper">
      <div className="back-button-wrapper" >
      <button className="go-back-button" onClick={(e) => goBack(e)}></button>
      </div>
      <div className="item-img-wrapper">
        <img src={state.image} alt={state.title}/>
      </div>
      <div className="item-info-wrapper">
        <h1 className="item-info-title">{state.title}</h1>
        <p className="item-info-price">${state.price}</p>
        <div className="button-wrapper-models">
        <button className="item-info-options" onClick={(e) => {setPopup(true)}}>Choose your model</button>
        <p className="model-result">model: {modelResult}</p>
        </div>
        <button className="add-to-cart" onClick={e => getCartItems(e)}>Add to cart</button>
        <Toaster />
        <div className="counter">
        <button className="min-counter" onClick={(e) => getCount("subtract", e)}>-</button>
        <div className="counter-result">{counter}</div>
        <button className="plus-counter" onClick={(e) => getCount("add", e)}>+</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ItemInfo