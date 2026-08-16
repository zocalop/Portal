
import { useState, useEffect } from 'react';
import CartItem from '../Cart/CartItem.jsx';
import { addItem } from '../Cart/CartSlice.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
/*import SprigganSap from '../../assets/SprigganSap.png';*/

function TraderProductList() {
  

  const itemArray = [
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

  return (
    <div className="Trader">
      <div className="product-grid">
        <div className="product-list">
          {itemArray.map(item => (
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
        </div>
      </div>
      <Link
        to="/trader"
        className="leave-traderproductlist"
      >
        Close trader inventory
      </Link>
    </div>
  );
}

export default TraderProductList;
