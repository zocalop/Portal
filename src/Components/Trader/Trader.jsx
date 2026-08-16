
import TraderProductList from './TraderProductList.jsx';
import { Link } from 'react-router-dom';

function Trader() {

  return (
    <div className="Trader">
      <div className="seydaneen-text">
        Welcome, stranger.  Have a look around.<br />
        Let me know if there's anything special that you're looking for.
      </div>
      <div>
        <Link
          to="/traderproductlist"
          className="exit" /*.exit is same as .see-wares*/
          style={{ 
            '--exit-top': '375px',
            '--star-top': '-16px',
            '--star-bottom': '+41px',
          }}
        >
          See the trader's wares
        </Link>
      </div>
      <Link
        to="/seydaneenleave"
        className="exit"
          style={{
            '--exit-top': '750px',
            '--star-top': '-16px',
            '--star-bottom': '+41px',
          }}
      >
        Leave the Trader
      </Link>
    </div>
  );
}

export default Trader;
