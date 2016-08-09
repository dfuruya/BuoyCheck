import React from 'react';
import axios from 'axios';
import Buoy from '../Buoy/Buoy';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.context.favoritesList.length === 0) {
      this.fetchAllFavorites();
    }
  }

  fetchAllFavorites() {
    axios.get('/favorites')
    .then(response => {
      this.context.setFavoritesList(response.data);
      this.context.setFetchError(false);
    })
    .catch(err => {
      this.context.setFetchError(true);
    });
  }

  handleFavoriteClick(buoy) {
    axios.delete('/favorites/' + buoy._id)
    .then(response => {
      this.context.setFavoritesList(response.data);
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h2>Favorites</h2>
          {this.context.fetchError ? `Sorry, we couldn't fetch your list of favorited buoys! :(` :
          <ul>
            <Buoy buoyClick={buoy => this.handleFavoriteClick(buoy)} />
          </ul>
          }
      </div>
    );
  }
}

Favorites.contextTypes = {
  favoritesList: React.PropTypes.any,
  fetchError: React.PropTypes.any,
  setFavoritesList: React.PropTypes.any,
  setFetchError: React.PropTypes.any,
};

export default Favorites;
