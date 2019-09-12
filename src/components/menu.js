import React from 'react'
import { Link } from "gatsby"

const Menu = () => (
  <div style={{
    background: 'lightgreen',
    paddingTop: '10px',
  }}>
    <ul style={{
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <li><Link to="/mango">Mango</Link></li>
      <li><Link to="/jackfruit">Jackfruit</Link></li>
      <li><Link to="/longan">Longan</Link></li>
      <li><Link to="/rambutan">Rambutan</Link></li>
      <li><Link to="/sugarapple">Sugar-apple</Link></li>
    </ul>
  </div>
)

export default Menu
