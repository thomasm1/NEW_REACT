import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from './LineChart';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to TMM</h1>
 
      <hr></hr>
      <h5>Shortcuts :</h5>
      <Link to="/fuel-savings"><i>FUEL SAVINGS REACT APP</i></Link> 

        <LineChart elementWidth={600} elementHeight={270} />
    </div>
  );
};

export default HomePage;
