
import React from 'react';
import { useState, useEffect } from 'react';
import CartItem from '../Cart/CartItem.jsx';
import { addItem } from '../Cart/CartSlice.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ItemArray } from './ItemArray.js';

export function TraderNavbar() {
  const [showCart, setShowCart] = useState(false);

  /* Use when something must occur before execution of the function? */
  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const location = useLocation();
  if (location.pathname !== '/traderproductlist') {
    return null;
  }

  return (
    <div className="trader-navbar">
      <Link
        to="/trader"
        className="exit-trader-inventory"
        style={{
/*        '--exit-top': '500px',          No top, container is hierarchically renders at bottom*/
          '--star-top': '-16px',
          '--star-bottom': '+41px'
        }}
      >
        Close Trader Inventory
      </Link>
      <div>
        <p 
          className = "exit-trader-inventory"
          onClick={() => setShowCart(true)}
          role = "button"
          style={{ 
            'cursor':'pointer',
            '--star-top':'-16px',
            '--star-bottom':'+41px'  
          }}
        >
          Review Purchase
        </p>
        <div className={`trader-cart-item ${showCart ? 'visible' : ''}`}>
          <CartItem onContinueShopping={handleContinueShopping} />
        </div>
      </div>
    </div>
  )
}

function TraderProductList() {
  const [addedToCart, setAddedToCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch(); 

//////// Item purchase handler set ////////

  const handleAddToPurchase = (e, item) => {
    e.preventDefault();
    dispatch(addItem(item));
  };

  const isInCart = (itemName) =>
    cart.some(item => item.name === itemName);
  
  const addButton = (item) =>
    isInCart(item.name) ? "Added to Purchase" : "Add to Purchase";

  return (

    <div className="Trader-Wares">
      <br />
        <div className="product-list">
          {itemArray.map(category => (
            <div className="product-category" key={category.Category}>
              <div className="category-title-container">
                <p className="category-title-style">{category.Category}</p>
              </div>
              <div className="product-grid">
                {category.wares.map(item => (
                  <div className="product-card" key={item.name}>
                    <img
                      className="product-image"
                      src={item.image}
                      alt={item.name}
                    />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p style={{ 'color': '#8B451F'  }}>{item.cost} coin</p>
                    <button 
                      className="add-to-purchase-button"
                      onClick={(e) => handleAddToPurchase(e, item)}
                      disabled={isInCart(item.name)}
                    >
                      {addButton(item)}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      <br />
    </div>
  );
}

export default TraderProductList;
