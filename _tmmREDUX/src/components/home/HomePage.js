import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h2>TMM</h2>
        <Link to="about" className="btn btn-primary btn-lg">About TMM</Link>
      </div>
    );
  }
}

export default HomePage;
