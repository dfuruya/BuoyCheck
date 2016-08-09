import React from 'react';
import axios from 'axios';
import Buoy from '../Buoy/Buoy';

class Main extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    if (this.context.buoysList.length === 0) {
      this.fetchAllBuoys();
    }
  }

  fetchAllBuoys() {
    axios.get('/main')
    .then(response => {
      console.log('refreshed: ', response);
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
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h2>Main</h2>
        <button onClick={this.fetchAllBuoys}>Refresh</button>
        <ul>
          <Buoy buoys={this.context.buoysList} buoyClick={buoy => this.handleBuoyClick(buoy)} />
        </ul>
      </div>
    );
  }
}

Main.contextTypes = {
  favoritesList: React.PropTypes.any,
  buoysList: React.PropTypes.any,
  // fetchError: React.PropTypes.any,
  setBuoysList: React.PropTypes.any,
  setFetchError: React.PropTypes.any,
};

export default Main;
