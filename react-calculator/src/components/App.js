/* eslint-disable import/no-named-as-default */
import React from 'react';
// import b from  'bootstrap';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Footer from './mods/Footer'; 
import Modal from './mods/Modal'; 
  // import Carousel from './mods/Carousel';
// import Navbar from './mods/Navbar';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';  //   <Route path="/blog" component={BlogPage} />  
import NotFoundPage from './NotFoundPage';
import '../styles/styles.scss';  

class App extends React.Component {
  render() {
    
const blog = { backgroundColor: 'transparent',
padding: '10px',
opacity: .75,
margin: '10px',
minHheight:'500px',
backgroundColor:'rgba(50, 160, 197, 0.322)',
width:'130%' };
    const activeStyle = { color: 'blue',
  backgroundColor:'aliceblue', padding:'8px' };
    const bg = { backgroundColor: 'transparent',
  padding: '10px',
  opacity: .75,
  margin: '10px',
  minHheight:'500px',
  backgroundColor:'rgba(50, 160, 197, 0.322)',
  width:'130%' };
  const nav = { padding:'10px', margin:'0 20px 40px',fontSize:'2rem', lineHeight:'2.5rem',

  }
      return (
      <div style={bg} >
      
        <div style={nav} className="subdailytech white hover" >
         
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Calculator</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink> 
          {' | '}
          <NavLink to="/blog" activeStyle={activeStyle}>Blog</NavLink> 
        
        </div>
        <div style={blog}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />  
          <Route path="/blog" component={BlogPage} />  
      
          
          <Route component={NotFoundPage} />
        </Switch> 
    <Modal />
        </div>
        <hr /> 
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
