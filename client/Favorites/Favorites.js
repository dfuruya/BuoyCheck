import React from 'react';
import axios from 'axios';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesList: [],
      fetchError: false,
    };
  }

  componentDidMount() {
    if (this.state.favoritesList.length === 0) this.fetchAllFavorites();
  }

  fetchAllFavorites() {
    axios.get('/favorites')
    .then(response => {
      // TODO: fetch should not be called everytime
      console.log(response.data);
      this.setState({
        fetchError: false,
        favoritesList: response.data,
      });
    })
    .catch(err => {
      this.setState({
        fetchError: true,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Favorites</h2>
        <ul>
          {this.state.fetchError ? `Sorry, we couldn't fetch your list of favorited buoys! :(` : this.state.favoritesList.map(fav =>
            <li key={fav._id}>
              {fav.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Favorites;
