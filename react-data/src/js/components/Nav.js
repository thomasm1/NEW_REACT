var React = require('react');
var NavLink = require('react-router-dom').NavLink;


function Nav(){
	return(
		<div id="menu-box" className="clearfix">
          	<nav id="site-navigation" className="main-navigation clearfix">
				<ul id='menu-dash2menu' className='nav'>
					<li>
						<NavLink exact activeClassName='current-menu-item' to="/utility-user-react">
							T=M-M
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName='current-menu-item' to="/utility-user-react/utility-profile">
							PER CAPITA ENERGY USAGE
						</NavLink>
					</li>
				</ul>
		    </nav>
        </div>	
		)
}

//module.exports = Nav;
export default Nav;