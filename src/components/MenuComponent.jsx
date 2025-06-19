import React from 'react'
import { Link } from 'react-router'

const MenuComponent = () => {
  return (
    <div className='menu-component'>
        <Link className='link-menu' to={'/create'}>Crear pokemon</Link>
        <Link className='link-menu' to={'/contact'}>Contacto</Link>
    </div>
  )
}

export default MenuComponent