
import React from 'react';
import {Footer   } from 'react-materialize';

import '../css/menu.css';

export default () => ( 
<Footer copyrights="&copy; 2018 All Rights Reserved."
  moreLinks={
    <a className="grey-text text-lighten-4 right" href="#!">More </a>
  }
  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="http://www.thomasmaestas.net" >thomasmaestas.net</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
      <li><a className="grey-text text-lighten-3" href="http://www.thomasmaestas.net/profile.html#contactme">Contact Information</a></li>
      <li><a className="grey-text text-lighten-3" href="mailto:thomas@ourdailytech.com">thomas@ourdailytech.com </a></li>
    </ul>
  }
  className='footer-blue'
>
 
    <h5 className="white-text">THANK YOU FOR VISITING</h5>
    <p className="grey-text text-lighten-4">TMM</p>
</Footer>
)