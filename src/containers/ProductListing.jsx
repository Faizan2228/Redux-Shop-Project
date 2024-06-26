import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../assets/redux/actions/ProductActions'

export const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((error) => console.log(error))

        console.log(response.data)
        dispatch(setProducts(response.data))
    }

     useEffect(()=>{
        fetchProducts()
     },[])


  return (
    <div style={{width:'99%'}}>
        <ProductComponent />
    </div>
  )
}
