
import React from 'react';
import { Button, Modal } from 'react-materialize';
import '../css/modal.css'
const mods = { 
	backgroundColor:'blue' 
} 

export default () => (  
<Modal
  header='OUR DAILY TECH' 
  fixedFooter
  style={mods}
  trigger={<Button className="button">OUR DAILY TECH</Button>}> 
	<div className="modBehave ">  

<div class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer"> 
	<p>&copy; 2018 All Rights Reserved. &nbsp;| <a href="http://www.thomasmaestas.net"  >thomasmaestas.net &nbsp;|</a> <a href="mailto:thomas@ourdailytech.com"  > thomas@ourdailytech.com &nbsp;|</a> <a href="http://www.thomasmaestas.net/profile.html#contactme" title="Contact Information: thomasmaestas.net"> Contact Information</a></p>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">_</button>
      </div>
    </div> 
  </div> 
</div> 

	</div>

	<div id="febarchive">
	<p id="blogs">&nbsp;</p>
	</div>  
  </Modal>  
)
