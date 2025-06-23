import React from 'react'
import { Outlet } from 'react-router'
import MenuComponent from '../components/MenuComponent'

const MainLayout = () => {
  return (
    <div>
        <header>
            <h1>Práctica básica ReactJS - Pokemons</h1>
            <MenuComponent/>
        </header>
        <Outlet/>
        <footer>
            <p>Proyecto de listado de Pokemons - Práctica básica Módulo ReactJS</p>
            <p>Designed by <a href="https://www.linkedin.com/in/alegarse/" target='_blank' title='Go to Linkedin Profile'>Alejandro García Serrano</a></p>
        </footer>
    </div>
  )
}

export default MainLayout