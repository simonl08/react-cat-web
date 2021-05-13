import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Cat = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const cat = { name: props.name, price: props.price, image: props.image };
    setCart(currentState => [...currentState, cat]);
  }
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image}></img>
      <h3>£{props.price}</h3>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}