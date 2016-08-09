import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>React in ES6 is working!</h1>
        <ul role="nav">
          <li><Link to="/main">Main</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
