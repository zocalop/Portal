
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { recieveItem, dropItem, getSIFromDatabase, saveSIToDatabase } from './SISlice.jsx';
import { itemArray } from '../Trader/ItemArray.js';

const StrangerInventory = ({ onCloseStrangerInventory }) => {
  const stranger_inventory = useSelector(state => state.stranger_inventory.items); 
  const dispatch = useDispatch();
  const siLoaded = useSelector(state => state.stranger_inventory.siLoaded);

  const displayInventory = stranger_inventory.map(item => {
    const product = itemArray
      .flatMap(category => category.wares)
      .find(product => product.name === item.name);

    return {
      ...item,
      image: product?.image
    };
  });

  useEffect(() => {
    console.log("SI COMPONENT MOUNTED");

    dispatch(getSIFromDatabase());

    return () => {
      console.log("SI COMPONENT UNMOUNTED");
    };
  }, [dispatch]);

  useEffect(() => {
    console.log("SI STATE CHANGED:", stranger_inventory);
    console.log("SI LOADED:", siLoaded);
  }, [stranger_inventory, siLoaded]);

  useEffect(() => {
    if (!siLoaded) {
      return;
    }

    dispatch(
      saveSIToDatabase({
        si: stranger_inventory
      })
    );
  }, [stranger_inventory, siLoaded, dispatch]);

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
        {displayInventory.map(item => (
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

