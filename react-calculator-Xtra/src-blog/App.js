import React, { Component } from 'react';
import './App.css'; 
import Button from './components/Button';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Carousel from './components/Carousel';
import Modal from './components/Modal'; 
//import {Pagination,      } from 'react-materialize';
  
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <header className="App-header">
        <Modal />
        </header>
       <Dropdown />
       <Card />
       <Button />
      
     <Carousel />
 
    <Footer />
      </div>
    );
  }
}

export default App;
