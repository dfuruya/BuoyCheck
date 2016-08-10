import React from 'react';
import axios from 'axios';
import Buoy from '../Buoy/Buoy';
import { Button } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    if (this.context.buoysList.length === 0) this.fetchAllBuoys();
  }

  getAllBuoys() {
    axios.put('/main')
    .then(response => {
      this.context.setBuoysList(response);
    })
    .catch(err => {
      console.log('Unable to refresh live buoy list: ', err);
    });
  }

  fetchAllBuoys() {
    axios.get('/main')
    .then(response => {
      console.log('Fetching from RSS feed: ', response.data);
      this.context.setBuoysList(response.data);
      // this.context.setFetchError(false);
    })
    .catch(err => {
      // this.context.setFetchError(true);
    });
  }

  handleBuoyClick(buoy) {
    axios.post('/favorites', {
      title: buoy.title,
      date: buoy.date,
      link: buoy.link,
      description: buoy.description,
    })
    .then(results => {
      if (Array.isArray(results.data)) {
        this.context.setFavoritesList(results.data);
      } else {
        console.log('Buoy already exists', buoy.title);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h2>Main Page</h2>
        <Button
          className="btn btn-primary"
          onClick={this.fetchAllBuoys}>Refresh RSS Feed</Button>
        <h3>Click on a station below to add to Favorites:</h3>
        {this.context.buoysList.length === 0 ? <img src="./spinner.gif" /> : null}
        <ul className="list-group">
          <Buoy
            buoys={this.context.buoysList}
            buoyClick={buoy => this.handleBuoyClick(buoy)} />
        </ul>
      </div>
    );
  }
}

Main.contextTypes = {
  buoysList: React.PropTypes.any,
  // fetchError: React.PropTypes.any,
  setFavoritesList: React.PropTypes.any,
  setBuoysList: React.PropTypes.any,
  setFetchError: React.PropTypes.any,
};

export default Main;
