
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state = state.cart.items); 
  const dispatch = useDispatch();
  
  const calculateTotalAmount = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      const quantity = item.quantity;
      const cost = parseFloat(item.cost.substring(1));
      total += quantity * cost;
    });
    return total;
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount:  ${calculateTotalAmount}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItem;
