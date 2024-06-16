import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'

export const ProductComponent = () => {

    const allP = useSelector((state) => state.allProducts.products)

    const renderList = allP.map((product) => {
        const {id, title, image, price, category} = product
        return(
        
        <div className='ui link cards' key={id}>
            <Link to={`product/${id}`}>
            <div className='card'>
                <div className='image'>
                    <img src={image} alt={title} style={{width:"285px", height:"380px", objectFit:"fill"}} />
                </div>
            <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{category} </div>
            </div>
            </div>
            </Link>
        
    </div>
        )
    })

    // const gridStyle = {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(4, 1fr)',
    //     gap: '1rem',
    // };

  return (
    <div className='product-container' >{renderList}</div>
  )
}
