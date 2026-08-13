
import React from 'react';

function Trader() {

  return (
    <div className="Trader">
      <div className="seydaneen-text">
        Welcome, stranger.  Have a look around.<br />
        Let me know if there's anything special that you're looking for.
      </div>
      <a
        href="/seydaneenleave"
        className="exit"
      >
        Leave the Trader
      </a>
    </div>
  );
}

export default Trader;
