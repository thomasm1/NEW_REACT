
import React from 'react';
import {Navbar, NavItem, Dropdown, MenuItem, SideNav, SideNavItem, Carousel, Breadcrumb, Button, Modal, CollapsibleItem, Collapsible   } from 'react-materialize';
import logo from '../logo.svg';

import '../css/navbar.css';

export default () => ( 
  <div>
  <Carousel  images={[
  '../img/art1.jpg', 
  '../img/art2.jpg', 
  '../img/art3.jpg', 
  '../img/art4.jpg', 
  '../img/art5.jpg', 
  '../img/art6.jpg', 
  '../img/art7.jpg', 
  '../img/art8.jpg', 
  '../img/art9.jpg', 
  '../img/art10.jpg', 
  '../img/art11.jpg', 
  '../img/art12.jpg', 
  '../img/art13.jpg', 
  '../img/art15.jpg', 
  '../img/art0.jpg'   
]} />
<Collapsible>
  <CollapsibleItem header='First' icon='filter_drama'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Second' icon='place'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Third' icon='whatshot'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
</Collapsible>

<Modal
  header='Modal Header'
  fixedFooter
  trigger={<Button>BLOG: MODAL READING</Button>}>
 </Modal>
  </div>
)