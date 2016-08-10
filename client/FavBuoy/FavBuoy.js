import React from 'react';
import FavChild from '../FavChild/FavChild';

const FavBuoy = props => {
  return (
    <div>
      {props.buoys.map(buoy =>
        <li type="button" className="list-group-item" key={buoy.title} onClick={() => props.buoyClick(buoy)}>
          <h4>{buoy.title}</h4>
          <FavChild favDescription={buoy.description} />
        </li>
      )}
    </div>
  );
}

export default FavBuoy;
