import React from 'react'
import { useLocation } from "react-router-dom";
function ItemInfo() {
    const { state } = useLocation();
  return (
    <div>{state.title}</div>
  )
}

export default ItemInfo