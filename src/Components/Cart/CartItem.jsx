
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state = state.cart.items); 
  const dispatch = useDispatch();
  


}
