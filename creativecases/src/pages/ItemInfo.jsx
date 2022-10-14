import React from 'react'
import { useLocation } from "react-router-dom";
function ItemInfo() {
    const { state } = useLocation();
  return (
    <>
    <div>{state.title}</div>
    <div className="description">{state.description}</div>
    </>
  )
}

export default ItemInfo