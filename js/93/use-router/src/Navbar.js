import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li> | {' '}
        <li><NavLink to="/about"
        // style={({isActive}) => {
        //   return {
        //     color: isActive ? 'red' : 'black'
        //   }
        // }}
        >About</NavLink ></li> | {' '}
        <li><NavLink to="/contact"
        // className={({isActive}) => {
        //   return isActive ? 'purple' : ''
        // }}
        >Contact</NavLink></li> | {' '}
        <li><NavLink to="/foo">Foo</NavLink></li>
      </ul>
    </nav>
  )
}
