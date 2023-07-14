import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'

const Menu = props => {
    <div className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/about'>Sobre</Link>
                </li>
                <li>
                    <Link to='/param/1'>Parametro #01</Link>
                </li>
                <li>
                    <Link to='/param/2'>Parametros #02</Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default Menu;