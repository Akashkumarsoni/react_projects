import React, { useEffect } from 'react'
import MediaControlCard from './FoodCard'

const FoodContainer5 = (props) => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div><h2>Burger & Beverages</h2>
    <div className='allproducts'>
    {props.products.map((i,index)=><div className='carddiv'><MediaControlCard  nameoffood={i.name} price={i.price} id={i.id} addtocart={props.addfood}/></div>)}
    </div></div>
  )
}

export default FoodContainer5