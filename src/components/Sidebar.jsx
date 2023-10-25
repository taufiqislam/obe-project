import React from 'react'
import {Link} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className='Sidebar-logo'>

        </div>
        <ul className='Sidebar-menu'>
            <li><Link to='/'>Mission</Link></li>
            <li><Link to='/vision'>Vision</Link></li>
            <li><Link to='/peo'>PEO</Link></li>
            <li><Link to='/plo'>PLO</Link></li>
            <li><Link to='/ilo'>ILO</Link></li>
        </ul>
    </div>
  )
}
