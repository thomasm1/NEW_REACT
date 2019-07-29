import React from 'react'

function Header() {
    return (
      <header style={headerStyle}>
          <h2>CoinTracker Console</h2>
      </header>
    )
}

const headerStyle = {
  background: 'lightblue',
  color: 'darkblue',
  textAlign: 'center',
  padding:'10px'
}

export default Header;