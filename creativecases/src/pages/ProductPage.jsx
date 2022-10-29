import React from 'react'
import Layout4 from "../pages/Layout4";
import {useState, useEffect} from 'react'
import {db} from '../firebase-config'
import { useNavigate } from 'react-router-dom';
import {collection, getDocs} from 'firebase/firestore'
function ProductPage() { 
  const [products, setProducts] = useState([])
  const productsCollectionRef = collection(db, 'products')
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {

    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef)
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getProducts()
  }, [])
  function getProductInfo(e , id, product) {
    e.preventDefault()
    navigate(`/products/${id}`, {state: product})
  }
  return (
   
    <>
    <Layout4 />
    <div className="filter-wrapper">
      <input type="text" placeholder='Search...' className='input-filter' onChange={e => setSearchTerm(e.target.value)}/>
    </div>
    <div className='products-wrapper'>
    {products.filter((product) => {
      if(searchTerm === '') {
        return product
      }
      else if(product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.type.toLowerCase().includes(searchTerm.toLowerCase())) {
        return product
      }
    }).map((product) => {
      return (
        <>
        <div className="product" onClick={(e) => getProductInfo(e, product.id, product)} key={product.id}>
          <img src={product.image} alt="product-img" className='product-image'/>
      <div className='product-info'>
        <h1 className='product-title'>{product.title}</h1>
        <h1 className="price">${product.price}</h1>
      </div>
      </div>
      </>
      )
    })}
    </div>
    </>
  )
}

export default ProductPage