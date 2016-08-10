import React from 'react';

const FavChild = props => {
  return (
    <div>
      {props.favDescription.map(buoy =>
        <li key={buoy}>{buoy}</li>
      )}
    </div>
  );
}

export default FavChild;
