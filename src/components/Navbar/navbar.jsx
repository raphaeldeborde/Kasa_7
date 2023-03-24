import React from 'react'
import {NavLink} from "react-router-dom"
import './navbar.css'
import './navbarMobile.css'

export default function Navbar() {
    return (
        <nav className="nav">
            <NavLink to="/" className="accueil"> Accueil </NavLink>
            <NavLink to="/apropos" className="apropos"> À Propos </NavLink>
        </nav>
    )
}