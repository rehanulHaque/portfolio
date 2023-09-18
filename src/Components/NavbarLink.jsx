import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBarLink = ({name, link}) => {
  return (
    <NavLink to={link} className="mr-3 text-xl">
      {name}
    </NavLink>
  )
}

export default NavBarLink
