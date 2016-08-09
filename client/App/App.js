import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      favoritesList: [],
      buoysList: [],
      fetchError: false,
    };
  }

  getChildContext() {
    return {
      favoritesList: this.state.favoritesList,
      buoysList: this.state.buoysList,
      fetchError: this.state.fetchError,
      setFavoritesList: this.setFavoritesList.bind(this),
      setBuoysList: this.setBuoysList.bind(this),
      setFetchError: this.setFetchError.bind(this),
    };
  }

  setFavoritesList(list) {
    this.setState({favoritesList: list});
  }

  setBuoysList(list) {
    this.setState({buoysList: list});
  }

  setFetchError(bool) {
    this.setState({fetchError: bool});
  }

  render() {
    return (
      <div className="col-lg-6 container-fluid">
        <div className="nav">
          <h1 className="jumbotron">Welcome to the Buoy Checker!</h1>
          <ul className="nav navbar-default" role="nav">
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = {
  favoritesList: React.PropTypes.any,
  buoysList: React.PropTypes.any,
  fetchError: React.PropTypes.any,
  setFavoritesList: React.PropTypes.any,
  setBuoysList: React.PropTypes.any,
  setFetchError: React.PropTypes.any,
};

export default App;
