
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, saveCartToDatabase, getCartFromDatabase } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items); 
  const dispatch = useDispatch();
  const cartLoaded = useSelector(state => state.cart.cartLoaded);

  useEffect(() => {
    dispatch(getCartFromDatabase());
  }, [dispatch]);

  useEffect(() => {
    if (!cartLoaded) {
      return;
    }

    dispatch(
      saveCartToDatabase({
        cart: cart
      })
    );
  }, [cart, cartLoaded, dispatch]);
  
  const calculateTotalAmount = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      const quantity = item.quantity;
      const cost = Number(item.cost);
      total += quantity * cost;
    });
    return total;
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity -1 }));
    } else {
      dispatch(removeItem(item.name));
    }    
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleContinueShopping = (e) => {
    
  };

  const handleCheckoutShopping = (e) => {
    alert('Purchase ability will be enabled upon backend construction.');
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = (item) => {
    let subtotal = 0;
    const quantity = item.quantity;
    const cost = item.cost;
    subtotal += quantity * cost;
    return subtotal;
  };

  return (
    <div className="cart-container">
      <div className="cart-total">Total Cart Amount:  <span className="total">{calculateTotalAmount(cart)} coin</span></div>
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
              <button className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="continue-shopping-btn">
        <button onClick={onContinueShopping}>Continue Shopping</button>
        <br />
        <button onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
        <br />
      </div>
    </div>
  );
}

export default CartItem;

