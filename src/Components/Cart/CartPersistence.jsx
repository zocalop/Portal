
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function CartPersistence() {
  const cart = useSelector(state => state.cart.items);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return null;
}
