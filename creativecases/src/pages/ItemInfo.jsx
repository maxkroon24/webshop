import React, {useState} from 'react'
import { useLocation } from "react-router-dom";
import Layout3 from "../pages/Layout3";
function ItemInfo() {
    const { state } = useLocation();
    const [counter, setCounter]= useState(1)
    function getCount(result, e) {
      e.preventDefault()
      if(result === "subtract" && counter > 1) {
        setCounter(counter - 1)
      }
      if(result === "add") {
        setCounter(counter + 1)
      }
    }
  return (
    <>
    <Layout3 />
    <div className="item-page-wrapper">
      <div className="item-img-wrapper">
        <img src={state.image} alt="" />
      </div>
      <div className="item-info-wrapper">
        <h1 className="item-info-title">{state.title}</h1>
        <p className="item-info-price">${state.price}</p>
        <button className="item-info-options">Choose your model</button>
        <button className="add-to-cart">Add to cart</button>
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