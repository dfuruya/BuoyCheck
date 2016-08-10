import React from 'react';

const Buoy = props => {
  return (
    <div>
      {props.buoys.map(buoy =>
        <li type="button" className="list-group-item" key={buoy.title} onClick={() => props.buoyClick(buoy)}>
          {buoy.title}
        </li>
      )}
    </div>
  );
}

export default Buoy;
