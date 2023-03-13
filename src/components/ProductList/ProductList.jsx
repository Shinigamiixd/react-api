import { useState, useEffect } from 'react'
import Product from "../Product/Product"
import productService from "../../services/productService"

const ProductList = () => {
  const [products, setProducts] = useState([])

  const getProducts = () => {productService().then((p) => {setProducts(p)})}
  useEffect(() => {getProducts()}, [])

  return (
    <div>
      <Product products={products}/>
    </div>
  )
}

export default ProductList