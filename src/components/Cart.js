import React, {useContext} from 'react';
import {CartContext} from './CartContext';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((accumulator, current) => (Math.round(accumulator + current.price)), 0);

  return (
    <div className="cart">
        <h2>Basket</h2>
        <p><strong>Items in cart :</strong> {cart.length}</p>
        <p><strong>Total price :</strong> £{totalPrice}</p>
    </div>
  )
}