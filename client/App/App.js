import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      favoritesList: [],
      buoyList: [],
      fetchError: false,
    };
  }

  getChildContext() {
    return {
      favoritesList: this.state.favoritesList,
      buoyList: this.state.buoyList,
      fetchError: this.state.fetchError,
      setFavoritesList: this.setFavoritesList.bind(this),
      setBuoyList: this.setBuoyList.bind(this),
      setFetchError: this.setFetchError.bind(this),
    };
  }

  setFavoritesList(list) {
    this.setState({favoritesList: list});
  }

  setBuoyList(list) {
    this.setState({buoyList: list});
  }

  setFetchError(bool) {
    this.setState({fetchError: bool});
  }

  render() {
    return (
      <div>
        <h1>Buoy Checker</h1>
        <ul role="nav">
          <li><Link to="/main">Main</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = {
  favoritesList: React.PropTypes.any,
  buoyList: React.PropTypes.any,
  fetchError: React.PropTypes.any,
  setFavoritesList: React.PropTypes.any,
  setBuoyList: React.PropTypes.any,
  setFetchError: React.PropTypes.any,
};

export default App;
