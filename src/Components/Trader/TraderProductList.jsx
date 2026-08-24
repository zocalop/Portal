
import React from 'react';
import { useState, useEffect } from 'react';
import CartItem from '../Cart/CartItem.jsx';
import { addItem } from '../Cart/CartSlice.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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
        Close trader inventory
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
  const itemArray = [
    {
      Category: "Miscellanea",
      wares: [
        {
          name: "Spriggan Sap",
          image: "https://static.wikia.nocookie.net/elderscrolls/images/8/8f/Skyrim_spriggan_sap.png/revision/latest/scale-to-width-down/1000?cb=20120902145056",
          description: "Unknown",
          cost: "3 coins"
        },
        {
          name: "Bee in a Jar",
          image: "https://static.wikia.nocookie.net/elderscrolls/images/9/96/TESV_Bee_In_A_Jar_Crop.png/revision/latest?cb=20120909073812",
          description: "A bee, in a jar.",
          cost: "5 coins"
        },
        {
          name: "Empty Wine Bottle",
          image: "https://static.wikia.nocookie.net/elderscrolls/images/e/e1/Empty_Wine_Bottle.png/revision/latest?cb=20120620043015",
          description: "A bottle of generic wine, sans vin.",
          cost: "1 coin"
        }
      ]
    },
    {
      Category: "Food",
      wares: [
        {
          name: "Honeycomb",
          image: "https://static.wikia.nocookie.net/elderscrolls/images/7/7c/Honeycomb.png/revision/latest?cb=20120902141456",
          description: "Unprocessed honeycomb",
          cost: "5 coins"
        }
      ]
    }
  ]

  return (

    <div className="Trader">
      <br />
      <div className="product-grid">
        <div className="product-list">
          {itemArray.map(category => (
            <React.Fragment key={category.Category}>
              <div className="category-title">
                <h2>{category.Category}</h2>
              </div>
              {category.wares.map(item => (
                <div className="product-card" key={item.name}>
                  <img
                    className="product-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>{item.cost}</p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <br />
   {/*<TraderNavbar />*/}
    </div>
  );
}

export default TraderProductList;
