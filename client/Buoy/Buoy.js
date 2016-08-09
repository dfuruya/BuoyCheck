import React from 'react';

const Buoy = (props, context) => {
  return (
    <div>
      {context.favoritesList.map(buoy =>
        <li key={buoy.title} onClick={() => props.buoyClick(buoy)}>
          {buoy.title}
        </li>
      )}
    </div>
  );
}

Buoy.contextTypes = {
  favoritesList: React.PropTypes.any,
  fetchError: React.PropTypes.any,
  setFavoritesList: React.PropTypes.any,
  setFetchError: React.PropTypes.any,
};

export default Buoy;
