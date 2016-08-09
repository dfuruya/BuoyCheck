import React from 'react';

const Buoy = props => {
  return (
    <div>
      {props.buoys.map(buoy =>
        <button type="button" className="list-group-item" key={buoy.title} onClick={() => props.buoyClick(buoy)}>
          {buoy.title}
        </button>
      )}
    </div>
  );
}

export default Buoy;
