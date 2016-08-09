import React from 'react';
import axios from 'axios';
import Buoy from '../Buoy/Buoy';

class Favorites extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    if (this.context.favoritesList.length === 0) {
      this.fetchAllFavorites();
    }
  }

  fetchAllFavorites() {
    axios.get('/favorites')
    .then(response => {
      if (Array.isArray(response.data)) {
        this.context.setFavoritesList(response.data);
        this.context.setFetchError(false);
      } else {
        console.log('Buoy already exists in favorites');
      }
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
        <h2>Favorites Page</h2>
        <h3>Click stations below to remove from Favorites:</h3>
          {this.context.fetchError ? `Sorry, we couldn't fetch your list of favorited buoys! :(` :
          <div className="list-group">
            <Buoy buoys={this.context.favoritesList} buoyClick={buoy => this.handleFavoriteClick(buoy)} />
          </div>
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
