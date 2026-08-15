
import { useState, useEffect } from 'react';
import CartItem from '../Cart/CartItem.jsx';
import { addItem } from '../Cart/CartSlice.jsx';
import { useDispatch, useSelector } from 'react-redux';
import SprigganSap from '../../assets/SprigganSap.png';

function TraderProductList() {

  const itemArray = [
    {
      name: "Spriggan Sap",
      image: SprigganSap,
      description: "Unknown",
      cost: "3 coins"
    }
  ]

  return (
    <div>

    </div>
  );
}

export default TraderProductList;
