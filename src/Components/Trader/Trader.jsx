
import TraderProductList from './TraderProductList.jsx';
import { Link } from 'react-router-dom';
import {useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function TraderWares() {
  const location = useLocation();
  if (location.pathname !== '/trader') {
    return null;
  }

  return (
    <Link
      to="/traderproductlist"
      className="exit-trader-inventory"
    >
      See Trader's Wares
    </Link>
  );
}

function Trader() {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="Trader">
      <div className="seydaneen-text">
        Welcome, stranger.  Have a look around.<br />
        Let me know if there's anything special that you're looking for.
      </div>
    </div>
  );
}

export default Trader;
