import React from 'react'

const NavListItem = ({title}) => {
  return (
    <li><a href="#">{title}<i className="fa-solid fa-chevron-down"></i></a></li>
  )
}

export default NavListItem