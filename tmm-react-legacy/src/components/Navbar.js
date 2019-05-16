
import React from 'react';
import {Navbar, NavItem } from 'react-materialize';
import logo from '../logo.svg'; 
import '../css/navbar.css';

export default () => (  
  
<Navbar className="navbar navbar-default" brand='OUR DAILY TECH BLOG' left> 
 

  <img src="src/img/thomas-maestas.jpg" alt="picture of Thomas at Satellite Cafe, Albuquerque Central Ave. " className="profile"
  />

  <div className="container  ">
 
    <div id="navbar" className="collapse navbar-collapse  ">

      <ul className="nav navbar-nav profile nav-space">
 
 
<NavItem className="nav navbar-nav profile nav-space" href='get-started.html'>OUR DAILY TECH BLOG</NavItem>
<NavItem href='components.html'>BLOG POST ARCHIVE</NavItem>
<NavItem href='get-started.html'>CODING &amp; DATA</NavItem> 
<NavItem href='components.html'>_FOR_CAT_EYES_ONLY_</NavItem>
 
        <li>

          <a href="services.html">ABOUT</a>

        </li>



      </ul>

      <ul className="nav navbar-nav navbar-right">

        <li>

          <a href="https://twitter.com/ThomasMaestas" target="_blank">

            <i className="fa fa-twitter"></i>

          </a>

        </li>

        <li>

          <a href="https://www.facebook.com/thomas.m.maestas" target="_blank">

            <i className="fa fa-facebook"></i>

          </a>

        </li>

        <li>

          <a href="http://linkedin.com/in/thomasmaestas" target="_blank">

            <i className="fa fa-linkedin"></i>

          </a>

        </li>
      </ul>

    </div>
 
  </div>
</Navbar> 

)
