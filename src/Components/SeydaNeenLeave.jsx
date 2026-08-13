
import React from 'react';

function SeydaNeenLeave() {
  
  return (
    <div className="SeydaNeenLeave">
      <div className="seydaneenleave-locations">
        <a 
          href="/gamblersden"
          className="gamblersdenleave"
        >
          Gambler's Den
        </a>
        <a
          href="/inn"
          className="innleave"
        >
          Inn
        </a>
        <a
          href="/trader"
          className="traderleave"
        >
          Trader
        </a>
        <a
          href="/bookhouse"
          className="bookhouseleave"
        >
          Bookhouse
        </a>
        <a
          href="/theroadout"
          className="theroadoutleave"
        >
          The Road Out
        </a>
      </div>
      <div className="seydaneenleave-text2"
      >
        Investigate the modest, if not loathsome dwellings<br />
        at the outskirts of Seyda Neen.
      </div>
    </div>
  );
}

export default SeydaNeenLeave;
