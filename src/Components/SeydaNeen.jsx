
import React from 'react';

function SeydaNeen() {
  
  return (
    <div className="SeydaNeen">
      <div 
        className="seydaneen-text"
      >
        In this backwater port settlement,<br />
        beyond the aged docks upon which the sea spat you,<br /> 
        there is no want of the strange and enthralling.
      </div>
      <div className="seydaneen-locations">
        <a 
          href="/gamblersden"
          className="gamblersden"
        >
          Gambler's Den
        </a>
        <a
          href="/inn"
          className="inn"
        >
          Inn
        </a>
        <a
          href="/trader"
          className="trader"
        >
          Trader
        </a>
        <a
          href="/bookhouse"
          className="bookhouse"
        >
          Bookhouse
        </a>
        <a
          href="/theroadout"
          className="theroadout"
        >
          The Road Out
        </a>
      </div>
      <div className="seydaneen-text2"
      >
        The sparse and scattered huts that dotted the periphery of Seyda Neen<br />
        hinted at the pull of some dark thing, or the fear of it,<br /> 
        that would anchor a soul to this forgotten place.
      </div>
    </div>
  );
}

export default SeydaNeen;
