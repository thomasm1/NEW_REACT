
import React from 'react';
import { Carousel,   Button, Modal, CollapsibleItem, Collapsible   } from 'react-materialize';

// import logo from '../logo.svg';    Navbar, NavItem, Dropdown, MenuItem, SideNav, SideNavItem,

import '../css/navbar.css';

export default () => ( 
  <div>
  <Carousel  images={[
  '../../styles/img/art1.jpg', 
  '../../styles/img/art2.jpg', 
  '../../styles/img/art3.jpg', 
  '../../styles/img/art4.jpg', 
  '../../styles/img/art5.jpg', 
  '../../styles/img/art6.jpg', 
  '../../styles/img/art7.jpg', 
  '../../styles/img/art8.jpg', 
  '../../styles/img/art9.jpg', 
  '../../styles/img/art10.jpg', 
  '../../styles/img/art11.jpg', 
  '../../styles/img/art12.jpg', 
  '../../styles/img/art13.jpg', 
  '../../styles/img/art15.jpg', 
  '../../styles/img/art0.jpg'   
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