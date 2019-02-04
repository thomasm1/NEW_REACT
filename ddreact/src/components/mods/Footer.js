
import React from 'react';
import {  Footer   } from 'react-materialize';

import '../css/footer.css';

export default () => ( 
<Footer copyrights="&copy; 2018 All Rights Reserved."
  moreLinks={
    <a className="links grey-text text-lighten-3 right" href="http://www.thomasmaestas.net" >thomasmaestas.net</a>
  }
  links={
    <ul> 
      <li><a className="links grey-text text-lighten-3" href="http://www.thomasmaestas.net/profile.html#contactme">Contact Information</a></li>
      <li></li>
    </ul>
  }
  className='footer-blue'
> 
    <h5 className="white-text center">THANK YOU FOR VISITING</h5>
    <hr />
    <p className="grey-text text-lighten-4"><a className="thomasat links grey-text text-lighten-3" href="mailto:thomas@ourdailytech.com">thomas@ourdailytech.com </a></p>
</Footer>
)