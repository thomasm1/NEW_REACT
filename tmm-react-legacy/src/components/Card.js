
import React from 'react';
import {Parallax,  Card, Button, Modal, CardTitle} from 'react-materialize';


export default () => ( 
  <div>
<div>
<Modal
  header='Modal Header'
  fixedFooter
  trigger={<Button>MODAL WITH FIXED FOOTER</Button>}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</Modal>
  <Parallax imageSrc="../img/laTriomphe"/>
  <div className="section white">
    <div className="row container">
      <h2 className="header">header</h2>
      <p className="grey-text text-darken-3 lighten-3">Parallax.</p>
      <Card  style={{width:'300px'}} className='small'
header={<CardTitle image='../img/laTriomphe'>Our Daily Tech Blog</CardTitle>}
actions={[<a href='techblog.tmaestas.net'>techblog.tmaestas.net</a>]}> 
</Card>
    </div>
  </div>
  <Parallax imageSrc="../img/laTriomphe"/>
</div>
<Card  style={{width:'300px'}} className='small'
header={<CardTitle image='../img/MaestasReykjavikBanner.png'>Our Daily Tech Data Consulting</CardTitle>}
actions={[<a href='http://www.ourdailytechblog.com'>data.tmaestas.net</a>]}>
</Card>

  </div>
)
