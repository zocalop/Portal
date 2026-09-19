
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../Cart/CartSlice.jsx';

const StrangerInventory = ({ onCloseStrangerInventory }) => {
  const cart = useSelector(state => state.cart.items); 
  const dispatch = useDispatch();
  
  const calculateTotalAmount = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      const quantity = item.quantity;
      const cost = item.cost;
      total += quantity * cost;
    });
    return total;
  };

  const handleDecrement = (item) => {
  };

  const handleIncrement = (item) => {
  };

  const handleContinueShopping = (e) => {
    
  };

  const handleCheckoutShopping = (e) => {
  };

  const handleRemove = (item) => {
  };

  const calculateTotalCost = (item) => {
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost} coin</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value"> {item.quantity} </span>
                <button className="cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: <span className="total">{calculateTotalCost(item)} coin</span></div>
              <div className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</div>
            </div>
          </div>
        ))}
      </div>
      <div className="close-si-btn">
        <button onClick={onCloseStrangerInventory}>Close Inventory</button>
      </div>
    </div>
  );
}

export default StrangerInventory;

