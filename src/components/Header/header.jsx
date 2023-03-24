import Logo from "../Logo/logo"
import Navbar from "../Navbar/navbar"

import React from 'react'
import './header.css'
import './headerMobile.css'

export default function Header() {
    return (
        <section className="entete">
            <Logo />
            <Navbar />
        </section>
    )
}