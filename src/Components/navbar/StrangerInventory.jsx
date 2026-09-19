
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
    <div className="si-container">
      <div className="si-items">
        {cart.map(item => (
          <div className="si-item" key={item.name}>
            <img className="si-item-image" src={item.image} alt={item.name} />
            <div className="si-item-details">
              <div className="si-item-name">{item.name}</div>
              <div className="si-item-quantity">
                <button className="si-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="si-item-quantity-value"> {item.quantity} </span>
                <button className="si-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <button
                className="si-item-delete" 
                onClick={() => handleRemove(item)}
              >
                Drop Item
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="close-si-btn" onClick={onCloseStrangerInventory}>Close Inventory</button>
      </div>
    </div>
  );
}

export default StrangerInventory;

