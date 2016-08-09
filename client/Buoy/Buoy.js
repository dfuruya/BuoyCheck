import React from 'react';

const Buoy = props => {
  return (
    <div>
      {props.buoys.map(buoy =>
        <li key={buoy.title} onClick={() => props.buoyClick(buoy)}>
          {buoy.title}
        </li>
      )}
    </div>
  );
}

export default Buoy;
